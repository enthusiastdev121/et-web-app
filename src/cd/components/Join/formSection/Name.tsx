import Button from 'components/Button'
import Link from 'next/link'
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { signupApi } from 'network/apis/cd/auth'
import Router from 'next/router'
import { useAuth } from 'context/AuthContext'
import toast from "react-hot-toast";
export default function Name({ email, password, onChange }: propTypes) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const { onLoginSuccess } = useAuth();
    const theme = useTheme()
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        phone1: "",
        company: "",
        lname: "",
        website: "",
    });
    const onSubmit = async () => {
        if (firstName.length > 0) {
            try {
                setLoading(true);
                const res = await signupApi({
                    email1: email,
                    pass: password,
                    phone1: state.phone1,
                    fname: firstName,
                    lname: lastName,
                    company: state.company,
                    website: state.website,
                });
                onLoginSuccess({
                    creds: {
                        expire: res.access_token.expires_in,
                        refreshToken: res.access_token.refresh_token,
                        token: res.access_token.access_token

                    },
                    user: {
                        fname: res.fname,
                        lname: res.lname,
                        email: res.email1
                    },
                    newLogin: true,
                    type: 'cd'
                });
                if (res.access_token) {
                    console.log("number", res.access_token.expires_in);
                }
                setLoading(false);
                Router.push('/cd/getting-started');

            } catch (err) {
                setLoading(false);
                console.log('Err', err);
                onChange(err)
            }
        } else {
            toast.error("Fill out the input fieldssss")
        }
    };

    // Code to Handel Enter key
    const handleEnterKey = (e: any) => {
        if (e.key === 'Enter') {
            onSubmit()
        }
    }
    return (
        <FormBox theme={theme}>
            <h1 className='font-bold sm:text-3xl text-2xl'>Create a CD account</h1>
            <p>Almost done, complete the information below to get going.</p>
            <div className='form'>
                <label>What is your name?</label>
                <input type='text' placeholder='First name' onChange={(e) => { setFirstName(e.target.value) }} />
                <input type='text' placeholder='Last name' onChange={(e) => { setLastName(e.target.value) }} onKeyPress={(e) => { handleEnterKey(e) }} />
                <Button onClick={onSubmit} loading={loading}>Next</Button>
                <p>By clicking create account you agreed to our <Link href='#'>Terms of Service</Link> and <Link href='#'>Privacy Policy</Link>, and that you are currently at least 16 years old.</p>
            </div>
        </FormBox>
    )
}
const FormBox = styled.section`
    width: 100%;
    .form{
        margin-top: 40px;
       
        label {
            font-weight: 700;
            font-size: 20px;
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
        p{
            margin: 20px 0px;
            a {
                color: #0070F4;
                text-decoration: underline;
            }
        }
    }
    
`
type propTypes = {
    password: any,
    email: any,
    onChange: any,
}