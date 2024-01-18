import React, { useState, useEffect } from 'react';
import styled, { useTheme } from "styled-components"
import { HiPlus } from 'react-icons/hi';
import { GoCheck } from 'react-icons/go';
import { interestArray } from '@/utils/constants/profile';
type propsType = {
    getData: any,
    onChange: any
}
export default function TalentsLooking({ getData, onChange }: propsType) {
    const [data, setData] = useState<any>(interestArray)
    const theme = useTheme()
    const isCheck = (id: number) => {
        const check = data.map((i: any) => {
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
        setData(check)
        const change = check.filter((check: any) => check.checked === true).map((i: any) => {
            return {
                category_id: `${i.id}`,
                subcategory_id: [0, 0]
            }
        })
        onChange(change)
    }
    useEffect(() => {
        const newAry = data.map((i: any) => {
            if (getData?.filter((i2: any) => i2.id === i.id).length > 0) {
                return { ...i, checked: true }
            } else {
                return i
            }
        })
        setData(newAry)
    }, [getData])
    return (
        <MainSection theme={theme}>
            <h2>What talents are you looking for?</h2>
            <div className='content_box flex flex-wrap gap-6 mt-3'>
                {data?.map((i: any) => {
                    return (
                        <div key={i.id} className={i.checked ? 'talent_box select' : 'talent_box'} onClick={() => { isCheck(i.id) }}>
                            <img src={i.cdIcon} />
                            <h3>{i.label}</h3>
                            <span>{i.checked ? <GoCheck /> : <HiPlus />} </span>
                        </div>
                    )
                })}
            </div>
        </MainSection>
    )
}
const MainSection = styled.section`
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
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
    .content_box {
       @media (max-width:450px){
        gap: 10px;
        .talent_box {
            padding: 8px 16px;
        }
       }
    }
`
const Array = [
    {
        id: 1,
        title: 'Acting',
        logo: '/svg/cd/actors.svg',
        checked: false,
    },
    {
        id: 2,
        title: 'Extras',
        logo: '/svg/cd/model.svg',
        checked: false,
    },
    {
        id: 3,
        title: 'Modelling',
        logo: '/svg/cd/music.svg',
        checked: false,
    },
    {
        id: 4,
        title: 'Influencers',
        logo: '/svg/cd/dancer.svg',
        checked: false,
    },
    {
        id: 5,
        title: 'Presenter',
        logo: '/svg/cd/extras.svg',
        checked: false,
    },
    {
        id: 6,
        title: 'Musician',
        logo: '/svg/cd/Influencers.svg',
        checked: false,
    },
    {
        id: 7,
        title: 'PhoroGraphy',
        logo: '/svg/cd/Crews.svg',
        checked: false,
    },
    {
        id: 8,
        title: 'TV & Reality',
        logo: '/svg/cd/Presenters.svg',
        checked: false,
    },
    {
        id: 9,
        title: 'Dancing',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 10,
        title: 'Film & Stage Crew',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 11,
        title: 'Hair, Makeup',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 12,
        title: 'Survival Jobs',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 13,
        title: 'Modeling',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 14,
        title: 'Performing',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 15,
        title: 'Professional',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 16,
        title: 'Support',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 17,
        title: 'Technology',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 18,
        title: 'Other',
        logo: '/svg/cd/Others.svg',
        checked: false,
    },
]
