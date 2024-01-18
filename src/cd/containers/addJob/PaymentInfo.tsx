import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { GoCheck } from 'react-icons/go';
import RangeSlider from 'components/RangeSlider';
import { currencyCode } from '@/utils/constants';
export default function PaymentInfo({ getData, onChange }: propType) {
    const [expectTime, setExpectTime] = useState(Data);
    const [timeRange, setTimeRange] = useState([2, 8]);
    const theme = useTheme()
    const checked = (id: any) => {
        const edit = expectTime.map((i) => {
            if (i.id === id) {
                return {
                    ...i, check: true
                }
            } else {
                return {
                    ...i, check: false
                }
            }
        })
        setExpectTime(edit)
    }
    const AGE_MARKS = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
    };
    useEffect(() => {
        if (getData?.expectTime) {
            const edit = expectTime.map((i, ix) => {
                if (ix === getData.expectTime) {
                    return {
                        ...i, check: true
                    }
                } else {
                    return {
                        ...i, check: false
                    }
                }
            })
            setExpectTime(edit)
        } if (getData?.time) {
            setTimeRange(getData.time)
        }
    }, [getData])

    return (
        <ParentSection theme={theme}>
            <h2>Payment information</h2>
            <label>How much will you pay?</label>
            <div className='pay_box'>
                <div>
                    <label>Rate type</label>
                    <select onChange={(e) => onChange({ rateType: e.target.value })} value={getData?.rateType}>
                        <option value="rate">Flat rate</option>
                        <option value="rate1">Flat rate 1</option>
                        <option value="rate2">Flat rate 2</option>
                    </select>
                </div>
                <div>
                    <label>Currency</label>
                    <select onChange={(e) => onChange({ currency: e.target.value })} value={getData?.currency}>
                        {currencyCode.map((i, ix) => {
                            return (
                                <option value={i.symbol} key={ix}> {i?.name} ( {i.symbol})</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input type='number' placeholder='0.00' onChange={(e) => onChange({ amount: e.target.value })} value={getData?.amount} />
                </div>
            </div>
            <hr />
            <label>How long do you expect this work for the talent to complete?</label>
            <div className='flex flex-wrap gap-4 my-6'>
                {expectTime.map((i, ix) => {
                    return (
                        <div className={i.check ? 'check_box select' : ' check_box'} key={i.id} onClick={() => { checked(i.id); onChange({ expectTime: ix }) }}>
                            <h3>{i?.name}</h3>
                            <span>{i.check ? <GoCheck /> : null}</span>
                        </div>
                    )
                })}
            </div>
            <hr />
            <label>Expected hours to work per day <span>{timeRange.length === 0 ? 'Not yet set' : `${timeRange[0]} to ${timeRange[1]} hours`} </span></label>
            <div className='hour_slider'>
                <RangeSlider
                    range
                    min={1}
                    max={12}
                    defaultValue={[5, 10]}
                    value={timeRange}
                    label=" "
                    onChange={(e: any) => {
                        console.log('eeeee', e)
                        setTimeRange(e)
                        onChange({ time: e })
                    }}
                    marks={AGE_MARKS} />
            </div>
            <hr />
            <label>Are there a additional compensation or bonus?</label>
            <textarea placeholder='Provide description allowance E.G. “provides $100 meal and travel allowance”' onChange={(e) => onChange({ description: e.target.value })} value={getData?.description} />

        </ParentSection>
    )
}
type propType = {
    getData: any,
    onChange: any,
}
const ParentSection = styled.section`
    .check_box{
        display: flex;
        align-items: center;
        gap: 6px;
        background: #EFEFF0;
        border-radius: 50px;
        padding: 8px 10px;
        cursor: pointer;
        transition: all 0.5s;
        h3{
            font-weight: 500;
            font-size: 14px;
        }
    }
    .check_box:hover{
        box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 0px 6px 2px;
    }
    .check_box.select{
        background: ${p => p.theme.primary};
        color: ${p => p.theme.pure};
    }
    .pay_box {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        @media (max-width: 630px) {
            flex-direction: column;
        }
        select{
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-right: 24px;
        }
    }
    .pay_box > div{
        flex: 1;
    }
    /*  */
    hr {
        margin: 30px 0px;
    }
    label{
        font-weight: 700;
        font-size: 14px;
        display:block;
        margin: 10px 0px;
        span{
            font-weight:600;
            color:${p => p.theme.primary};
        }
    }
    input ,textarea , select{
        width: 100%;
        border: 1px solid #A1A1AA;
        padding: 8px;
        border-radius: 4px;
    }
    textarea{
        height:120px;
    }
    .hour_slider {
        max-width: 600px;
    }
    .hour_slider .flex.justify-between.items-center.text-sm.text-gray-500 {
        display: none;
    }
`
const Data = [
    {
        id: 1,
        name: 'Less than a day',
        check: true,
    },
    {
        id: 2,
        name: 'Less than a week',
        check: false,
    },
    {
        id: 3,
        name: 'Less than a month',
        check: false,
    },
    {
        id: 4,
        name: 'More than a month',
        check: false,
    },
]