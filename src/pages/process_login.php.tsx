
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router'
import { getLoginLinkCredsApi } from 'network/apis/app'
import { formatLoginResponse } from 'network/services/auth';
import { useAuth } from 'context/AuthContext'
import Lottie from 'react-lottie';
import loginAnimationData from './../../public/animations/login-spinner.json';
import { SlideHeading } from 'containers/CompleteSignup/slides/Styles';
import Button from 'components/Button';
import Link from 'next/link';

export default function LinkLogin() {
    const [error, setError] = useState('');

    const router = useRouter();
    const { onLoginSuccess } = useAuth();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        const fetchNow = async () => {
            try {
                const res = await getLoginLinkCredsApi({
                    token: router.query.token || '',
                    is_agent: router.query.is_agent || ""
                });
                console.log("RES", res);
                const response = await formatLoginResponse({ ...res, original: { ...res } });
                onLoginSuccess({ creds: response.creds, user: response.user, redirect: false, type: 'talent' });

                if (router.query.url) {
                    const path = router.query.url?.split('exploretalent.com/');
                    const subPath = path.pop();
                    router.push('/' + subPath)

                } else {
                    console.log(router.query)
                    router.push('/')

                }

            }
            catch (err) {
                console.log("Err", err);

                const error = err?.error;

                // console.log(typeof(error))

                if (typeof error === 'string') {

                }

                setError("Something went wrong!")

                if (error === "COPPA") {
                    router.push('/login/coppa')
                }



            }
        }
        if (router.query.token) {
            fetchNow();
        }
    }, [router.query])

    // if (error === "coppa") {
    //     router.push('/')

    // }

    return (
        <>
            <div className='flex flex-col justify-center items-center absolute top-1/2 left-1/2' style={{
                transform: 'translate(-50%, -50%)'
            }}>
                <div>
                    <Image
                        src="/svg/logo.svg"
                        height={90}
                        width={220}
                        alt="logo"
                        priority
                    />
                </div>

                {error ? <> <div className='text-red-500 font-semibold mb-3 mt-4' >{error}</div>

                    <Link href='/'>
                        <a>
                            <Button primary >Go Home</Button>
                        </a>
                    </Link>
                </> :

                    <div >


                        <div className="w-full h-screen" style={{ width: '130px', height: "200px", margin: "0 auto" }}>
                            <Lottie options={defaultOptions} width="100%" />
                        </div>
                        <div>
                            <SlideHeading style={{ textAlign: "center", margin: '0', marginLeft: '1.5rem' }}>Logging in...</SlideHeading>
                        </div>
                    </div>}
            </div>

        </>
    )
}



