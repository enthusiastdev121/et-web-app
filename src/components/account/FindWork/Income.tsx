
import { SignupCard } from "@/styles/Card.styled";
import TranslatedText from "components/TranslatedText";
import { useRouter } from "next/router";

const INCOMES = [
    {
        id: 1,
        min: "0",
        max: "34,999",
    },
    {
        id: 2,
        min: "35,000",
        max: "49,999",
    },
    {
        id: 3,
        min: "50,000",
        max: "74,999",
    },
    {
        id: 4,
        min: "75,000",
        max: "99,999",
    },
    {
        id: 5,
        min: "100,000",
        max: null,
    },
];

export default function Income({ setData, data, height, setActiveCall, isChild }: any) {
    const router = useRouter()

    return (
        <div className="padding text-center min-h-screen lg:flex items-center justify-center"
            style={{ minHeight: '100vh' }}>
            <div>
                <h4 className="font-bold text-5xl mb-10 text-center"> <TranslatedText>{
                    isChild ?
                        "What is the annual income of parent/guardian?" :
                        "What is your annual income?"
                }</TranslatedText></h4>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {INCOMES.map((i) => {
                        return (
                            <div key={i.id}>
                                <SignupCard
                                    active={data?.income === i.id}
                                    onClick={() => {
                                        setActiveCall(5)
                                        setData((data: any) => ({ ...data, income: i.id }));
                                        document.getElementById("health").classList.remove("hidden");
                                        router.push("#health");
                                    }}
                                >
                                    <>
                                        {
                                            i.max === null ? <> ${i.min} + </> : <>${i.min}{" "}-{" "}${i.max}</>
                                        }
                                    </>
                                </SignupCard>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}