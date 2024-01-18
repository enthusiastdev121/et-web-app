import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { LinkText } from "@/styles/Link.styled";
import Button from "components/Button";
import { ContactWrapper } from "components/StyledWrappers";
import toast from "react-hot-toast";
import { rgba } from "polished";
import { useAuth } from "context/AuthContext";
import { storeJoinAgreementApi } from "network/apis/ownProfile";
import TranslatedText from "components/TranslatedText";

export default function Phone({ setData, isChild, height, setActiveCall }) {
  const router = useRouter();
  const [value, setValue] = useState();
  const [code, setCode] = useState("1");
  const [phone, setPhone] = useState({
    number: "",
  });
  const [checked, setChecked] = useState(false);

  const { token } = useAuth();

  const formSubmit = (e) => {
    if (!checked) {
      toast.error('Please check and agree with the "Terms of Use" to continue');
      return;
    }

    e.preventDefault();

    if (gtag) {
      gtag("event", "conversion", {
        send_to: "AW-1072495487/DzxZCKvJ9JEYEP_2s_8D",
        event_callback: (s) => {
          console.log("PPP", s);
        },
      });
    }

    setActiveCall(1);
    setData((data) => ({
      ...data,
      code: code,
      phone: phone.number,
    }));

    setTimeout(() => {
      if (isChild) {
        document.getElementById("kidEeyeColor").classList.remove("hidden");
        router.push("#kidEeyeColor");
      } else {
        document.getElementById("eyeColor").classList.remove("hidden");
        router.push("#eyeColor");
      }
    }, 1);
  };

  useEffect(() => {
    const hitAgreement = async () => {
      try {
        let tt = "";
        const d = localStorage.getItem("creds");

        if (d) {
          tt = JSON.parse(d)?.token;
        }

        const res = await storeJoinAgreementApi({ token: token || tt });
      } catch (err) {
        console.log("Err", err);
      }
    };

    if (checked) {
      hitAgreement();
    }
  }, [checked, token]);

  return (
    <div
      className="padding text-center min-h-screen lg:flex flex-col items-center justify-center"
      style={{ minHeight: height }}
    >
      <h1 className="font-bold text-3xl sm:text-5xl mb-5">
        <TranslatedText>
          {" "}
          {isChild ? "Enter guardian's cellphone" : "Enter your cellphone"}
        </TranslatedText>
      </h1>
      <p className="mb-10">
        <TranslatedText>
          Please enter the best number to find you for Auditions.
        </TranslatedText>
      </p>

      <Form>
        <div
          className="flex items-center gap-3"
          style={{ maxWidth: 400, margin: "auto" }}
        >
          <PhoneCode>
            <PhoneInput
              enableSearch={true}
              country={"us"}
              value={code}
              onChange={setCode}
            />
          </PhoneCode>
          <InputContainer className="p-2 w-full bg-pure txt-base">
            <input
              type="number"
              required
              value={parseInt(phone?.number)}
              onChange={(e) =>
                setPhone((s) => ({ ...s, number: e.target.value }))
              }
              className="bg-pure txt-base"
            />
          </InputContainer>
        </div>

        <div className="self-start mt-5" style={{ marginLeft: 1 }}>
          <Button primary onClick={formSubmit}>
            <TranslatedText> Continue</TranslatedText>
          </Button>
        </div>

        <div className="mt-10">
          <input
            type="checkbox"
            required
            onChange={() => setChecked(!checked)}
            id="terms"
          />
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
      </Form>
    </div>
  );
}

// const InputContainer = styled.div`
//   border: 1px solid ${(props) => props.theme.primary};
//   border-radius: 5px 0 0 5px;

//   input {
//     background-color: ${(props) => props.theme.pure};
//   }
// `;

export const PhoneCode = styled.div`
  background: ${(p) => p.theme.pure};
  display: flex;
  color: ${(p) => p.theme.base};
  // border: 1px solid #DFDFDF;
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

const Select = styled.select`
  border: 1px solid ${(props) => props.theme.primary};
`;

const Submit = styled.input`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0 5px 5px 0;
`;

const Form = styled.form`
  .react-tel-input .country-list {
    max-height: 270px;
  }
`;

export const InputContainer = styled.div`
  // border: 1px solid ${(props) => props.theme.primary};
  border: 2px solid #dfdfdf;
  border: 1px solid #cacaca;
  border-radius: 5px;
  height: 46px;
  // box-shadow: 0 0 1px #777;

  input {
    height: 100%;
    width: 100%;
    outline: none;
  }
`;

{
  /* <form
  className="w-full lg:w-4/6 flex flex-col "
  onSubmit={formSubmit}
  required
  >
  <div className="flex">
  <InputContainer className="w-3/5">
  <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        className="h-full country-code-input px-4 bg-pure"
        required
        />
        </InputContainer>
        
        <Submit
        type="submit"
        value="Continue"
        className="md:px-5 py-2 font-semibold xl:px-8 xl:py-4 text-center w-2/5 ml-auto cursor-pointer text-white"
        />
        </div>
        
        <div className="mt-10">
    <input type="checkbox" required />
    <span>
      {" "}
      I agree to receive live and autodialed calls, Email or SMS text
      messages from ExploreTalent at the phone number and email provided
      even if I am on a National Do Not Call list. I understand this is
      not a consent to purchase and I may stop the notifications at any
      time by replying STOP to cancel. By Continuing, I also Agree to the{" "}
      <Link href="/about/agreement" passHref>
      <LinkText className="underline">Terms of Use</LinkText>
      </Link>
    </span>
    </div>
    </form> */
}

{
  /* <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row">
    <ContactWrapper>
      <PhoneInput country={"us"} value={value?.code} onChange={setCode} />
    </ContactWrapper>
    <InputContainer className="bg-pure">
      <input
        type="number"
        value={parseInt(phone?.number)}
        onChange={(e) =>
          setPhone((s) => ({ ...s, number: e.target.value }))
        }
      />
    </InputContainer>
  </div>
  
  <div className="self-start mt-5" style={{ marginLeft: 1 }}>
    <Button primary onClick={formSubmit}>
      Continue
    </Button>
     </div> */
}
