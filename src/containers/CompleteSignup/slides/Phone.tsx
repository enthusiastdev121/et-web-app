import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { SlideHeading } from "./Styles";
import "react-phone-input-2/lib/style.css";
import styled from "styled-components";
import Button from "components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { rgba } from "polished";

export default function Phone({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
  isChild,
  onNext
}: any) {
  const [phone, setPhone] = useState({
    number: value?.phone || "",
  });
  const [code, setCode] = useState(value?.code || "1");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (phone.number === "") {
      toast.warning("Please enter your phone number");
      return;
    }

    onNext({code, phone: phone.number});

    onUpdate({
      code: code,
      phone: phone.number,
    });
    setCurrentSlide(nextSlide);
  };

  return (
    <Frame bannerChangeOne>
      {/* SKIP BUTTON */}
      {/* <button
        className="txt-link font-semibold cursor-pointer self-end mt-5"
        onClick={() => setCurrentSlide(nextSlide)}>Skip</button> */}
      <ToastContainer className="Toastify" />
      <div className="grow flex items-center flex-col justify-center content ">
        <div className="w-full">
          <SlideHeading className="self-start">
            Enter {isChild ? "Guardain's" : "your"} mobile number
          </SlideHeading>

          <Form>
            <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row">
              <ContactWrapper>
                <PhoneInput
                  enableSearch={true}
                  country={"us"}
                  value={value?.code}
                  onChange={setCode}
                />
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
              <Button primary onClick={handleSubmit}>
                Ok
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={20}
        setCurrentSlide={setCurrentSlide}
        allFilled={value.phone !== undefined || value.code !== undefined}
        warningText={"Please enter your phone number"}
      />
    </Frame>
  );
}

const ContactWrapper = styled.div`
  background: ${(p: any) => p.theme.pure};
  display: flex;
  color: ${(p: any) => p.theme.base};
  // border: 1px solid #DFDFDF;
  border-radius: 5px;
  display: block;

  input {
    pointer-events: none;
  }
  
  .form-control {
    background: ${(p: any) => p.theme.pure};
    height: 46px;
    width: 100px;
    margin: 0;
  }
  
  .react-tel-input {
    height: 46px;
    width: 100px;
  }
  
  .selected-flag {
    background: ${(p: any) => p.theme.pure};
  }
  
  .react-tel-input .selected-flag:hover, .react-tel-input .selected-flag:focus {
    background: ${(p: any) => p.theme.pure};
  }
  
  .country-list  {
    background: ${(p: any) => p.theme.pure};
  }
  
  .react-tel-input .country-list .country:hover {
    background: ${(p: any) => rgba(p.theme.paper, 0.5)};
  }

  .react-tel-input .country-list .country.highlight {
    background: ${(p: any) => rgba(p.theme.paper, 0.5)};
  }
  
  .react-tel-input .flag-dropdown.open .selected-flag {
  background: ${(p: any) => p.theme.pure};

}
  }
`;

const InputContainer = styled.div`
  // border: 1px solid ${(props) => props.theme.primary};
  height: 46px;
  // box-shadow: 0 0 1px #dfdfdf;
  width: 100%;
  background-color: ${p => p.theme.pure};
  
  input {
    border: 1px solid #cacaca;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0 15px;
    min-width: 230px;
    background-color: ${p => p.theme.pure};
  }
`;

const Form = styled.form`
.react-tel-input .country-list {
  max-height: 270px;
}

`