import { SignupCard } from "@/styles/Card.styled";
import TranslatedText from "components/TranslatedText";
import { useRouter } from "next/router";

export default function ConsentTwo({ setData, data, height, setActiveCall, isChild }: any) {
    const router = useRouter()

    return (
        <div className="padding min-h-screen flex items-center justify-center"
            style={{ minHeight: height }}>
            <div>
                <h4 className="font-bold text-3xl mb-12 text-center leading-10">
                    <TranslatedText>{
                        isChild ?
                            "In order to be successful in this career, you may incur expenses such as traveling to an audition. As the parent/guardian, can you afford this?"
                            :
                            "In order to be successful in this career, you may incur expenses such as traveling to an audition. Can you afford this?"
                    }</TranslatedText>
                </h4>

                <div className="flex items-center gap-5 justify-center max-w-[800px] mx-auto">

                    <SignupCard
                        active={data?.consentTwo === 1}
                        onClick={() => {
                            setActiveCall(5)
                            setData((data: any) => ({ ...data, consentTwo: 1 }));
                            document.getElementById("serious").classList.remove("hidden");
                            router.push("#serious");
                        }}

                    >
                        <TranslatedText>Yes</TranslatedText>
                    </SignupCard>

                    <SignupCard
                        active={data?.consentTwo === 0}
                        onClick={() => {
                            setActiveCall(5)
                            setData((data: any) => ({ ...data, consentTwo: 0 }));
                            document.getElementById("serious").classList.remove("hidden");
                            router.push("#serious");
                        }}

                    >
                        <TranslatedText>No</TranslatedText>
                    </SignupCard>
                </div>
            </div>
        </div>
    )
}