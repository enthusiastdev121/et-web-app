import { rgba } from 'polished'
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { MdLoop } from 'react-icons/md';
import ModalAnimated from 'components/ModalAnimated';
import { HiCheckCircle } from 'react-icons/hi';
import { BiChevronDown } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { PrimaryBtn } from "@/styles/Btn.styled";
export default function PostProject() {
    const [showProject, setShowProject] = useState(false)
    const [showCategory, setShowCategory] = useState(false)
    const [open, setOpen] = useState(false)
    const [showMore, setShowMore] = useState(true)
    const [project, setProject] = useState(Data)
    const [packageSelect, setPackageSelect] = useState('')
    const theme = useTheme()
    const Selected = (id: any) => {
        const check = project.map((i) => {
            if (i.id === id) {
                return {
                    ...i, checked: !i.checked
                }
            } else {
                return {
                    ...i
                }
            }
        })
        setProject(check)
    }
    return (
        <ContentSection theme={theme}>
            <div className={packageSelect === 'basic' ? 'post_section active' : 'post_section'}>
                <div>
                    <h2>Basic</h2>
                    <p><span><RiCheckboxCircleFill /></span>List a project in auditions & jobs</p>
                    <p><span><RiCheckboxCircleFill /></span>Receive applicants : maximum of first 4 only</p>
                </div>
                <div className='text-center'>
                    <h1>FREE</h1>
                    <h3><sup><del>$</del></sup><del>20.00</del></h3>
                    <PrimaryBtn className="btn" onClick={() => { setPackageSelect('basic') }}> Select package </PrimaryBtn>
                </div>
            </div>
            <div className={packageSelect === 'pro' ? 'post_section pro active' : 'post_section pro'}>
                <div className={showMore ? 'pro_section' : 'pro_section active'}>
                    <h2>Pro <span>50% OFF</span></h2>
                    <p><span><RiCheckboxCircleFill /></span>List a project in auditions & jobs.</p>
                    <p><span><RiCheckboxCircleFill /></span>Receive applicants : unlimited</p>
                    <p><span><RiCheckboxCircleFill /></span>Priority Job listing</p>
                    <p><span><RiCheckboxCircleFill /></span>Invite collaborators : unlimited</p>
                    <p><span><RiCheckboxCircleFill /></span>Can request asset order job to talent</p>
                    <p><span><RiCheckboxCircleFill /></span>Access to Application manager Pro function tool</p>
                    <ul>
                        <li>Add notes</li>
                        <li>Like/Dislike talent</li>
                        <li>Can create schedule</li>
                        <li>Different view types: Grid/List/Video/Audio/Scheduled</li>
                        <li>Sort applicants</li>
                        <li>Search applicants</li>
                    </ul>
                    <button className='show_btn' onClick={() => { setShowMore(s => !s) }}> <BiChevronDown /> {showMore ? 'Show details' : 'Show less'}</button>
                </div>
                <div className='text-center'>
                    <h1><sup>$</sup>24.95</h1>
                    <h3><sup><del>$</del></sup><del>50.00</del></h3>
                    <PrimaryBtn className="btn" onClick={() => { setPackageSelect('pro') }}> Select package </PrimaryBtn>
                </div>
            </div>
            <hr />
            <h1>Add-ons</h1>
            <div className='check_box'>
                <div className='box_child'>
                    <input type="checkbox" id="featuredProject" />
                    <label htmlFor="featuredProject"> Featured project <span>$99.0</span></label>
                    <button onClick={() => { setShowProject(s => !s) }}>{showProject ? <>Show less</> : <>Show more details</>}</button>
                </div>
                {showProject ?
                    <div>
                        <p>Your notice will appear as an exclusive Featured item in online search results and receive extra promotion on other areas of ExploreTalent – all ensuring you get extra clicks! </p>
                    </div>
                    : null}
            </div>
            <div className='check_box'>
                <div className='box_child'>
                    <input type="checkbox" id="category" />
                    <label htmlFor="category">Add extra category</label>
                    <button onClick={() => { setShowCategory(s => !s) }}>{showCategory ? <>Show less</> : <>Show more details</>}</button>
                </div>
                {showCategory ?
                    <div>
                        <p>Boost the popularity of your job posting by including your post in additional categories.</p>
                        <div className='category'>
                            <input type="radio" id="category1" name="category" />
                            <label htmlFor="category1">Extra 1 category<span>$99.0</span></label>
                        </div>
                        <div className='category'>
                            <input type="radio" id="category2" name="category" />
                            <label htmlFor="category2">Extra 2 category<span>$99.0</span></label>
                        </div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='casting_type'>
                                <div className='casting_box'>
                                    <img src='/images/classes/all-class-1.png' />
                                    <h3>Acting</h3>
                                </div>
                                <button className='flex items-center'><MdLoop />Select</button>
                            </div>
                            <div className='casting_type'>
                                <div className='casting_box'>
                                    <img src='/images/classes/all-class-1.png' />
                                    <h3>Select extra<br />
                                        category</h3>
                                </div>
                                <button className='flex items-center' onClick={() => setOpen(s => !s)}><MdLoop />Select</button>
                            </div>
                        </div>
                    </div>
                    : null}
            </div>
            {/* Extra category selection popup Component */}
            <CategorySection>
                <ModalAnimated open={open}>
                    <div className='section_box'>
                        <button className='close' onClick={() => setOpen(s => !s)}><MdClose /></button>
                        <h1>Select casting category type</h1>

                        <div className='project'>
                            {project.map((i) => {
                                return (
                                    <div key={i.id}
                                        className={i.checked ? 'content_box select' : 'content_box'}
                                        onClick={() => { Selected(i.id) }}>
                                        <img src={i.img} />
                                        <h1 className='title'>
                                            {i.checked ? <HiCheckCircle /> : null}
                                            {i?.name}
                                        </h1>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </ModalAnimated>
            </CategorySection>



        </ContentSection >
    )
}
const ContentSection = styled.section`
    h1{
        font-weight: 700;
        font-size: 18px;
    }
    .post_section{
        position:relative;
        border: 1px solid #D2D2D2;
        border-radius: 8px;
        padding: 20px;
        display: flex;
        gap: 20px;
        margin: 10px 0px 30px 0px;
        transition: all 0.5s;
        @media (max-width:500px){
            flex-direction: column-reverse;
        }
        h2{
            font-weight: 700;
            font-size: 24px;
            span{
                background: linear-gradient(94.09deg, #E95C5C 0%, #D52952 100%);
                border-radius: 4px;
                font-weight: 600;
                font-size: 12px;
                padding: 8px;
                color:${p => p.theme.pure};
                vertical-align: middle;
            }
        }

        h1{
            font-weight: 800;
            color : ${p => rgba(p.theme.base, 0.9)};
            font-size: 32px;
        }
        &.active h1{
            color:${p => p.theme.primary};
        }
        h3{
            color : ${p => rgba(p.theme.base, 0.6)};
            font-weight: 700;
            font-size: 24px;
        }
        p{
            font-size: 14px;
            display: flex;
            gap: 8px;
            margin: 6px 0px;
            svg{
                font-size:20px;
                color:#37C96A;
            }
        }
        > div > button.btn{
            padding: 0.5em 1.1em;
            font-size: 14px;
        }
        > div:nth-child(1) {
            flex: 2;
        }
        > div:nth-child(2) {
            flex: 1;
        }
        li{
            list-style:disc;
            font-size:13px;
            margin-left: 40px;
        }
    }
    .post_section.active{
        box-shadow: 0px 1px 8px 4px rgba(0, 0, 0, 0.1), inset 0px -3px 0px #0070F4;
    }

    .btn:hover{
        box-shadow: rgb(0 0 0 /54%) 0px 4px 13px;
    }
  
    .post_section.pro{
        .pro_section{
            height: 145px;
            overflow: hidden;
            position: relative;
            padding-bottom: 20px;
            /* transition: all 1s; */
            &::after{
                content: '';
                position: absolute;
                bottom: 0px;
                width: 100%;
                height: 100%;
                background: linear-gradient(0deg, white, transparent);
                z-index: 1;
                @media (max-width:500px){
                    display:none;
                }
            }
            &.active::after{
                background: linear-gradient(0deg, transparent, transparent);
            }
            button.show_btn {
                position: absolute;
                bottom: -6px;
                z-index: 2;
                color:${p => p.theme.primary};
                font-weight:600;
                display: flex;
                align-items: center;
                @media (max-width:500px){
                    display:none;
                }
                svg{
                    font-size:28px;
                    /* transition: all 1s; */
                }
            }
        }
        .pro_section.active{
            height: 100%;
            .show_btn {
                svg {
                    transform: rotate(180deg);
                }   
            }
        }
    }
    hr{
        margin: 40px 0px;
    }
    .check_box {
        background:${p => rgba(p.theme.base, 0.1)};
        padding: 14px;
        border-radius: 8px;
        margin: 16px 0px;
        font-weight: 600;
        .box_child{
            display: flex;
            gap: 8px;
            align-items: center; 
        }
        p {
            font-weight: 400;
            font-size: 14px;
            margin-top: 10px;
        }
        span {
            border: 1px solid ${p => rgba(p.theme.base, 0.6)};
            border-radius: 50px;
            padding: 5px 10px;
        }
        .category {
            display: flex;
            gap: 6px;
            align-items: center;
            margin: 10px 0px;
            span{
                padding: 2px 6px;
                margin-left: 10px;
                background: ${p => p.theme.pure};
            }
            label {
                font-weight: 600;
                font-size: 14px;
            }
        }
    }
    .check_box button {
        margin-left: auto;
        color:${p => p.theme.primary};
        font-weight: 600;
        flex: 1;
        text-align: right;
    }
    .casting_type{
        position: relative;
        .casting_box {
            position: relative;
            width: 100%;
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
                z-index:1;
            }
        }
        button {
            background: ${p => p.theme.paper};
            color:${p => p.theme.base};
            padding: 0px 20px;
            border-radius: 50px;
            font-weight: 500;
            font-size: 14px;
            gap: 4px;
            z-index: 1;
            position: absolute;
            bottom: -6px;
            right: -12px;
        }
    }
/* Checkbox size */
input#featuredProject, input#category {
    width: 16px;
    height: 16px;
}
  
`
const CategorySection = styled.section`
    div#bg{
        background: ${p => rgba(p.theme.base, 0.4)};
    }
    .section_box{
        background: ${p => p.theme.pure};
        z-index: 1;
        box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        padding: 20px;
        box-sizing: border-box;
        max-width: 800px;
        position: relative;
        width: 96%;
    }
    .project {
        display: grid;
        grid-template-columns:repeat(4, 1fr);     
        gap: 12px;
        margin-top: 40px;
        /* @media (max-width:768px) {
            grid-template-columns: 1fr 1fr;
        } */
        @media (max-width:450px) {
            grid-template-columns:1fr 1fr 1fr;
        }
        .content_box{
            border-radius: 8px;
            cursor: pointer;
            overflow: hidden;
            position: relative;
            transition: all 0.5s;
            :hover{
                box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
            }
            .title{
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
                svg{
                    font-size: 24px;
                }
            }
            img{
                width: 100%;
            }
            
        }
        .content_box.select {
            .title{
                background: ${p => rgba(p.theme.primary, 0.5)};
            }
        }
    }
    .close {
        position: absolute;
        right: 14px;
        top: 12px;
        svg {
            font-size: 24px;
        }
    }
    
`
const Data = [
    {
        id: 1,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 2,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 3,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 4,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 5,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 6,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 7,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 8,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 9,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 10,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 11,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
    {
        id: 12,
        name: 'Acting',
        img: '/images/classes/all-class-1.png',
        checked: false,
    },
]