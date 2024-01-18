import React, { useState, useEffect } from 'react';
import styled, { useTheme } from "styled-components"
import { HiPlus } from 'react-icons/hi';
import { GoCheck } from 'react-icons/go';
import { MdLoop } from 'react-icons/md';

export default function CastingType({ getData }: propType) {
    const [data, setData] = useState(Array)
    const theme = useTheme()
    const isCheck = (id: number) => {
        const check = data.map((i) => {
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
        // getData(check.filter(check => check.checked === true))
        getData(check)
    }
    useEffect(() => {
        const items = localStorage.getItem('finalData');
        if (items) {
            const data = JSON.parse(items).castingType
            if (data) {
                // console.log('====== castingType data =========')
                setData(data)
            }
        }
    }, [])
    return (
        <MainSection theme={theme}>
            <h2>Project Casting Type</h2>
            <div className='casting_type flex items-end mt-3'>
                <div className='casting_box'>
                    <img src='/images/classes/all-class-1.png' />
                    <h3>Acting</h3>
                </div>
                <button className='flex items-center'><MdLoop />change</button>
            </div>
            <div className='content_box flex flex-wrap gap-6 mt-3'>
                {data?.map((i) => {
                    return (
                        <div key={i.id} className={i.checked ? 'section_box select' : 'section_box'} onClick={() => { isCheck(i.id) }}>
                            <span>{i.checked ? <GoCheck /> : <HiPlus />} </span>
                            <h3>{i.title}</h3>
                        </div>
                    )
                })}
            </div>
        </MainSection>
    )
}
type propType = {
    getData: any,
}
const MainSection = styled.section`
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
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
    .section_box{
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
    .section_box:hover{
        box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 0px 6px 2px;
    }
    .section_box.select{
        background: ${p => p.theme.primary};
        color: ${p => p.theme.pure};
    }
    .content_box {
       @media (max-width:450px){
        gap: 10px;
        .section_box {
            padding: 8px 16px;
        }
       }
    }
`
const Array = [
    {
        id: 1,
        title: 'Actors & performers',
        checked: false,
    },
    {
        id: 2,
        title: 'Model',
        checked: false,
    },
    {
        id: 3,
        title: 'Musician',
        checked: false,
    },
    {
        id: 4,
        title: 'Dancer',
        checked: false,
    },
    {
        id: 5,
        title: 'Extras',
        checked: false,
    },
    {
        id: 6,
        title: 'Influencers',
        checked: false,
    },
    {
        id: 7,
        title: 'Crews',
        checked: false,
    },
    {
        id: 8,
        title: 'Presenters',
        checked: false,
    },
    {
        id: 9,
        title: 'Others',
        checked: false,
    },
]