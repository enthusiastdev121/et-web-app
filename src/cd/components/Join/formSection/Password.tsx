import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'
import Button from 'components/Button'
export default function Password({ getData, onChange }: propTypes) {
    const [password, setPassword] = useState(false)
    const [enterPs, setEnterPs] = useState('')
    const [confirmPs, setConfirmPs] = useState('')
    const [error, setError] = useState(false)
    const checkPassword = () => {

        if (enterPs === confirmPs) {
            setError(false)
            onChange(enterPs)
        } else {
            setError(true)
        }
    }
    useEffect(() => {
        setEnterPs(getData);
        setConfirmPs(getData);
    }, [getData])
    const theme = useTheme()
    // Code to Handel Enter key
    const handleEnterKey = (e: any) => {
        if (e.key === 'Enter') {
            checkPassword()
        }
    }
    return (
        <FormBox theme={theme}>
            <h1 className='font-bold sm:text-3xl text-2xl'>Create a CD account</h1>
            <p>Looks like you&apos;re new to ExploreTalent! Let&apos;s set up your account to get you started.</p>
            <div className='form'>
                <label>Enter your password</label>
                <div className='password'>
                    <input type={password ? 'text' : 'password'} placeholder='Enter password' onChange={(e) => setEnterPs(e.target.value)} value={enterPs} />
                    {/* code to check password is strong  */}
                    {/* <span><FaCheckCircle className='check' /></span> */}
                </div>
                <div className='password'>
                    <input type={password ? 'text' : 'password'} placeholder='Confirm password' onChange={(e) => { setConfirmPs(e.target.value) }} value={confirmPs} onKeyPress={(e) => { handleEnterKey(e) }} />
                    <span>{error ? <BsExclamationCircleFill className='error' /> : null}</span>

                </div>
                <p className='error_msg'>{error ? 'The password you enter don’t match' : ''}</p>
                <span>
                    <input type="checkbox" value="password" id='password' onChange={(e) => setPassword(e.target.checked)} />
                    <label htmlFor='password'>Show password</label>
                </span>
                <Button onClick={checkPassword}>Next</Button>
            </div>
        </FormBox>
    )
}
const FormBox = styled.section`
    width: 100%;
    .form{
        margin-top: 40px;
        span{
            display: flex;
            justify-content: start;
            align-items: center;
            gap:10px;
            margin-top: 20px;
            input{
                width:fit-content;
                margin: 0px;
            }
            label {
                font-weight: 400;
                font-size: 16px;
            }
        }
        label {
            font-weight: 700;
            font-size: 18px;
            display: block;
        }
        input {
            margin-top: 20px;
            width: 100%;
            padding: 6px 0px;
            border-bottom: 1px solid #A1A1AA;
            font-weight: 500;
            font-size: 18px;
        }
        input:focus{
            border-bottom: 1px solid #0070F4;
        }
        input::placeholder {
            color: #A1A1AA;
            font-weight: 500;
            font-size: 18px;
        }
        button {
            padding: 10px 26px;
            background: ${(p) => p.theme.primary};
            color: ${(p) => p.theme.pure};
            margin-top: 30px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 16px;
            transition :all 0.5s;
        }
        button:hover{
            box-shadow: rgb(0 0 0 / 54%) 0px 4px 13px;
        }
       
    }
    .password {
        position: relative;
        span {
            position: absolute;
            right: 4px;
            top: 50%;
            margin: 0px;
            svg{
                font-size: 22px;
            }
            svg.check {
                color: #37C96A;
            }
            svg.error {
                color: #E53D3E;
            }
        }
    }
    
    
`
type propTypes = {
    onChange: any,
    getData: any
}