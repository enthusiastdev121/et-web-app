import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Email from './Email'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BsFillCaretUpFill } from 'react-icons/bs'
import Password from './Password'
import Name from './Name'
import Button from 'components/Button'
import toast from "react-hot-toast";
export default function Form() {
    const [activeForm, setActiveForm] = useState(1)
    const [progress, setProgress] = useState(0)
    const [getEmail, setGetEmail] = useState('');
    const [getPassword, setGetPassword] = useState('');
    const next = (e: any) => {
        if (activeForm < 3) {
            if (e.length !== 0) {
                setActiveForm(activeForm + 1)
                setProgress(progress + 30)
            } else {
                toast.error("Fill out the input fields")

            }
        } {

        }
    }
    const back = () => {
        if (activeForm <= 1) {
        }
        else {
            setActiveForm(activeForm - 1)
            setProgress(progress - 30)
        }
    }
    const checkError = (e: any) => {
        if (e) {
            if (e.errors) {
                setActiveForm(1)
                setProgress(0)
                toast.error("The Email has already been taken.")
            }
        }
    }
    return (
        <FormSection >
            <div >
                {activeForm === 1 ? <Email getData={getEmail} onChange={(e: any) => { next(e); setGetEmail(e); }} /> :
                    activeForm === 2 ? <Password getData={getPassword} onChange={(e: any) => { next(e); setGetPassword(e) }} /> :
                        activeForm === 3 ? <Name email={getEmail} password={getPassword} onChange={(e: any) => { checkError(e) }} /> : null}
                <div className="progress_bar">
                    <div className='bar_percentage'>
                        <p><span>{progress}</span>% completed</p>
                        <div className='bar'><span style={{ width: `${progress}%` }}></span></div>
                    </div>
                    <div className='buttons'>
                        <Button onClick={back}><BsFillCaretUpFill /></Button>
                        <Button onClick={next} ><BsFillCaretDownFill /></Button>
                    </div>
                </div>
            </div>
        </FormSection >
    )
}
const FormSection = styled.section`
   & > div{
    width: 600px;
    margin: auto;
    @media (max-width:768px){   
        width: 100%;
        padding:40px;
    }
    @media (max-width:450px){   
        padding:10px;
    }
   }
   .progress_bar{
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 600px;
    bottom: 30px;
    @media (max-width:768px){   
        width: 100%;
        padding:40px;
        left:0px;
    }
    @media (max-width:500px){   
        padding:40px;
        flex-direction: column;
        gap: 20px;
        align-items: start;
    }
    @media (max-width:450px){   
        padding:10px;
    }
   }
   .bar_percentage{
    @media (max-width:500px){   
        width: 100%;
    }
        .bar {
            width: 320px;
            background: #EFEFEF;
            height: 8px;
            border-radius: 10px;
            margin-top: 10px;
            position: relative;
            @media (max-width:500px){   
                width: 100%;
            }
            span {
                background: #0070F4;
                height: 8px;
                border-radius: 10px;
                position: absolute;
                top: 0px;
                left: 0px;
                transition: all 2s;
            }
        }
   }
   .buttons{
        border-radius: 6px;
        overflow: hidden;
        button{
            background: #3C3C4399;
            padding: 14px;
            border-radius: 0px;
            svg{
                color: #fff;
            }
        }
        button:first-child{
            border-right:1px solid ${p => p.theme.pure};
        }
   }
   p.error_msg {
        font-size: 15px;
        color: #E53D3E;
        margin-top: 8px;
        font-weight: 500;
        height: 20px;
    }
`
