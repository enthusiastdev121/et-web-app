import ModalAnimated, { ModalPaper } from 'components/ModalAnimated'
import React, { useEffect, useState } from 'react'
import { AiOutlineCheck, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { FcOk } from 'react-icons/fc'
import { GiUsaFlag } from 'react-icons/gi'
import { MdEdit } from 'react-icons/md'
import styled from 'styled-components'
import { MdLoop } from 'react-icons/md';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';
import { GoCheck } from 'react-icons/go';
import Router from 'next/router'
import Link from 'next/link'
import { updateMyDetailApi } from 'network/apis/cd/profile'
import { useProfileStore } from 'context/ProfileStore'
import { useAuth } from 'context/AuthContext'
import { Refresh } from 'iconsax-react'
import lookup from 'country-code-lookup'
import { stringify } from 'querystring'




export default function Review(allData: any) {



    const { token, user, userType }: any = useAuth();

    // const [checkData, setCheckData] = useState(allData)
    // console.log(checkData, 'JKLFKNER');


    const submitCheck = () => {
        // const obj = allData.allData.project.filter((i:any) => i.checked === true).map((i2:any) => ({...i2, sub: i2.sub.filter((k:any) => k.checked ===true)}))
        // console.log("OBJECT", obj)
        console.log(allData, "allData++++++")
    }


    // const {  cdProfile } = useProfileStore()
    const organizationData = allData.allData.organization.map((i: any) => (i?.name))
    console.log("organizationData", organizationData.toString())

    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(Array)

    const preBtn = () => {
        Router.push('/cd/getting-started?keyword=info');
    }
    const nextBtn = () => {
        // Router.push('');
        setOpen(true)
    }

    const onSubmit = async (refresh: boolean = false) => {
        try {
            setOpen(true)
            if (!token && userType! == 'info') {
                return;
            }
            if (refresh) {
                setRefreshing(true);
            } else {
                setLoading(true)
            }
            const responce = await updateMyDetailApi({
                role: allData.allData.info.role,
                country: allData.allData.info.country,
                company: allData.allData.info.companyName,
                website: allData.allData.info.companyWebsite,
                organisation: organizationData.toString(),
                // userId:  cdProfile.id,
                token,
            });
            console.log(responce, "responce+++");
        }
        catch (err) {
            console.log("Errr....", err)
            console.log('token :=>', token)
        }
    }
    [token]




    const countryName = allData.allData?.info?.country ? lookup.byInternet(allData.allData?.info?.country)?.country : ''

    return (
        <>
            <MainContainer className='' >
                <div className='containers'>
                    <h2>Review and finalize your information.</h2>
                    <p className='mb-6'>Please review your details, finalize it before finalizing, but you can change this on settings anytime.</p>
                    <div className='white_container'>
                        <div className='flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <div className='text-2xl'><FcOk /></div>
                                <div>What talents are you looking for?</div>
                            </div>

                            <Link href={'/cd/getting-started?keyword=talents'}>
                                <a>
                                    <button className='edit_button'>
                                        <div><MdEdit /></div>
                                        <div>Edit</div>
                                    </button>
                                </a>
                            </Link>

                        </div>

                        <div className=' mt-6 talent_looking  '>
                            <div className='flex gap-5 flex-wrap'>
                                {allData?.allData?.talent?.map((i: any) => {
                                    return (
                                        <div key={i.id} className='button-color '>
                                            <div className='flex gap-3'>
                                                <span><img className="image_icon" src={i.cdIcon} alt='loding.. icon' /></span>
                                                <span>{i.label}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>

                    <div className='white_container my-4'>
                        <div className='flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <div className='text-2xl'><FcOk /></div>
                                <div>What type of project do you need those talents?</div>
                            </div>

                            <Link href={'/cd/getting-started?keyword=project'}>
                                <a>
                                    <button className='edit_button'>
                                        <div><MdEdit /></div>
                                        <div>Edit</div>
                                    </button>
                                </a>
                            </Link>

                        </div>


                        <div className='casting_type flex items-end mt-3'>
                            <div className='flex  gap-5 flex-wrap'>
                                {allData?.allData?.project?.map((i: any) => {
                                    // console.log(subProjectData,'mnmnnn');

                                    return (
                                        <div key={i.id} className=''>
                                            <div className='casting_box'>
                                                <span><img className="" src={i.cdImg} alt='loding.. icon' /></span>
                                                <h3>{i.label}</h3>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>


                        </div>
                        <div className='content_box flex flex-wrap gap-6 mt-3'>
                            {allData?.allData?.project?.map((i: any) => {
                                return (
                                    (i.sub.map((itm: any) => {
                                        console.log(itm.label, 'bbbb')
                                        if (itm.selected === true) {
                                            return (
                                                <div key={itm.id} className={i.selected ? 'section_box select' : ''} >
                                                    <div className='flex gap-2'>
                                                        <span className='mt-1'><GoCheck /></span>
                                                        <h3>{itm.label}</h3>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return null
                                        }

                                    }))
                                )

                            })}
                        </div>
                    </div>

                    <div className='white_container my-4'>
                        <div className='flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <div className='text-2xl'><FcOk /></div>
                                <div>What organization are you working with for this project?</div>
                            </div>
                            <Link href={'/cd/getting-started?keyword=organization'}>
                                <a>
                                    <button className='edit_button'>
                                        <div><MdEdit /></div>
                                        <div>Edit</div>
                                    </button>
                                </a>
                            </Link>
                        </div>

                        <div className='flex gap-4 mt-6 talent_looking'>
                            <div className=''>
                                {allData?.allData?.organization?.map((i: any) => {
                                    return (
                                        <div key={i.id} className='button-color '>
                                            <div className='flex gap-3'>
                                                <span><img className="image_icon" src={i.logo} alt='loding.. icon' /></span>
                                                <span>{i?.name}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='white_container my-4'>
                        <div className='flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <div className='text-2xl'><FcOk /></div>
                                <div>Your information</div>
                            </div>
                            <Link href={'/cd/getting-started?keyword=info'}>
                                <a>
                                    <button className='edit_button'>
                                        <div><MdEdit /></div>
                                        <div>Edit</div>
                                    </button>
                                </a>
                            </Link>
                        </div>
                        <div className='my-6'>
                            <div className='font-bold'>Company name</div>
                            {allData?.allData?.info?.companyName}


                        </div>
                        <div className='my-6'>
                            <div className='font-bold'>Company website</div>
                            {allData?.allData?.info?.companyWebsite}
                        </div>
                        <div className='my-6'>
                            <div className='font-bold'>Your job Role in the company</div>

                            {allData?.allData?.info?.role}
                        </div>
                        <div className='my-6'>
                            <div className='font-bold'>Country</div>
                            {/* <p className='flex gap-1 text-sm'><span className='text-2xl'><GiUsaFlag /></span><span>United States of America</span></p> */}
                            {countryName}
                        </div>
                        <div className='my-6'>
                            <div className='font-bold'>Postal Code</div>
                            {allData?.allData?.info?.postelCode}
                        </div>

                    </div>

                    <div className='buttons flex items-center justify-between mt-5'>
                        <button className='back flex items-center gap-2' onClick={preBtn}><HiOutlineArrowNarrowLeft />Back</button>
                        <button className='next flex items-center gap-2' onClick={() => { onSubmit() }}>Confirm <HiOutlineArrowNarrowRight /></button>
                    </div>

                    {open ? <>

                        <ModalAnimated open={open}>
                            <div className='bg-[#F8F9FB] w-screen h-screen flex justify-center items-center main-PopUp '>
                                <Paper>
                                    <div className='text-3xl text-gray-500 absolute top-2 right-2 px-5 py-2 ' onClick={() => setOpen(false)}><AiOutlineClose /></div >
                                    <div className='flex justify-around'>
                                        <div className='mt-10'><img src='/cdimages/congra1.png' alt='error' /></div>
                                        <div>
                                            <div className='flex justify-center'>
                                                <img src='/cdimages/congra2.png' alt='error' />
                                            </div>
                                            <div className='text-center mt-3 text-4xl font-bold'>Congratulations,  Adam</div>
                                        </div>
                                        <div className='mt-10'><img src='/cdimages/congra3.png' alt='error' /></div>
                                    </div>

                                    <p className='text-center text-xl my-10 text-[#191919]'>Great! Next steps are going to provide some more in-depth details about your project. You won&apos;t have to go through the Get Started steps the next time you post a job.</p>
                                    <button className='flex justify-center add_project' onClick={() => { Router.push('/cd/add-project') }}>Add project details <AiOutlinePlus /></button>
                                </Paper>
                            </div>
                        </ModalAnimated>

                    </> : null}

                </div>
            </MainContainer>
        </>
    )
}

const MainContainer = styled.section`
        max-width:800px;
        margin:auto;
        padding:20px;
        margin-top: 40px;
        .containers{
        h2{
          font-size: 32px;
          font-weight:bold;
         }
         .white_container{
            padding: 20px;
            background: ${(p) => p.theme.pure};
            box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
         }
         .talent_looking{
            color:${(p) => p.theme.primary};
         }
        
         .edit_button{ 
            max-height: 40px;
            display: flex;
            gap: 4px;
            align-items: center;
            background-color: ${(p) => p.theme.paper};;
            padding: 3px 10px;
           border-radius: 5px;
           color:${(p) => p.theme.primary};
           transition:all 0.4s;
         }
         .edit_button:hover{
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px;
         }
        .button-color{
            background-color:  #EFEFF0;
            display: flex;
            gap: 3px;
            border-radius: 20px;
            padding: 10px;
            align-items: center;
            cursor: pointer;
        }
        img.image_icon{
            width: 20px;
        }
      
    }
    & div#bg{
        background: #ffffff;
    }
    .casting_type button {
        background: #D9D9D9;
        padding: 5px 12px;
        border-radius: 50px;
        font-weight: 500;
        font-size: 12px;
        gap: 4px;
        margin-left: -16px;
        z-index: 1;
        margin-bottom: 2px;
    }
    .casting_box {
        position: relative;
        width: 200px;
        height: 60px;
        border-radius: 10px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        h3{
            position: absolute;
            top: 50%;
            color: #fff;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: 600;
            width: 100%;
            height: 100%;
            margin: 0px;
            background: linear-gradient(180deg, rgba(46, 46, 54, 0) 0%, #2E2E36 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-direction: column;
        }
    }
/* buttons back and confirm  */
.buttons{
        button{
            background:#3C3C4399;
            border-radius: 4px;
            gap: 6px;
            color: ${p => p.theme.pure};
            padding: 10px 20px; 
            transition :all 0.5s;
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
    .section_box{
        display: flex;
        align-items: center;
        gap: 6px;
        background: #EFEFF0;
        border-radius: 50px;
        padding: 6px 12px;
        cursor: pointer;
        background: ${p => p.theme.primary};
        color: ${p => p.theme.pure};
        h3{
            font-weight: 600;
        }
    }

.main-PopUp{
    animation-duration: 1s;
    animation-name: fadeAndScale;
    animation-timing-function: cubic-bezier(.71,.55,.62,1.57);
}
@keyframes fadeAndScale{
    from {
        opacity: 0;
        transform: scale(.9, .9);
    }
    to {
        opacity: 1;
        transform: scale(1, 1);
    }
}



`
const Paper = styled(ModalPaper)`
    max-width: 800px;
    width: 95%;
    margin: auto;
    border-radius: 12px;
    background: ${(p) => p.theme.paper};
    padding: 3rem;
    box-shadow: 0px 0px 15px rgba(9, 42, 81, 0.05), 0px 2px 12px 4px rgba(9, 42, 81, 0.15);
    .add_project{
        background: ${(p) => p.theme.primary};
        color: ${(p) => p.theme.pure};
        border-radius: 5px;
        padding: 8px 25px;
        display: flex;
        align-items: center; 
        gap: 5px;
        margin: auto;
        transition: all 0.5s;
    }
    .add_project:hover{
        box-shadow: rgb(0 0 0 / 25%) 0px 10px 28px, rgb(0 0 0 / 22%) 0px 4px 10px;
    }
    
`;

const Array = [
    {
        id: 1,
        title: 'Theatre & Musicians',
        checked: true,
    },

]

