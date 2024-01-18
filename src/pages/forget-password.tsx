import Layout from 'components/Layout'
import styled from 'styled-components'
import React, { useEffect, useState } from "react";
import Button from 'components/Button';
import { Input } from 'containers/editProfilePages/styles';
import { PrimaryBtnOutline } from '@/styles/Btn.styled';
import { useRouter } from 'next/router';
import { validateEmail } from '@/utils/helper';
import { forgetPassApi } from 'network/apis/auth';
import { WHITELABEL_NAME } from '@/utils/envProviders';

const ForgetPassword = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState('')
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (email) {
            setSuccessMsg('')
            if (!validateEmail(email)) {
                setError("Please enter valid email")
            } else {
                setError("")
            }
        } else {
        }
    }, [email])

    const submitChangeHandler = async (e: any) => {
        // e.preventDefault()
        try {

            setLoading(true);
            const res = await forgetPassApi({
                email1: email
            });
            console.log("RES: ", res)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.log('err', error)
        }
        console.log(email)
        setSuccessMsg("Reset password link has been sent successfully, please check your inbox!")
        setEmail('')
    };

    return (
        <>
            <Layout title={`${WHITELABEL_NAME} | Forget Password - ${WHITELABEL_NAME}`}>
                <Container className='padding-small'>
                    <h1 className="text-xl lg:text-2xl font-bold text-center mb-4">Forget Password</h1>
                    <div className='max-w-[720px] flex flex-col mx-auto px-4 gap-4'>
                        {successMsg && <p className='text-xs md:text-lg text-green-500'>{successMsg}</p>}
                        <label htmlFor='email'></label>
                        <Input
                            type="email"
                            placeholder='Enter your registered email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        {error && <p className='text-base text-red-400 '>{error}</p>}
                        <div className="flex items-center justify-center gap-5 mt-4">
                            <Button loading={loading} primary onClick={submitChangeHandler} >
                                Reset
                            </Button>
                            <PrimaryBtnOutline className="btn" onClick={() => router.push('/')}>
                                Cancel
                            </PrimaryBtnOutline>
                        </div>
                    </div>
                </Container>
            </Layout>
        </>

    );
};

const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};
`
export default ForgetPassword;

// const onLogin = async (e: any) => {
//     e.preventDefault();

//     try {
//       const raw = {
//         grant_type: "password",
//         user_type: config.userType,
//         client_id: config.clientId,
//         client_secret: config.clientSecret,
//         username: email,
//         password: password,
//       };
//       setLoading(true);
//       const res = await loginApi(JSON.stringify(raw));
//       setLoading(false);

//       const response = await formatLoginResponse(res);
//       onLoginSuccess({ creds: response.creds, user: response.user,type:'talent' });
//     } catch (err) {
//       setLoading(false);
//       toast.error("Please check your credentials");
//       console.log("Err", err);
//     }
//   };