import React, { useEffect, useState } from 'react'
import styled, { useTheme } from "styled-components"
import { HiLocationMarker } from 'react-icons/hi'
import { GoCheck } from 'react-icons/go';
import { BiWorld } from 'react-icons/bi';
import { ToogleContainer } from '@/styles/Btn.styled';
import ReactFlagsSelect from 'react-flags-select'
import { fetchZipApi } from 'network/apis/auth';
export default function Details({ getData, onChange, }: propTypes) {
    const [countryCode, setCountryCode] = useState("");
    const [market, setMarket] = useState(Data);
    const [union, setUnion] = useState<any>(Data2);
    const theme = useTheme()
    const [zipError, setZipError] = useState('')
    const [zipLocation, setZipLocation] = useState<any>([])
    const [dataa, setDataa] = useState(
        {
            title: '',
            description: '',
            projectLocation: '',
            pinCode: Number,
            applicationFrom: {},
            union: {},
            associatedWebsite: '',
            provideNumber: Boolean,
            providePhoto: Boolean,
        }
    )
    const isCheck = (id: any) => {
        const edit = market.map((i) => {
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
        setMarket(edit);
        onChange({ applicationFrom: edit.filter((s: any) => s.check === true)[0]?.name })
    }
    const isUnioncheck = (id: any) => {
        const edit = union.map((i: any) => {
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
        setUnion(edit)
    }
    useEffect(() => {
        if (getData.applicationFrom.length > 0) {
            const itm = market.map((i) => {
                if (i?.name === getData.applicationFrom) {
                    return {
                        ...i, check: true
                    }
                } else {
                    return {
                        ...i, check: false
                    }
                }
            })
            setMarket(itm)
        } if (getData?.union) {
            const itm = union.map((i: any, ix: any) => {
                if (ix === getData.union) {
                    return {
                        ...i, check: true
                    }
                } else {
                    return {
                        ...i, check: false
                    }
                }
            })
            setUnion(itm)
        } if (getData.projectLocation.length > 0) {
            setCountryCode(getData.projectLocation)
        } if (getData?.pinCode.length > 0) {
            fetchZip(getData.pinCode)
        }
    }, [getData])
    const fetchZip = async (zip: any) => {
        try {
            const res = await fetchZipApi({ zip });
            // console.log('response from  fetchZipApi', res)
            if (res.zipcode) {
                setZipLocation([res.city, res.state])
                setZipError('')
            } else {
                setZipLocation(['', ''])
                setZipError("Enter valid ZIP code");
            }
        } catch (err) {
            setZipLocation(['', ''])
            setZipError("Enter valid ZIP code");
            console.log("Err", err);
        }
    };
    return (
        <DetailsSection theme={theme}>
            <h2>Project details</h2>
            <div>
                <label>Title</label>
                <input type="text" placeholder='E.g. Family Guy' onChange={(e) => onChange({ title: e.target.value })} value={getData?.title} required />
                <label>Description</label>
                <textarea placeholder='Provide description on this project.' onChange={(e) => onChange({ description: e.target.value })} value={getData?.description} />
                <label>Project Location</label>
                <ReactFlagsSelect
                    searchable={true}
                    selected={countryCode}
                    onSelect={(code) => { setCountryCode(code); onChange({ projectLocation: code }) }}
                />
                <div className='location flex items-center gap-5 mt-5'>
                    <input type="number" placeholder='90081' onChange={(e) => onChange({ pinCode: e.target.value })} value={getData?.pinCode} />
                    {zipLocation[0]?.length > 1 ?
                        <h4><HiLocationMarker />{zipLocation[0]} , {zipLocation[1]}</h4>
                        : ''
                    }
                    <p className='error_msg'>{zipError}</p>
                </div>
            </div>
            <hr />
            <h2>Accept application from <span>(Market)</span></h2>
            <div className='flex flex-wrap gap-4 my-6'>
                {market.map((i) => {
                    return (
                        <div className={i.check ? 'check_box select' : ' check_box'} key={i.id} onClick={() => { isCheck(i.id) }}>
                            {/* {i.icon} */}
                            <h3>{i?.name}</h3>
                            <span>{i.check ? <GoCheck /> : null}</span>
                        </div>
                    )
                })}
            </div>
            <hr />
            <h2>Union</h2>
            <div className='flex flex-wrap gap-4 my-6'>
                {union.map((i: any, ix: any) => {
                    return (
                        <div className={i.check ? 'check_box select' : ' check_box'} key={i.id} onClick={() => { isUnioncheck(i.id); onChange({ union: ix }) }}>
                            {/* {i.icon} */}
                            <h3>{i?.name}</h3>
                            <span>{i.check ? <GoCheck /> : null}</span>
                        </div>
                    )
                })}
            </div>
            <hr />
            <label>Associated website <span>(optional)</span></label>
            <input type="text" placeholder='www.FoxCasting.com' onChange={(e) => onChange({ associatedWebsite: e.target.value })} value={getData?.associatedWebsite} />
            <hr />
            <div className='flex gap-3'>
                <ToogleContainer>
                    <label className="switch">
                        <input type="checkbox" className="checkbox" onChange={(e) => onChange({ provideNumber: e.target.checked })} checked={getData.provideNumber == "1" ? true : false} />
                        <span className="toggle-thumb"></span>
                    </label>
                </ToogleContainer>
                <label>Applicant’s must provide a phone number</label>
            </div>
            <div className='flex gap-3'>
                <ToogleContainer>
                    <label className="switch">
                        <input type="checkbox" className="checkbox" onChange={(e) => onChange({ providePhoto: e.target.checked })} checked={getData.providePhoto == '1' ? true : false} />
                        <span className="toggle-thumb"></span>
                    </label>
                </ToogleContainer>
                <label>Applicant’s must provide a photo</label>
            </div>
        </DetailsSection>
    )
}
type propTypes = {
    getData: any,
    onChange: any,
    // localData: any,
}
const DetailsSection = styled.section`
    h2{
    span{
        font-weight:400;
    }
    }
    .check_box{
        display: flex;
        align-items: center;
        gap: 6px;
        background: #EFEFF0;
        border-radius: 50px;
        padding: 8px 10px;
        cursor: pointer;
        transition:all 0.5s;
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
/*  */
    .location {
        position: relative;
        input {
            max-width: 200px;
        }
        h4 {
            display: flex;
            align-items: center;
            color: ${p => p.theme.primary};
            font-weight: 600;
            font-size: 18px;
            gap: 6px;
        }
        svg{
            font-size: 22px;
        }
    }
    p.error_msg {
        position: absolute;
        bottom: -22px;
        left: 6px;
        color: #f14a3f;
        font-size: 13px;
        font-weight: 400;
    }
    label{
        font-weight: 700;
        font-size: 14px;
        display:block;
        margin: 10px 0px;
        span{
            font-weight:400;
            color:#3C3C4399;
        }
    }
    input ,textarea{
        width: 100%;
        border: 1px solid #A1A1AA;
        padding: 8px;
        border-radius: 4px;
    }
    textarea{
        height:120px;
    }
    hr {
        margin: 30px 0px;
    }
`
// give an error due to icons when store it on local storage 
// const Data = [
//     {
//         id: 1,
//         name: 'Anywhere in the United states',
//         icon: <BiWorld />,
//         check: true,
//     },
//     {
//         id: 2,
//         name: 'Worldwide',
//         icon: <BiWorld />,
//         check: false,
//     },
//     {
//         id: 3,
//         name: 'Select by choosen location only',
//         icon: <BiWorld />,
//         check: false,
//     },
// ]
// const Data2 = [
//     {
//         id: 1,
//         name: 'Union and Non-Union',
//         icon: <BiWorld />,
//         check: true,
//     },
//     {
//         id: 2,
//         name: 'Union',
//         icon: <BiWorld />,
//         check: false,
//     },
//     {
//         id: 3,
//         name: 'Non-Union',
//         icon: <BiWorld />,
//         check: false,
//     },
//     {
//         id: 4,
//         name: 'N/A',
//         icon: <BiWorld />,
//         check: false,
//     },
// ]
const Data = [
    {
        id: 1,
        name: 'Anywhere in the United states',
        check: true,
    },
    {
        id: 2,
        name: 'Worldwide',
        check: false,
    },
    {
        id: 3,
        name: 'Select by choosen location only',

        check: false,
    },
]
const Data2 = [
    {
        id: 1,
        name: 'Union and Non-Union',

        check: true,
    },
    {
        id: 2,
        name: 'Union',

        check: false,
    },
    {
        id: 3,
        name: 'Non-Union',

        check: false,
    },
    {
        id: 4,
        name: 'N/A',

        check: false,
    },
]