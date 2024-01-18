import React, { useEffect, useState, useCallback } from 'react'
import TalentsLooking from "./TalentLooking";
import styled, { useTheme } from "styled-components";
import CastingType from "./CastingType";
import Details from "./Details";
import Roles from "./RoleSection";
import KeyDates from "./KeyDates";
import SubmissionType from "./SubmissionType";
import UploadImage from "./UploadImage";
import PaymentInfo from "./PaymentInfo";
import SideBar from "./SideBar";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { addJobApi, getJobCastingApi, updateJobApi } from 'network/apis/cd/job';
import { useAuth } from 'context/AuthContext';
import Layout from 'components/Layout';
import { useRouter } from 'next/router';
import toast from "react-hot-toast"
import { convertToUnix } from '@/utils/helper';
import OverlayLoader from 'components/OverlayLoader';
export default function AddJob() {
    const router = useRouter()
    const castingId = router.query
    const [userId, setUserId] = useState('')
    const { token } = useAuth()
    const [loader, setLoader] = useState(false)
    const [talentsLooking, setTalentsLooking] = useState<any>()
    const [castingType, setCastingType] = useState()
    const [details, setDetails] = useState<any>({
        title: '',
        description: '',
        projectLocation: '',
        pinCode: '',
        applicationFrom: '',
        union: '',
        associatedWebsite: '',
        provideNumber: Boolean,
        providePhoto: Boolean,
    })
    const [roles, setRoles] = useState<any>([])
    const [paymentInfo, setPaymentInfo] = useState<any>({
        rateType: '',
        currency: 'USD',
        amount: '',
        time: [],
        expectTime: '',
        description: '',
    })
    const [keyDates, setKeyDates] = useState({
        submission: 0,
        start: 0,
        releaseDate: 0,
    })
    const [submissionType, setSubmissionType] = useState<any>({
        type: null,
        email: [],
        notifyThrough: 0,
    })
    const [imageId, setImageId] = useState(0)
    const [castingImage, setCastingImage] = useState('')
    const [roleId, setRoleId] = useState(0)
    const [finalData, setFinalData] = useState({})
    const theme = useTheme()
    const submit = () => {
        const data = {
            id: 1,
            castingType: castingType,
            talentLooking: talentsLooking,
            projectDetails: details,
            roles: roles,
            paymentInformation: paymentInfo,
            keyDates: keyDates,
            submissionType: submissionType,
        }
        setFinalData(data)
        localStorage.setItem('finalData', JSON.stringify(data));
        onSubmit()
    }
    const onSubmit = async () => {
        const data = {
            project: details.title,
            name: details.title,
            name_original: "Its is foFGDFGD    sting",
            address2: details.associatedWebsite,
            location: details.projectLocation,
            zip: details.pinCode,
            market: details.applicationFrom,
            market_id: "1,2,3",
            sub_timestamp: convertToUnix(keyDates.submission),
            aud_timestamp: convertToUnix(keyDates.start),
            shoot_timestamp: convertToUnix(keyDates.releaseDate),
            asap: "1669766400",
            snr: submissionType.type,
            snr_email: submissionType.email.map((a: any) => [a.mailId]).toString(),
            srn_address: "",
            app_date_time: "from  to",
            app_loc: "",
            // convert simple string to float value 
            rate: parseFloat(paymentInfo.amount).toFixed(2),
            rate_des: "0",
            des: details.description,
            required_phone: details.provideNumber ? '1' : '0',
            required_photo: details.providePhoto ? '1' : '0',
            currency_code: paymentInfo.currency,
            expected_time: paymentInfo.expectTime,
            expected_hours_min: paymentInfo.time[0],
            expected_hours_max: paymentInfo.time[1],
            compensation_bonus: paymentInfo.description,
            notify_through: submissionType.notifyThrough,
            union2: details.union,
            casting_image_id: imageId,
            // casting_categories: [{ "category_id": "1", "subcategory_id": [2, 3] }, { "category_id": "2", "subcategory_id": [15, 16] }],
            casting_categories: talentsLooking,
            role_id: roleId.toString(),
            status: 0,
        }
        try {
            setLoader(true)
            if (userId) {
                const res = await updateJobApi({ token, raw: data, castingId: userId });
                console.log('------Main Parent response updateJobApi --------- ', res)
                router.push(`/cd/review-project/${res.casting_id}`)
            } else {
                const res = await addJobApi({ token, raw: data });
                console.log('------Main Parent response addJobApi --------- ', res)
                router.push(`review-project/${res.casting_id}`)
            }
            setLoader(false)
        }
        catch (err: any) {
            setLoader(false)
            if (err?.errors?.name == 'The name has already been taken.') {
                toast.error('The name has already been taken.')
            } else {
                toast.error('Something went wrong')
            }
            // console.log("Errr....", err)
        }
    }
    // useEffect(() => {
    //     const items = localStorage.getItem('finalData');
    //     if (items) {
    //         const formateData = JSON.parse(items)
    //         setFinalData(formateData)
    //         setDetails(formateData.projectDetails)
    //         // setImage(formateData.castingImage)
    //         setSubmissionType(formateData.submissionType)
    //         setKeyDates(formateData.keyDates)
    //         setTalentsLooking(formateData.talentsLooking)
    //         setCastingType(formateData.castingType)
    //         setPaymentInfo(formateData.paymentInformation)
    //         setRoles(formateData.roles)
    //         // console.log('useEffect after reload ', formateData.projectDetails)
    //     }
    // }, [])
    // Formate data and set in local states 
    const formateLocalData = (data: any) => {
        // formate roles data  

        setTalentsLooking(data.casting_job_categories)
        const roleData = data.bam_roles.map((i: any) => {
            return {
                id: i.role_id,
                roleId: i.role_id,
                roleModel: i.role_categories[0]?.name,
                activeRoleId: i.role_categories[0].id,
                name: i?.name,
                discription: i.des,
                number: i.number_of_people,
                type: '',
                gender: i.gender_female == 1 ? "Female" : i.gender_male == 1 ? 'Male' : 'Other',
                ethnicity: i.ethnicity_african == 1 ? 'African' : i.ethnicity_african_am == 1 ? 'African am' : i.ethnicity_asian == 1 ? 'Asian' : '....',
                range: [i.age_min, i.age_max],
                roleFor: [],
                moreRequirements: [],
            }
        })
        setRoles(roleData)
        // Code to convert email string to array object
        const ary = data.snr_email.split(',')
        const addMail = ary.map((i: any, ix: number) => {
            return {
                id: ix + 1,
                mailId: i,
            }
        })
        // 
        setDetails({
            title: data?.name,
            description: data.des,
            projectLocation: data?.location,
            pinCode: data?.zip,
            applicationFrom: data?.market,
            union: data?.union2,
            associatedWebsite: data?.address2,
            provideNumber: data?.required_phone,
            providePhoto: data?.required_photo,
        })
        setPaymentInfo({
            rateType: '',
            currency: data?.currency_code,
            amount: data?.rate,
            time: [data?.expected_hours_min, data?.expected_hours_max],
            expectTime: data?.expected_time,
            description: data?.compensation_bonus,
        })
        setKeyDates({
            submission: data.sub_timestamp,
            start: data.aud_timestamp,
            releaseDate: data.shoot_timestamp,
        })
        setSubmissionType({
            type: data.snr,
            email: addMail,
            notifyThrough: data.notify_through,
        })
        setCastingImage(data.casting_image.media_path_full)
    }
    // if casting id is present 
    const getApiData = useCallback(async () => {
        if (!castingId.castingId || !token) {
            return
        }
        try {
            setLoader(true)
            const res = await getJobCastingApi({ token, id: castingId.castingId })
            console.log('----Get Data from api in Parent page  -------', res)
            formateLocalData(res)
            setLoader(false)
        } catch (err) {
            setLoader(false)
            console.log("Errr......", err)
        }
    }, [token, castingId])
    useEffect(() => {
        if (castingId.castingId) {
            getApiData()
            setUserId(castingId.castingId.toString())
        } else {
        }
    }, [token, castingId])

    return (
        <Layout feature={false}>
            {loader ? <OverlayLoader /> : ''}
            <ProjectSection theme={theme}>
                <DetailSection>
                    <h1 className='font-bold sm:text-3xl text-2xl'>Let us know about your project</h1>
                    <TalentsLooking getData={talentsLooking} onChange={(e: any) => setTalentsLooking(e)} />

                    {/* <CastingType getData={(castingType: any) => setCastingType(castingType)} /> */}

                    <Details getData={details} onChange={(e: any) => { setDetails((s: any) => ({ ...s, ...e })) }} />
                    <Roles getData={roles} onChange={(roles: any) => setRoles(roles)} roleId={(e: any) => { setRoleId(e) }} />
                    <PaymentInfo getData={paymentInfo} onChange={(e: any) => { setPaymentInfo((s: any) => ({ ...s, ...e })) }} />
                    <KeyDates getDate={keyDates} onChange={(e: any) => { setKeyDates(s => ({ ...s, ...e })) }} />
                    <SubmissionType getData={submissionType} onChange={(e: any) => { setSubmissionType((s: any) => ({ ...s, ...e })) }} />
                    <UploadImage getData={castingImage} onChange={(id: any) => { setImageId(id) }} />
                    {/* bottom buttons  */}
                    <div className='buttons flex items-center justify-end gap-5 mt-5'>
                        <button className='back flex items-center gap-2'>Save for later</button>
                        <button className='next flex items-center gap-2' onClick={submit}> {userId ? 'Update & review your listing' : 'Done & review your listing'} <HiOutlineArrowNarrowRight /></button>
                    </div>
                </DetailSection>
                <SideSection>
                    <SideBar value={finalData} />
                </SideSection>
            </ProjectSection>
        </Layout>
    )
}
const ProjectSection = styled.section`
    display: flex;
    padding: 20px;
    gap: 20px;
    max-width: 1530px;
    margin: 0 auto;
    @media (max-width:450px){
        padding: 10px;
    }
`
const DetailSection = styled.section`
    flex:1;
    & > section{
        background: ${p => p.theme.pure};
        box-shadow: 0px -3px 15px #0000001a, 0px 4px 4px #0000000d;
        border-radius: 8px;
        padding: 20px;
        margin: 30px 0px;
        @media (max-width:450px){
            padding: 14px;
        }
    }
    h2{
        font-weight: 700;
        font-size: 18px;
    }
    /* buttons  */
    .buttons{
        button{
            background:#3C3C4399;
            border-radius: 4px;
            gap: 6px;
            color: ${p => p.theme.pure};
            padding: 10px 20px;
            transition :all 0.5s;
            @media (max-width:450px){
                padding: 8px 10px;
                font-size: 14px;
            }
            svg{
                font-size: 22px;
            }
        }
        button:hover {
            box-shadow: rgb(0 0 0 / 54%) 0px 4px 13px;
        }
        button.next{
            background: ${p => p.theme.primary};
        }
        button.disable{
            opacity: 0.6;
            cursor: no-drop;
        }
        button.disable:hover {
            box-shadow: none;
        }
    }
`
const SideSection = styled.section`
    height: 100%;
    width: 260px;
    position: sticky;
    top: 86px;
    @media (max-width:768px){
        display:none;
    }
`