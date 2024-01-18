
import { SignupCard } from "@/styles/Card.styled";
import TranslatedText from "components/TranslatedText";
import { useRouter } from "next/router";

export default function ConsentOne({ setData, data, height, setActiveCall, isChild }: any) {
    const router = useRouter()

    return (
        <div className="padding min-h-screen flex items-center justify-center"
            style={{ minHeight: height }}>
            <div>
                <h4 className="font-bold text-5xl mb-10 text-center">
                    <TranslatedText> {isChild
                        ?
                        "Is the parent/guardian is currently Employed"
                        :
                        "Are you currently Employed?"
                    } </TranslatedText> </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center">

                    <SignupCard
                        active={data?.consentOne === 1}
                        onClick={() => {
                            setActiveCall(5)
                            setData((data: any) => ({ ...data, consentOne: 1 }));
                            document.getElementById("income").classList.remove("hidden");
                            router.push("#income");
                        }}
                    >
                        <TranslatedText>Yes</TranslatedText>
                    </SignupCard>

                    <SignupCard
                        active={data?.consentOne === 0}
                        onClick={() => {
                            setActiveCall(5)
                            setData((data: any) => ({ ...data, consentOne: 0 }));
                            document.getElementById("income").classList.remove("hidden");
                            router.push("#income");
                        }}
                    >
                        <TranslatedText>No</TranslatedText>
                    </SignupCard>
                </div>
            </div>
        </div>
    )
}