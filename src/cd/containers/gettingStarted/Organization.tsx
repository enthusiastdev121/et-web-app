import React, { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Router from 'next/router'
import { rgba } from 'polished';
import Link from 'next/link';
import { btnBackButton, btnNextActive, btnNextDisable } from './styled';
import { type } from 'os';

type propType = {
    auth: any
}

export default function Organization({ auth }: propType) {
    const [organization, setOrganization] = useState(Data)
    const [checkOrganization, setCheckOrganization] = useState<any>([])
    const [btnDisable, setBtnDisable] = useState(true)
    const theme = useTheme()


    const Selected = (id: any) => {
        const check = organization.map((i) => {
            if (i.id === id) {
                return {
                    ...i, checked: true
                }
            } else {
                return {
                    ...i, checked: false
                }
            }
        })
        setOrganization(check)
    }


    useEffect(() => {
        const choseOrganization = organization.filter(i => i.checked);
        setCheckOrganization(choseOrganization);
    }, [organization]);


    useEffect(() => {
        if (organization.every(i => i.checked === false) === false) {
            setBtnDisable(false)
        } else {
            setBtnDisable(true)
        }
    }, [organization])




    return (
        <OrganizationSection theme={theme}>
            <h1 className='font-bold sm:text-3xl text-2xl'>What organization are you working with for this project?</h1>
            <p className='text-sm mt-5'>Select one that describes your organiztion.</p>
            <div className='organization'>
                {organization.map((i) => {
                    return (
                        <div key={i.id}
                            className={i.checked ? 'talent_box select' : 'talent_box'}
                            onClick={() => { Selected(i.id) }}>
                            <img src={i.logo} />
                            <h1 className='font-bold my-3'>{i?.name}</h1>
                        </div>
                    )
                })}
            </div>
            <div className='buttons flex items-center justify-between mt-5'>
                <Link href={'/cd/getting-started?keyword=project'}><a>
                    <button className={`${btnBackButton}`}  ><HiOutlineArrowNarrowLeft />Back</button>
                </a></Link>
                <Link href={'/cd/getting-started?keyword=info'}><a>
                    <button onClick={() => { auth(checkOrganization) }} className={btnDisable ? `${btnNextDisable}` : `${btnNextActive}`} disabled={btnDisable}>Next <HiOutlineArrowNarrowRight /></button>
                </a></Link>
            </div>
        </OrganizationSection>

    )
}
const OrganizationSection = styled.section`
    max-width:800px;
    margin:auto;
    padding:20px;
    margin-top: 40px;
    
    .organization {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;     
        gap: 20px;
        margin-top: 20px;
        @media (max-width:768px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .talent_box{
        text-align: center;
        border: 1px solid #a1a1aa6b;
        border-radius: 8px;
        padding: 24px;
        cursor: pointer;
        box-shadow: 0px 0px 15px rgb(9 42 81 / 0%), 0px 2px 12px 4px rgb(9 42 81 / 0%);
        transition: all 0.5s;
        :hover{
            box-shadow: rgb(0 0 0 / 24%) 0px 0px 8px;
        }
        img{
            margin:auto;
        }
        .talent_box img {
            margin: auto;
        }
    }
    .talent_box.select {
        background:  ${p => rgba(p.theme.primary, 0.1)};
        box-shadow: 0px 0px 15px rgba(9, 42, 81, 0.05), 0px 2px 12px 4px rgba(9, 42, 81, 0.15);
        border: 1px solid  ${p => p.theme.primary};
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
const Data = [
    {
        id: 1,
        name: 'Company',
        logo: '/svg/cd/Company.svg',
        checked: false,
    },
    {
        id: 2,
        name: 'Production Company',
        logo: '/svg/cd/Production Company.svg',
        checked: false,
    },
    {
        id: 3,
        name: 'Agency',
        logo: '/svg/cd/Agency.svg',
        checked: false,
    },
    {
        id: 4,
        name: 'Studio/Network',
        logo: '/svg/cd/StudioNetwork.svg',
        checked: false,
    },
    {
        id: 5,
        name: 'Casting Office',
        logo: '/svg/cd/Casting Office.svg',
        checked: false,
    },
    {
        id: 6,
        name: 'Theater',
        logo: '/svg/cd/Theater.svg',
        checked: false,
    },
    {
        id: 7,
        name: 'School',
        logo: '/svg/cd/School.svg',
        checked: false,
    },
    {
        id: 8,
        name: 'Personal',
        logo: '/svg/cd/Personal.svg',
        checked: false,
    },
    {
        id: 9,
        name: 'Others',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
]