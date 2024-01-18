import { PrimaryBtn, PrimaryBtnOutline, PrimaryBtnSingle } from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import { validateHttps } from "@/utils/helper";
import { agentType, categories, categoriesKeys, interest } from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { addExtrasApi, updateProfileDetailApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
// import { HeaderContainer, ParentContainer } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
import styled from "styled-components";
import Button from "components/Button";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { rgba } from "polished";
import Layout from "components/Layout";
import TranslatedText from "components/TranslatedText";
import { LinkText } from "@/styles/Link.styled";

export default function AddPhone() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { user, token } = useAuth();
    const { setProfile, profile } = useProfileStore();
    const [phone, setPhone] = useState({
        code: "1",
        number: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [pickerType, setPickerType] = useState("");
    const [value, setValue] = useState();

    const phoneRef = useRef();

    const [code, setCode] = useState("1");
    const [code2, setCode2] = useState("1");

    const getCodeNumberPhone = (res = '') => {

        if (res.includes(" ")) {
            const res2 = res.trim().split(" ");
            return { code: res2[0] || '1', number: res2[1] }
        } else if (res) {
            return { code: '1', number: res }
        } else {
            return { code: '1', number: '' }
        }

    }


    const onSave = async () => {
        if (phone.number.trim() || code.trim()) {
            try {
                setLoading(true);

                let dat: any = {
                    cell: code === '1' ? phone.number : code + " " + phone.number,
                };


                const res = await updateProfileDetailApi({
                    token,
                    talentnum: profile?.talentnum.toString(),
                    raw: { ...dat, sms_ok: 1 },
                });
                setLoading(false);
                setProfile((s) => ({
                    ...s,
                    phone: dat.cell || "",
                }));
                router.push(`/${profile.talentlogin}`)
                // router.back();
            } catch (err) {
                setLoading(false);
                toast.error("Enter valid Phone");
                console.log("Err", err);
            }
        }
    };

    useEffect(() => {
        if (profile.phone) {
            setPhone((s) => ({
                ...s,
                ...getCodeNumberPhone(profile.phone)
            }));
            setCode(getCodeNumberPhone(profile.phone).code)
        }

    }, [profile.phone, profile.phone2]);




    return (
        <Layout feature={false} >

            <div className="padding-small min-h-[70vh] flex justify-center items-center">
                <ToastContainer className="Toastify" />
                <div className="padding-x" style={{ maxWidth: "600px", margin: "0 auto" }}>
                    {/* <HeaderContainer className="flex justify-between">
                    <BsArrowLeftShort className="text-3xl arrow" onClick={() => {
                        router.push(`/${profile.talentlogin}`)
                    }} />
                    <h1 className="text-xl lg:text-2xl font-bold">Contact Number</h1>
                    <Button loading={loading} size="small" primary link onClick={onSave}>
                        Save
                    </Button>
                </HeaderContainer> */}

                    <div className="mb-5">
                        {/* ----- phone 1 ----- */}
                        <div className="text-center mb-6" >

                            <h3 className="font-bold text-2xl " >Enter your cellphone</h3>
                            <p>Please enter the best number to find you for auditions</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3">
                                <PhoneCode>
                                    <PhoneInput enableSearch={true} country={'us'} value={code} onChange={setCode} />
                                </PhoneCode>
                                <InputContainer className="p-2 w-full bg-pure txt-base">
                                    <input type="number" value={parseInt(phone?.number)} onChange={(e) => setPhone((s) => ({ ...s, number: e.target.value }))} className="bg-pure txt-base" />
                                </InputContainer>
                            </div>



                        </div>


                    </div>
                    <div className="mt-6 mb-6">
                        <input type="checkbox" checked id="terms" />
                        <label htmlFor="terms" className="text-sm sm:text-base">
                            <TranslatedText>
                                By entering your number in the online form above, you agree to
                                receive mobile messages, live and autodialed calls, Email or SMS
                                text messages from ExploreTalent at the phone number and email
                                provided even if I am on a National Do Not Call list. Message
                                frequency varies. Message and data rates may apply. I understand
                                this is not a consent to purchase and I may stop the notifications
                                at any time by replying STOP or Text HELP for help. View our
                            </TranslatedText>{" "}
                            <Link legacyBehavior href="/about/privacy" passHref>
                                <LinkText target="_blank" className="underline">
                                    <TranslatedText> Privacy Policy</TranslatedText>
                                </LinkText>
                            </Link>{" "}
                            and{" "}
                            <Link legacyBehavior href="/about/agreement" passHref>
                                <LinkText target="_blank" className="underline">
                                    <TranslatedText> SMS Terms</TranslatedText>
                                </LinkText>
                            </Link>
                            .
                        </label>
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <Button loading={loading} size="large" primary onClick={onSave}>
                            Save
                        </Button>
                        <Button primary outlined onClick={() => router.push(`/${profile.talentlogin}`)}>
                            I'll do it later
                        </Button>
                    </div>
                </div>
            </div>
        </Layout>

    );
}

const InputContainer = styled.div` 
height: 46px; 
border: 1px solid #cacaca;
border-radius: 4px;

input {
    height: 100%;
    width: 100%;
    outline: none;
  }
`;

const Code = styled.div`
  width: 10%;
  border: 1px solid ${(p: any) => p.theme.primary};
  border-radius: 5px;
  height: 100%;
  padding: 0.5rem;
  background: #fff;

  input {
    width: 100%;
    text-align: center;
  }

  input:focus,
  input:active {
    outline: none;
  }
`;

export const PhoneCode = styled.div`
  background: ${(p) => p.theme.pure};
  display: flex;
  color: ${(p) => p.theme.base};
  border-radius: 5px;
  text-align: left;

  input {
    pointer-events: none;
  }
  
  display: block;
  
  .form-control {
    background: ${(p) => p.theme.pure};
    height: 46px !important;
    width: 100px !important;
    margin: 0;
  }
  
  .react-tel-input {
    height: 46px;
    width: 100px;
  }
  
  .selected-flag {
    background: ${(p) => p.theme.pure};
  }
  
  .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
    background: ${(p) => p.theme.pure};
  }
  
  .country-list  {
    background: ${(p) => p.theme.pure};
  }
  
  .react-tel-input .country-list .country:hover {
    background: ${(p) => rgba(p.theme.paper, 0.5)};
  }

  .react-tel-input .country-list .country.highlight {
    background: ${(p) => rgba(p.theme.paper, 0.5)};
  }
  
  .react-tel-input .flag-dropdown.open .selected-flag {
  background: ${(p) => p.theme.pure};

}
  }
`;

