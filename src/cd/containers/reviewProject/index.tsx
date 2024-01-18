import React, { useCallback, useEffect, useState, useContext } from 'react'
import styled, { useTheme } from 'styled-components'
import { HiArrowRight, HiPlus } from 'react-icons/hi'
import { MdModeEditOutline } from 'react-icons/md'
import { BsCurrencyDollar } from 'react-icons/bs'
import { rgba } from 'polished'
import RoleProfile from './RoleProfile'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useRouter } from 'next/router'
import { getJobCastingApi, getJobRoleApi } from 'network/apis/cd/job'
import { useAuth } from 'context/AuthContext'
import { formatDate } from '@/utils/helper'
import Skeleton from "react-loading-skeleton";
import { ProfileStoreProvider, useProfileStore } from 'context/ProfileStore'
import { fetchZipApi } from 'network/apis/auth'
import { GoCheck } from 'react-icons/go'
import { interestArray } from '@/utils/constants/profile'
export default function ReviewProject() {
    const theme = useTheme()
    const router = useRouter()
    const { token } = useAuth()
    const castingId = router.query
    const [responseData, setResponseData] = useState<any>({})
    const [campanyData, setCampanyData] = useState<any>({})
    const [roleData, setRoleData] = useState<any>([])
    const [castingImage, setCastingImage] = useState('')
    const [loading, setLoading] = useState(true);
    const [zipLocation, setZipLocation] = useState<any>([])
    const [data, setData] = useState(Array)
    const [activeRole, setActiveRole] = useState(0);

    const backBtn = () => {
        router.push('cd/project-details')
    }
    const getApiData = useCallback(async () => {
        if (!castingId.castingId || !token) {
            return
        }
        try {
            setLoading(false)
            const res = await getJobCastingApi({ token, id: castingId.castingId })
            setLoading(true)
            console.log('----Get Data from api in review page api -------', res)
            setResponseData(res)
            setRoleData(res.bam_roles)
        } catch (err) {
            setLoading(true)
            console.log("Errr......", err)
        }
    }, [token, castingId])
    // api to get all the roles 
    const getRoleData = useCallback(async () => {
        try {
            const res = await getJobRoleApi({ token, id: castingId.castingId })
            console.log('response from get role data ', res)
            setRoleData(res.data)
        } catch (err) {
            console.log('Error......', err)
        }
    }, [token, castingId])
    useEffect(() => {
        getApiData()
    }, [getApiData, getRoleData])
    useEffect(() => {
        setCastingImage(responseData?.casting_image?.media_path_full)
    }, [responseData])
    // convert zip to location
    const fetchZip = async (zip: any) => {
        try {
            const res = await fetchZipApi({ zip });
            // console.log('response from  fetchZipApi', res)
            if (res.zipcode) {
                setZipLocation([res.city, res.state])
                // setZipError('')
            } else {
                setZipLocation(['', ''])
                // setZipError("Enter valid ZIP code");
            }
        } catch (err) {
            setZipLocation(['', ''])
            // setZipError("Enter valid ZIP code");
            console.log("Err", err);
        }
    };
    useEffect(() => {
        fetchZip(responseData.zip)
    }, [responseData])

    console.log('roleData', activeRole, roleData)
    return (
        <ProjectSection theme={theme}>
            <div className='info_section'>
                <img src='/svg/Information.svg' />
                <p>This is the preview of your project job post.</p>
                <button>Checkout & post project <HiArrowRight /></button>
            </div>
            <h1 className='font-bold mb-3'>Review your project listing</h1>
            {/* <img src='/images/project-listing.png' /> */}
            <img src={responseData?.casting_image?.media_path_full} />
            {/* <h1>
                {responseData?.zip}
                {responseData?.location}
            </h1> */}
            <div className='user_details my-3'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold mb-3'>{responseData?.project} </h1>
                    <button className='edit_btn' onClick={() => { router.push(`/cd/add-project/${castingId.castingId}`) }}><MdModeEditOutline />Edit</button>
                </div>
                <p className='text-sm'>{responseData?.des}<span>Read More...</span></p>
                <hr />
                {/* Audition details */}
                <div className='flex items-center justify-between mt-5'>
                    <h3 className='font-bold text-base mb-3'>Audition details</h3>
                    <button className='edit_btn' onClick={() => { router.push(`/cd/add-project/${castingId.castingId}`) }}><MdModeEditOutline />Edit</button>
                </div>
                <h4>Location<span>{zipLocation[0]}, {zipLocation[1]}</span></h4>
                <h4>Submission <span>{responseData?.snr === 1 ? 'Self Submission' : responseData?.snr === 2 ? 'Open Call' : '__'}</span></h4>
                <h4>Union<span>{responseData?.union2 === 1 ? 'Union and Non-Union' : responseData?.union2 === 2 ? 'Union' : responseData?.union2 === 3 ? 'Non-Union' : responseData?.union2 === 4 ? 'N/A' : '__'}</span></h4>
                <h4 className='pay_paid flex items-center'>Rate/Pay<span><h6><BsCurrencyDollar /> Paid</h6>$100.00 to $1,000 (Flat Rate) for an estimated {responseData?.expected_hours_min ? responseData?.expected_hours_min : '--'} to {responseData?.expected_hours_max ? responseData?.expected_hours_max : '--'}  hours of work</span></h4>
                <h4>Release Date<span>{formatDate(responseData?.shoot_timestamp || 0)}</span></h4>
                <h4>Audition Date<span>{formatDate(responseData?.aud_timestamp || 0)}</span></h4>
                <h4>Expiration Date<span>{formatDate(responseData?.sub_timestamp || 0)}</span></h4>
                <h4> Casting Type<span>Theatre - Non-Equity</span></h4>
                <h4>Seeking talents from<span>{responseData?.market} </span></h4>
                <hr />
                {/* Posted by */}
                <h3 className='font-bold text-base mb-3'>Posted by</h3>
                <div className='posted_by flex gap-4'>
                    <div> <img src='/images/fox casting logo.png' /></div>
                    <div>
                        {/* <h3 className='font-bold text-base'>{useProfileStore().cdProfile.company} </h3>
                        <h5 className='font-bold'>       {useProfileStore().cdProfile.fname} {useProfileStore().cdProfile.lname}  ( {useProfileStore().cdProfile.role})</h5>
                        <h6 className='font-semibold'> Member since</h6>
                        <p>{formatDate(useProfileStore().cdProfile.date_created || 0)}</p> */}
                        <h6 className='font-semibold'>Jobs Posted</h6>
                        <p>32</p>
                    </div>
                </div>
                <hr />
            </div>
            {/* Roles for this project */}
            <div className='role_project'>
                <div className='flex items-center justify-between mt-5'>
                    <h3 className='font-bold text-base mb-3'>Roles for this project</h3>
                    <button className='edit_btn' onClick={() => { router.push(`/cd/add-project/${castingId.castingId}`) }}><MdModeEditOutline />Edit</button>
                </div>
                <div className='roles_button flex items-center flex-wrap gap-2'>
                    <div className='content_box flex flex-wrap gap-6 mt-3'>
                        <div className={activeRole === 0 ? 'talent_box select' : 'talent_box'} onClick={() => { setActiveRole(0) }}>
                            <h3>All</h3>
                        </div>
                        {data?.map((i) => {
                            if (roleData.filter((s: any) => s.role_categories[0].id === i.id).length > 0) {
                                return (
                                    <div key={i.id} className={activeRole === i.id ? 'talent_box select' : 'talent_box'} onClick={() => { setActiveRole(i.id) }}>
                                        <img src={i.cdIcon} />
                                        <h3>{i.label}</h3>
                                    </div>
                                )
                            }

                        })}
                    </div>
                </div>
                {/* .filter((s: any) =>s ) */}
                <ProfileSection>
                    {roleData?.filter((s: any) => activeRole === 0 || s.role_categories[0].id == activeRole).map((role: any, ix: number) => {
                        return (
                            <div className='profile_box' key={ix}>
                                <h1>{role?.name}<img src='/svg/cd/actors.svg' /></h1>
                                <p className='text-sm'>{role.des}</p>
                                <h2>Seeking {role.number_of_people} talent for this role</h2>
                                <div className='talent_specs'>
                                    <h2>Talent specs:</h2>
                                    <h3>Gender <span> {role.gender_female == 1 ? "Female" : role.gender_male == 1 ? 'Male' : 'Other'}</span></h3>
                                    <h3>Ethnicity <span>{role.ethnicity_african == 1 ? 'African' : role.ethnicity_african_am == 1 ? 'African am' : role.ethnicity_asian == 1 ? 'Asian' : '....'} </span></h3>
                                </div>
                                <h3>Age <span>{role.age_min} to {role.age_max}</span></h3>
                                <h3>Expired in <span>{formatDate(responseData?.sub_timestamp || 0)}</span></h3>
                                <button>Apply now</button>
                            </div>
                        )
                    })}
                </ProfileSection>
            </div>
            <div className='info_section bottom'>
                <img src='/svg/Information.svg' />
                <p>You can edit project  details anytime for the  job project listing after it&apos;s posted by going to you Dashboard</p>
            </div>
            <div className='buttons flex items-center justify-end gap-5 mt-5'>
                <button className='back flex items-center gap-2' onClick={backBtn}><HiOutlineArrowNarrowLeft /> Back</button>
                <button className='flex items-center gap-2' onClick={() => { router.push('/cd/dashboard') }}>Save for later</button>
                <button className='next flex items-center gap-2' onClick={() => { router.push('/cd/dashboard') }}>Checkout & post project <HiOutlineArrowNarrowRight /></button>
            </div>
        </ProjectSection >
    )
}
const ProjectSection = styled.section`
    max-width:1080px;
    padding:20px;
    margin:auto;
    h1{
        font-size: 32px;
    }
    .info_section{
        background:${p => p.theme.primary};
        color:${p => p.theme.pure};
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 20px;
        button{
            display: flex;
            align-items: center;
            margin-left: auto;
            gap: 5px;
            border: 1px solid ${p => p.theme.pure};
            padding: 2px 10px;
            border-radius: 4px;
            font-weight: 600;
        }
    }
    .info_section.bottom{
        background:${p => rgba(p.theme.primary, 0.1)};
        color:${p => p.theme.primary};
        border-radius: 50px;
        p{
            font-size: 16px;
            @media (max-width:450px){
                font-size: 14px;
            }
        }
        img{
            background: ${p => p.theme.primary};;
            padding: 10px;
            border-radius: 50%;
        }
    }
    h4{
        font-weight: 600;
        font-size: 14px;
        margin: 4px 0px;
    }
    h4 span {
        color: ${p => p.theme.primary};
        margin-left: 10px;
    }
    h4.pay_paid span {
        color: #149D54;
        display: flex;
        align-items: center;
        h6{
            display: flex;
            align-items: center;
            background: #149D54;
            color:${p => p.theme.pure};
            padding: 0px 6px;
            border-radius: 4px;
            margin-right: 6px;
        }
    }
    hr{
        margin:20px 0px;
        border-color: ${p => rgba(p.theme.base, 0.1)};;
    }
    .edit_btn {
        display: flex;
        align-items: center;
        background: ${p => rgba(p.theme.primary, 0.1)};
        color: ${p => p.theme.primary};
        padding: 6px 10px;
        gap: 4px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        transition:all 0.5s;
    }
    .edit_btn:hover{
        box-shadow: rgb(0 0 0 / 16%) 0px 1px 6px, rgb(0 0 0 / 23%) 0px 1px 6px;
    }
    .talent_box{
        display: flex;
        align-items: center;
        gap: 6px;
        background: #EFEFF0;
        border-radius: 50px;
        padding: 10px 20px;
        cursor: pointer;
        transition:all 0.5s;
        img {
            width: 22px;
        }
        h3{
            font-weight: 600;
        }
    }
    .talent_box:hover{
        box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 0px 6px 2px;
    }
    .talent_box.select{
        background: ${p => p.theme.primary};
        color: ${p => p.theme.pure};
    }
    /* buttons  */
    .buttons{
        button{
            background:#3C3C4399;
            border-radius: 4px;
            gap: 6px;
            color: ${p => p.theme.pure};
            padding: 10px 20px;   
            font-weight: 600;
            transition: all 0.5s;
            @media (max-width:450px){
                padding: 8px 10px;
                font-size: 14px;
            }
            svg{
                font-size: 22px;
            }
        }
        button.back {
            margin-right: auto;
            background: none;
            color: ${p => p.theme.primary};
            border: 1px solid;
        }
        button.next{
            background: ${p => p.theme.primary};
        }
        button:hover {
            box-shadow: rgb(0 0 0 / 54%) 0px 4px 13px;
        }
    }
    img.project_image {
        max-height: 350px;
        width: 100%;
        object-fit: cover;
        border-radius: 14px 14px 0px 0px;
    }
`
const ProfileSection = styled.section`
    .profile_box{
        box-shadow: 0px -3px 15px #0000001a, 0px 4px 4px #0000000d;
        border-radius: 8px;
        padding: 20px;
        background:${p => p.theme.pure};
        margin: 20px 0px;
        h1{
            font-size: 18px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            margin: 10px 0px;
            img{
                width: 26px;
            }
        }
        h2 {
            font-weight: 600;
            font-size: 16px;
            margin: 8px 0px;
        }
        .talent_specs h2 {
            font-weight: 700;
        }   
        h3 {
            font-weight: 600;
            font-size: 16px;
            span{
                color:${p => p.theme.primary};
            }
        }
        button {
            background: ${p => rgba(p.theme.primary, 0.9)};
            color: ${p => p.theme.pure};
            padding: 8px 20px;
            border-radius: 4px;
            margin-top: 12px;
        }
    }
`

const Array = [
    {
        id: 1,
        label: 'Acting',
        cdIcon: '/svg/cd/actors.svg',
        checked: false,
    },
    {
        id: 2,
        label: 'Extras',
        cdIcon: '/svg/cd/model.svg',
        checked: false,
    },
    {
        id: 3,
        label: 'Modelling',
        cdIcon: '/svg/cd/music.svg',
        checked: false,
    },
    {
        id: 4,
        label: 'Influencer',
        cdIcon: '/svg/cd/dancer.svg',
        checked: false,
    },
    {
        id: 5,
        label: 'Presenter',
        cdIcon: '/svg/cd/extras.svg',
        checked: false,
    },
    {
        id: 6,
        label: 'Musician',
        cdIcon: '/svg/cd/Influencers.svg',
        checked: false,
    },
    {
        id: 7,
        label: 'Photography',
        cdIcon: '/svg/cd/Crews.svg',
        checked: false,
    },
    {
        id: 8,
        label: 'TV & Reality',
        cdIcon: '/svg/cd/Presenters.svg',
        checked: false,
    },
    {
        id: 9,
        label: 'Dancing',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 10,
        label: 'Film & Stage Crew',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 11,
        label: 'Hair, Makeup, & Styling',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 12,
        label: 'Survival Jobs',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 13,
        label: 'Modeling',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 14,
        label: 'Performing',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 15,
        label: 'Professional',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 16,
        label: 'Support',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 17,
        label: 'Technology',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 18,
        label: 'Other',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
]
