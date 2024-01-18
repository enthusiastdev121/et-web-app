import React, { useState, useEffect } from 'react'
import styled, { useTheme } from "styled-components"
import { GoCheck } from 'react-icons/go';
import { FaPlus } from 'react-icons/fa';

export default function SubmissionType({ getData, onChange }: propType) {
    const [subType, setSubType] = useState(Data);
    const [check, setCheck] = useState<number>(1);
    const [email, setEmail] = useState(
        [
            {
                id: 1,
                mailId: '',
            },
        ]
    )
    const theme = useTheme()
    const isCheck = (id: any) => {
        const edit = subType.map((i) => {
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
        setSubType(edit)
        // onChange({ type: edit.filter((s: any) => s.check === true)[0]?.id })
    }
    const addEmail = () => {
        const add = {
            id: email.length + 1,
            mailId: '',
        }
        setEmail(s => ([...s, add]))
    }
    const updateEmail = (id: any, e: any) => {
        const set = email.map((i) => {
            if (i.id === id) {
                return {
                    ...i, mailId: e.target.value
                }
            } else {
                return {
                    ...i
                }
            }
        })
        setEmail(set)
        onChange({ email: set })
    }
    useEffect(() => {
        if (getData?.type) {
            const newType = subType.map((i, ix) => {
                if (ix === getData.type) {
                    return {
                        ...i, check: true
                    }
                } else {
                    return {
                        ...i, check: false
                    }
                }
            })
            setSubType(newType)
        }
        if (getData?.email) {
            setEmail(getData.email)
        }
        if (getData?.notifyThrough) {
            setCheck(getData.notifyThrough + 1)
        }
    }, [getData])
    useEffect(() => {
        if (!email[0]) {
            addEmail()
        }
    }, [email])
    // console.log('---- email   --- ', email)
    return (
        <DetailSection theme={theme}>
            <h2>Submission type</h2>
            <div className='flex flex-wrap gap-4 my-6'>
                {subType.map((i, ix) => {
                    return (
                        <div className={i.check ? 'talent_box select' : ' talent_box'} key={i.id} onClick={() => { isCheck(i.id); onChange({ type: ix }) }}>
                            <h3>{i?.name}</h3>
                            <span>{i.check ? <GoCheck /> : null}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <label>Send submissions to this email:</label>
                {email.map((i, ix) => {
                    return (
                        <div key={ix} className='my-4'>
                            <input type="email" placeholder='ProductionWise@gmail.com' onChange={(e) => updateEmail(i.id, e)} value={email[ix].mailId} />
                        </div>
                    )
                })}
                <button onClick={addEmail}> <FaPlus />Add another email to receive submission</button>
            </div>
            <hr />
            <div className='checkbox'>
                <label>Notify me through</label>
                {checkData.map((i, ix) => {
                    return (
                        <div key={i.id}>
                            <input type="checkbox" id={i.htmlFor} onChange={(e) => { setCheck(i.id); onChange({ notifyThrough: ix }) }} checked={check === i.id ? true : false} />
                            <label htmlFor={i.htmlFor}>{i.label}</label>
                        </div>
                    )
                })}

            </div>
        </DetailSection>
    )
}
type propType = {
    getData: any,
    onChange: any,
}
const DetailSection = styled.section`
    button{
        color:${p => p.theme.primary};
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 8px;
        margin-top: 10px;
        font-weight: 600;
        cursor: pointer;
        margin-left: auto;
    }
    .checkbox > div{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 14px;
        input {
            width: auto;
        }
    }
    .talent_box{
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
    .talent_box:hover{
        box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 0px 6px 2px;
    }
    .talent_box.select{
        background: ${p => p.theme.primary};
        color: ${p => p.theme.pure};
    }
/*  */
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
    input{
        width: 100%;
        border: 1px solid #A1A1AA;
        padding: 8px;
        border-radius: 4px;
    }
    hr {
        margin: 30px 0px;
    }
`
const Data = [
    {
        id: 1,
        name: 'Self Submission',
        check: true,
    },
    {
        id: 2,
        name: 'Open Call',
        check: false,
    },
]
const checkData = [
    {
        id: 1,
        label: 'As Submissions Come In (receive an email from every applicant)',
        htmlFor: 'email',
    },
    {
        id: 2,
        label: 'Daily Digest',
        htmlFor: 'daily',
    },
    {
        id: 3,
        label: 'Weekly Summary',
        htmlFor: 'weekly',
    },
    {
        id: 4,
        label: 'Accepting online submissions, but do not send email notifications',
        htmlFor: 'notifications',
    }
]