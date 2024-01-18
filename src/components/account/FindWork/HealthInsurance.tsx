
import { SignupCard } from "@/styles/Card.styled";
import TranslatedText from "components/TranslatedText";
import { useRouter } from "next/router";

export default function HealthInsurance({ setData, data, height, setActiveCall, isChild }: any) {
    const router = useRouter()

    return (
        <div className="padding text-center min-h-screen lg:flex items-center justify-center"
            style={{ minHeight: '100vh' }}>
            <div>
                <h4 className="font-bold text-3xl mb-10 text-center max-w-[1000px]">
                    <TranslatedText>{
                        isChild ?
                            "Do the parent/guardian currently has health insurance ? (Not required however some productions will ask)" :
                            "Do you currently have health insurance ? (Not required however some productions will ask)"
                    }</TranslatedText></h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center max-w-[700px] mx-auto">

                    <SignupCard
                        active={data?.healthInsurance === 1}
                        onClick={() => {
                            setActiveCall(5)
                            setData((data: any) => ({ ...data, healthInsurance: 1 }));
                            document.getElementById("travel").classList.remove("hidden");
                            router.push("#travel");
                        }}
                    >
                        <TranslatedText>Yes</TranslatedText>
                    </SignupCard>

                    <SignupCard
                        active={data?.healthInsurance === 0}
                        onClick={() => {
                            setActiveCall(5)
                            setData((data: any) => ({ ...data, healthInsurance: 0 }));
                            document.getElementById("travel").classList.remove("hidden");
                            router.push("#travel");
                        }}
                    >
                        <TranslatedText>No</TranslatedText>
                    </SignupCard>
                </div>
            </div>
        </div>
    )
}