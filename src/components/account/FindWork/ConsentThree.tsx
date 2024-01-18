import { SignupCard } from "@/styles/Card.styled";
import TranslatedText from "components/TranslatedText";
import { useAuth } from "context/AuthContext";
import { setTalentGeneralDetails } from "network/apis";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";

export default function ConsentThree({ setData, data, height, setActiveCall, isChild }: any) {
    const router = useRouter()
    const { token, logout } = useAuth()

    useEffect(() => {
        if (!data?.consentThree) return;

        const postGenDetails = async () => {
            try {
                const res = await setTalentGeneralDetails({
                    token: token,
                    raw: {
                        working: data.consentOne,
                        willing_to_travel: data.consentTwo,
                        serious: data.consentThree,
                        health_insurance: data.healthInsurance,
                        annual_income: data.income
                    }
                })

                if (isChild) {
                    logout();
                }


                if (isChild) {
                    router.push('/login/coppa')
                } else {
                    router.push({
                        pathname: '/add-social-links',
                        query: {
                            redirect: '/upgrade-to-pro',
                            new: true,
                        }
                    })
                }

                // Router.push({
                //     pathname: isChild ? '/login/coppa' : `/add-social-links?redirect=/upgrade-to-pro`,
                //     ...(isChild ? {} : { query: { new: true } })
                // })
            } catch (err) {
                console.log(err)
            }
        }
        postGenDetails();
    }, [data])

    return (
        <div className="padding min-h-screen flex items-center justify-center"
            style={{ minHeight: height }}>
            <div>
                <h4 className="font-bold text-3xl mb-12 text-center leading-10">
                    <TranslatedText>{
                        isChild ?
                            "We are very busy accommodating people who are very serious about their career, as parent/guardian on a scale of 1-10 how serious are you about your child's career?"
                            : "We are very busy accommodating people who are very serious about their career, on a scale of 1-10 how serious are you about your career?"
                    } </TranslatedText></h4>

                <div className="flex items-center gap-5 justify-center max-w-[800px] mx-auto">

                    <SignupCard
                        active={data?.consentThree === 3}
                        onClick={() => {
                            setActiveCall(5)
                            setData((data: any) => ({ ...data, consentThree: 3 }));

                        }}

                    >
                        1-3
                    </SignupCard>

                    <SignupCard
                        active={data?.consentThree === 6}
                        onClick={() => {
                            setActiveCall(5)
                            setData((data: any) => ({ ...data, consentThree: 6 }));

                        }}

                    >
                        <p>4-6</p>
                    </SignupCard>

                    <SignupCard
                        active={data?.consentThree === 10}
                        onClick={() => {
                            setData((data: any) => ({ ...data, consentThree: 10 }));

                        }}

                    >
                        <p>7-10</p>
                    </SignupCard>
                </div>
            </div>
        </div>
    )
}