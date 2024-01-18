import {
    PrimaryBtn,
    PrimaryBtnOutline,
    PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { updateSocialLinksApi } from "network/apis/ownProfile";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateHttps } from "@/utils/helper";
import Button from "components/Button";
import styled from "styled-components";

export default function AddSocialLinks() {
    const router = useRouter();
    const { profile, setProfile } = useProfileStore();
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState<SocialLinksD>({
        facebook: "",
        youtube: "",
        twitter: "",
        tiktok: "",
        instagram: "",
        external: "",
    });
    const { token } = useAuth();



    useEffect(() => {
        setState({
            facebook:
                profile?.socialLinks?.facebook?.length > 0
                    ? profile?.socialLinks?.facebook
                    : "",
            youtube:
                profile?.socialLinks?.youtube?.length > 0
                    ? profile?.socialLinks?.youtube
                    : "",
            twitter:
                profile?.socialLinks?.twitter?.length > 0
                    ? profile?.socialLinks?.twitter
                    : "",
            tiktok:
                profile?.socialLinks?.tiktok?.length > 0
                    ? profile?.socialLinks?.tiktok
                    : "",
            instagram:
                profile?.socialLinks?.instagram?.length > 0
                    ? profile?.socialLinks?.instagram
                    : "",
            external:
                profile?.socialLinks?.external?.length > 0
                    ? profile?.socialLinks?.external
                    : "",
        });
    }, [profile]);

    const formatLink = ({ base, text }: { base: string; text: string }) => {

        let endStr = '';

        if (text.includes('@') && !endStr.includes('.com')) {
            endStr = text.replace('@', "")
        } else if (text.includes('.com')) {
            endStr = text.replace(/.*\.com\//, '');
        } else if (text) {
            endStr = text
        } else {
            return ''
        }

        return base + endStr;
    }

    const onSave = async () => {
        try {
            // let someInvalid = false;

            // let mod: any = {};
            // Object.keys(state).forEach((i) => {
            //     if (state[i]) {
            //         mod = { ...mod, [i]: state[i] };
            //     }
            // });

            // let validKeys: any = {};

            // Object.keys(mod).forEach((i) => {
            //     if (validateHttps(mod[i])) {
            //         validKeys = { ...validKeys, [i]: mod[i] };
            //     } else {
            //         someInvalid = true;
            //     }
            // });

            // if (someInvalid) {
            //     toast.error("Some links are invalid, Please check");
            // }

            let mod = {
                facebook: formatLink({ base: 'https://www.facebook.com/', text: state.facebook }),
                youtube: formatLink({ base: 'https://www.youtube.com/', text: state.youtube }),
                twitter: formatLink({ base: 'https://twitter.com/', text: state.twitter }),
                tiktok: formatLink({ base: 'https://www.tiktok.com/', text: state.tiktok }),
                instagram: formatLink({ base: 'https://www.instagram.com/', text: state.instagram }),
                external: state.external,
            };


            setLoading(true);
            const res = await updateSocialLinksApi({
                token,
                raw: {
                    ...mod,
                },
            });

            setLoading(false);
            console.log("RES", res);
            if (res) {
                setProfile((s) => ({
                    ...s,
                    socialLinks: { ...s.socialLinks, ...mod },
                }));

                if (router.query?.redirect) {
                    const { redirect, ...qs } = router.query;
                    router.push({
                        pathname: redirect as string,
                        query: {
                            ...qs
                        }
                    });
                }

            }
        } catch (err) {
            setLoading(false);
            console.log("Err", err);
        }
    };

    return (
        <div className="padding-small">
            <ToastContainer className="Toastify" />
            <div
                className="padding-x"
                style={{ maxWidth: "600px", margin: "0 auto" }}
            >

                <div className="mb-8" >
                    <h3 className="font-bold text-xl" >Get more followers and build your network, add your social profiles and appear in more search filters.</h3>
                </div>


                <div className="mb-10">
                    {/* instagram */}
                    <div className="mb-7">
                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src="/images/Instagram.png"
                                height={20}
                                width={20}
                                alt="instagram"
                            />{" "}
                            <h2 className="font-medium">Instagram</h2>
                        </div>
                        <Input
                            type="text"
                            placeholder="Add/paste link here"
                            value={state.instagram}
                            onChange={(e) =>
                                setState((s) => ({
                                    ...s,
                                    instagram: e.target.value,
                                }))
                            }
                        />

                    </div>
                    {/* facebook */}
                    <div className="mb-7">
                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src="/images/Facebook.png"
                                height={20}
                                width={20}
                                alt="facebook"
                            />{" "}
                            <h2 className="font-semibold">Facebook</h2>
                        </div>
                        <Input
                            type="text"
                            placeholder="Add/paste link here"
                            value={state.facebook}
                            onChange={(e) =>
                                setState((s) => ({
                                    ...s,
                                    facebook: e.target.value,
                                }))
                            }
                        />

                    </div>
                    {/* twitter */}
                    <div className="mb-7">
                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src="/images/Twitter.png"
                                height={20}
                                width={20}
                                alt="twitter"
                            />{" "}
                            <h2 className="font-semibold">Twitter</h2>
                        </div>
                        <Input
                            type="text"
                            placeholder="Add/paste link here"
                            value={state.twitter}
                            onChange={(e) =>
                                setState((s) => ({
                                    ...s,
                                    twitter: e.target.value,
                                }))
                            }
                        />

                    </div>
                    {/* youtube */}
                    <div className="mb-7">
                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src="/images/YouTube.png"
                                height={20}
                                width={20}
                                alt="youtube"
                            />{" "}
                            <h2 className="font-semibold">Youtube</h2>
                        </div>
                        <Input
                            type="text"
                            placeholder="Add/paste link here"
                            value={state.youtube}
                            onChange={(e) =>
                                setState((s) => ({
                                    ...s,
                                    youtube: e.target.value,
                                }))
                            }
                        />

                    </div>
                    {/* tiktok */}
                    <div className="mb-7">
                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src="/images/TikTok.png"
                                height={20}
                                width={20}
                                alt="tiktok"
                            />{" "}
                            <h2 className="font-semibold">Tiktok</h2>
                        </div>
                        <Input
                            type="text"
                            placeholder="Add/paste link here"
                            value={state.tiktok}
                            onChange={(e) =>
                                setState((s) => ({
                                    ...s,
                                    tiktok: e.target.value,
                                }))
                            }
                        />

                    </div>
                    {/* external */}
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Image
                                src="/images/external-website.png"
                                height={20}
                                width={20}
                                alt="external"
                            />{" "}
                            <h2 className="font-semibold">Personal Website</h2>
                        </div>
                        <Input
                            type="text"
                            placeholder="Add/paste link here"
                            value={state.external}
                            onChange={(e) =>
                                setState((s) => ({
                                    ...s,
                                    external: e.target.value,
                                }))
                            }
                        />
                        <small className="dim-text">
                            If you have personal website, you can link it here.{" "}

                        </small>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5">
                <Button loading={loading} size="large" primary onClick={onSave}>
                    Save & Continue
                </Button>
                <Button primary outlined onClick={() => {
                    if (router.query?.redirect) {
                        const { redirect, ...qs } = router.query;
                        router.push({
                            pathname: redirect as string,
                            query: {
                                ...qs
                            }
                        });
                    } else {
                        router.push(`/${profile.talentnum}`)
                    }
                }}>
                    I'll do it later
                </Button>
            </div>
        </div>
    );
}

type SocialLinksD = {
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
    tiktok: string;
    external: string;
};

export const Input = styled.input`
  background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
`;

