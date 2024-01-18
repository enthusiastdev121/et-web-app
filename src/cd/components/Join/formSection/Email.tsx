import Button from 'components/Button'
import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { validateEmail } from "@/utils/helper";
export default function Email({ getData, onChange }: propTypes) {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const theme = useTheme()
    useEffect(() => {
        setEmail(getData)
    }, [getData])
    const submit = () => {
        setError(true)
        if (validateEmail(email)) {
            setError(false)
            onChange(email)
        }
    }
    // Code to Handel Enter key
    const handleEnterKey = (e: any) => {
        if (e.key === 'Enter') {
            submit()
        }
    }
    return (
        <FormBox theme={theme}>
            <h1 className='font-bold sm:text-3xl text-2xl'>Find the perfect talent that suits your project.</h1>
            <div className='form' >
                <label>Enter your email below to get started.</label>
                <input type='email' placeholder='Enter your email address...' onChange={(e) => { setEmail(e.target.value) }} value={email} onKeyPress={(e) => { handleEnterKey(e) }} />
                <p className='error_msg'>{error ? 'Enter a valid email' : ''}</p>
                <Button onClick={submit}>Ok</Button>
            </div>
        </FormBox>
    )
}
const FormBox = styled.section`
    width: 100%;
    .form{
        margin-top: 40px;
    }
    label {
        font-weight: 700;
        font-size: 20px;
        display: block;
    }
    input {
        margin-top: 20px;
        width: 100%;
        padding: 12px 0px;
        border-bottom: 2px solid  #191919;
        font-weight: 500;
        font-size: 18px;
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
        background: ${(p) => p.theme.primary};
    }

`
type propTypes = {
    onChange: any,
    getData: string,
}