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
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
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

export default function EditContact() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user, token } = useAuth();
  const { setProfile, profile } = useProfileStore();
  const [phone, setPhone] = useState({
    code: "1",
    number: "",
  });
  const [phone2, setPhone2] = useState({
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

        let dat: object = {
          cell: code === '1' ? phone.number : code + " " + phone.number,
        };
        if (code2 && phone2.number) {
          dat = { ...dat, ephone: code2 === '1' ? phone.number : code2 + " " + phone2.number };
        }

        const res = await updateProfileDetailApi({
          token,
          talentnum: profile?.talentnum.toString(),
          raw: { ...dat, sms_ok: 1, event: 'phone_update' },
        });
        setLoading(false);
        setProfile((s) => ({
          ...s,
          phone: dat.cell || "",
          phone2: dat.ephone || ""
        }));
        router.push('/profile/edit');
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
    if (profile.phone2) {
      setPhone2((s) => ({
        ...s,
        ...getCodeNumberPhone(profile.phone2)

      }));
      setCode2(getCodeNumberPhone(profile.phone2).code)
    }
  }, [profile.phone, profile.phone2]);

  useEffect(() => {
    console.log("value is: ", phone, phone2);
  }, [phone, phone2]);

  console.log("PHONE REF", code, code2)

  return (
    <ParentContainer className="padding-small">
      <ToastContainer className="Toastify" />
      <div className="padding-x" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort className="text-3xl arrow" onClick={() => {
            router.push(`/${profile.talentlogin}`)
          }} />
          <h1 className="text-xl lg:text-2xl font-bold">Contact Number</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* ----- phone 1 ----- */}

          <div>
            <div className="mb-1 txt-secondary font-medium">Contact number</div>
            <div className="flex items-center gap-3">
              <PhoneCode>
                <PhoneInput enableSearch={true} country={'us'} value={code} onChange={setCode} />
              </PhoneCode>
              <InputContainer className="p-2 w-full bg-pure txt-base">
                <input type="number" value={parseInt(phone?.number)} onChange={(e) => setPhone((s) => ({ ...s, number: e.target.value }))} className="bg-pure txt-base" />
              </InputContainer>
            </div>

            <div className="mb-1 mt-5 txt-secondary font-medium">Alternate contact number</div>
            <div className="flex items-center gap-3">
              <PhoneCode>

                <PhoneInput enableSearch={true} country={'us'} value={code2} onChange={setCode2} />

                {/* {phone2.code &&
                  <PhoneInput enableSearch={true} value={(phone2?.code).toString() || '91'} onChange={setCode2} />} */}

              </PhoneCode>
              <InputContainer className="p-2 w-full bg-pure txt-base">
                <input type="number" value={parseInt(phone2?.number)} onChange={(e) => setPhone2((s) => ({ ...s, number: e.target.value }))} className="bg-pure txt-base" />
              </InputContainer>
            </div>

            {/* ----------------------------------------------------------- */}
          </div>

          {/* note */}
          <p className="mt-5 text-sm" style={{ color: "#3C3C4399" }}>
            <strong>Recommended:</strong> Casting professionals may need to call or text you for urgent castings (only casting professionals whose listings you applied to can see your number).
          </p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Button primary outlined onClick={() => router.push(`/${profile.talentlogin}`)}>
            Cancel
          </Button>
          <Button loading={loading} size="large" primary onClick={onSave}>
            Save
          </Button>
        </div>
      </div>
    </ParentContainer>
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

