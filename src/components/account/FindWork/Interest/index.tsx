import { interest } from "@/utils/constants/profile";
import Button from "components/Button";
import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import toast from "react-hot-toast";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import TranslatedText from "components/TranslatedText";

export default function Interest({ setData, loading, onUpdate, data, height, setActiveCall }: any) {
    const [list, setList] = useState<any[]>([]);
    const { token } = useAuth()
    const [loading2, setLoading2] = useState(false)
    const [loader, setLoader] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const dem = Object.keys(interest).map((i) => {
            return {
                ...interest[i],
                selected: false,
                sub: interest[i].sub.map((i2: any, index: number) => {
                    return {
                        ...i2,
                        selected: false,
                    };
                }),
            };
        });
        setList(dem);

        return () => { };
    }, []);

    useEffect(() => {
        if (!loader) {
            return;
        }
        setLoading2(loading)
    }, [loading])

    // useEffect(() => {
    //     if (!data?.interest) {
    //         return;
    //     }
    //     onUpdate()
    // }, [data?.interest])


    return (
        <div className="text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: height }}>
            <div className="pt-10">
                <h4 className="text-3xl md:text-5xl font-bold mb-10"><TranslatedText>Choose your interests</TranslatedText></h4>
                {/* <div className="-mt-7 mb-10"><TranslatedText>Select one or more</TranslatedText></div> */}

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 relative justify-items-center sm:justify-items-start">
                    {list.map((i) => (
                        <Item
                            key={i.id}
                            {...i}
                            setList={setList}
                            list={list}
                        />
                    )

                    )}
                </div>

                <div className="mt-5 mb-5 sm:mb-0">
                    <Button
                        primary
                        loading={loading2}
                        onClick={() => {
                            // if (!list?.some((i4: any) => i4.selected === true)) {
                            //     toast.error("Please select at least one Talent Interest to continue")
                            //     return;
                            // }
                            setLoader(true);
                            setActiveCall(6)
                            setData((data: any) => ({ ...data, interest: list }));
                            document.getElementById("password").classList.remove("hidden");
                            router.push("#password");
                        }}
                    >
                        <TranslatedText>Continue</TranslatedText>
                    </Button>
                </div>
            </div>
        </div>
    );
}
