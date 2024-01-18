import Layout from 'components/Layout'
import styled from 'styled-components'
import React, { useEffect, useState } from "react";
import Button from 'components/Button';
import { Input } from 'containers/editProfilePages/styles';
import { PrimaryBtnOutline } from '@/styles/Btn.styled';
import { useRouter } from 'next/router';
import { validatePassword } from '@/utils/helper';
import { updateProfileDetailApi } from 'network/apis/ownProfile';
import { useProfileStore } from 'context/ProfileStore';
import { useAuth } from 'context/AuthContext';
import { WHITELABEL_NAME } from '@/utils/envProviders';

const ResetPassword = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");

    const { profile } = useProfileStore();
    const { token } = useAuth();

    const submitChangeHandler = async () => {
        if (!profile.talentnum || !token || !password) {
            return;
        }
        try {
            setError('')
            if (confirmPassword !== password) {
                setError("password doesn't match")
                setSuccessMsg('')
                return;
            }
            setLoading(true);
            const res = await updateProfileDetailApi({
                talentnum: profile.talentnum, token, raw: {
                    talentpass: password
                }
            })
            setSuccessMsg("Password changed successfully!")
            setLoading(false);
            router.push('/' + profile.talentlogin)
            console.log("RES", res);
        } catch (error) {
            console.log('error', error)
        }

        setPassword('')
        setConfirmPassword('')
    };

    return (
        <>
            <Layout title={`${WHITELABEL_NAME} | Reset Password - ${WHITELABEL_NAME}`}>
                <Container className='padding-small'>
                    <h1 className="text-xl lg:text-2xl font-bold text-center mb-4">Reset Password</h1>
                    <div className='max-w-2xl flex flex-col mx-auto px-4 gap-4'>
                        {successMsg && <p className='text-base md:text-lg text-green-500'>{successMsg}</p>}
                        <label htmlFor='password'></label>
                        <Input
                            type="password"
                            name='password'
                            placeholder='Enter your new password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor='confirm email'></label>
                        <Input
                            type="password"
                            name='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}

                        />
                        {error && <p className='text-base text-red-400 text-start'>{error}</p>}
                        <div className="flex items-center justify-center gap-5 mt-4">
                            <Button loading={loading} primary onClick={submitChangeHandler} >
                                Reset
                            </Button>
                            <PrimaryBtnOutline className="btn" onClick={() => router.push('/forget-password')}>
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
export default ResetPassword;