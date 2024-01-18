import { loginApi } from 'network/apis/cd/auth'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useConfig } from "context/RootContext";
import { Container } from '../../../components/account/Gradient.styled'
import Header from 'components/Layout/Header';
import { BiLockAlt, BiUser } from 'react-icons/bi';
import Button from 'components/Button';
import Link from 'next/link';
import { PrimaryBtnSingle } from '@/styles/Btn.styled';
import { rgba } from 'polished';
import { useRouter } from 'next/router';
import toast from "react-hot-toast";
export default function Login() {
    const router = useRouter()
    const config: any = useConfig();
    const [email, setEmail] = useState('desmond1@gmail.com')
    const [password, setPassword] = useState('123456')
    const [loading, setLoading] = useState(false)
    const hitOnLoginApi = async () => {
        try {
            setLoading(true)
            const raw = {
                // user_type: config.userType,
                user_type: 'bam_cd_user',
                // client_id: config.clientId,
                client_id: '74d89ce4c4838cf495ddf6710796ae4d5420dc91',
                client_secret: config.clientSecret,
                grant_type: 'password',
                username: email,
                password: password,
            };
            const res = await loginApi(JSON.stringify(raw));
            router.push(`/cd/dashboard`)
            console.log('res from api ', res)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            console.log('Err...', err)
            toast.error("Check Username and password")
        }
    }
    return (
        <div className="overflow-hidden">
            <Header />
            <div className="pt-[10vh] md:pt-[15vh] bg-paper" style={{ minHeight: "100vh" }}            >
                <Container className="modal-container">
                    <section className="login login-email login-section">
                        <div className="animated-gradient-bg"></div>
                        <div className="login__inner">
                            <Modal className="shadow-lg rounded-2xl flex flex-col px-5 lg:px-40 py-10 text-center text-sm lg:text-base mx-auto">
                                <div className="grid grid-cols-1 gap-5" >
                                    <div className="relative">
                                        <div className="text-left absolute top-1/2 -translate-y-2/4 left-2 text-xl txt-base"> <BiUser className="text-gray-700" /></div>
                                        <input className="border border-gray-400 rounded py-3 px-9 w-full bg-paper txt-base" type="text" placeholder="Talent ID, Username or Email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="relative">
                                        <div className="text-left absolute top-1/2 -translate-y-2/4 left-2 text-xl txt-base">
                                            <BiLockAlt className="text-gray-700" />
                                        </div>
                                        <input className="border border-gray-400 rounded p-3 px-9 w-full bg-paper txt-base" type="password" placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <Button primary onClick={hitOnLoginApi} loading={loading}>Login</Button>
                                    <Link href="/forget-password" passHref>
                                        <small className="justify-self-end text-sm cursor-pointer hover:text-blue-400 transition-all duration-75 ease-in-out"> Forgot your password? </small>
                                    </Link>
                                </div>
                                <p className="mt-10 text-xs"> By continuing using the app, you agree to our.{" "}
                                    <Link href="/about/agreement"><a className="underline cursor-pointer hover:text-blue-400 transition-all duration-75 ease-in-out"> Terms of Service </a></Link>
                                    and acknowledge that you have read{" "}
                                    <Link href="/about/privacy">
                                        <a> <span className="underline cursor-pointer hover:text-blue-400 transition-all duration-75 ease-in-out"> our Privacy </span> </a>
                                    </Link> Notice to learn how we collect, use, and share your data.
                                </p>

                                <p className="mt-2">
                                    Don&apos;t have an account?{" "}
                                    {/* <Link href="/account/signup" passHref> */}
                                    <Link href="/cd/join" passHref>
                                        <PrimaryBtnSingle className="font-semibold">
                                            Sign up
                                        </PrimaryBtnSingle>
                                    </Link>
                                </p>
                                {/* </div> */}
                            </Modal >
                        </div>
                    </section>
                </Container>
            </div>
        </div>
    )
}

const Modal = styled.div`
  background-color: ${(props: any) => props.theme.pure};
  color: ${(props: any) => props.theme.base};
  border: 1px solid ${(p: any) => rgba(p.theme.base, 0.1)};
  max-width: 825px;
  max-height: 825px;
  margin: 0 auto;
`;