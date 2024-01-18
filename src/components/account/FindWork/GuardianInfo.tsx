import TranslatedText from 'components/TranslatedText';
import { useRouter } from 'next/router';
import { lighten } from 'polished';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import styled from 'styled-components';
import { InputContainer, PhoneCode } from './Phone';

export default function GuardianInfo({ height, setData, setActiveCall }: { height: number, setData: any, setActiveCall: any }) {
    const router = useRouter()
    const fnameRef = useRef(null)
    const lnameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const codeRef = useRef(null)
    const [checked, setChecked] = useState(false);
    const [code, setCode] = useState("1");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!checked) {
            toast.error('Please confirm you are 13 years of age or older.');
            return;
        }
        setActiveCall(4)
        setData((data) => {
            const phone = code.includes("+") ?
                code.slice(1) === "1" ?
                    phoneRef.current?.value :
                    code.slice(1) + " " + phoneRef.current?.value :
                code === "1" ?
                    phoneRef.current?.value :
                    code + " " + phoneRef.current?.value;

            return {
                ...data,
                gfname: fnameRef.current?.value,
                glname: lnameRef.current?.value,
                gemail: emailRef.current?.value,
                gphone: phone
            }
        }
        );
        document.getElementById("username").classList.remove("hidden");
        router.push("#username");
    }

    return (
        <Root
            className="padding text-center min-h-screen flex flex-col items-center justify-center"
            style={{ minHeight: height }}
        >
            <h1 className="font-bold text-3xl sm:text-5xl mb-5">
                <TranslatedText>Enter guardian&apos;s information</TranslatedText>
            </h1>

            <form className='my-10' onSubmit={onSubmit}>
                <div className="grid grid-cols-3 gap-2 items-center">
                    <label htmlFor="fname"> <TranslatedText>First name</TranslatedText></label>
                    <Input type="text" required id="fname" ref={fnameRef} placeholder="John" />

                    <label htmlFor="lname"> <TranslatedText>Last name</TranslatedText></label>
                    <Input type="text" required id="lname" ref={lnameRef} placeholder="Doe" />

                    <label htmlFor="email"> <TranslatedText>Email</TranslatedText></label>
                    <Input type="email" required id="email" ref={emailRef} placeholder="johndoe@gmail.com" />

                    <label htmlFor="phone"> <TranslatedText>Phone</TranslatedText></label>

                    <PhoneContianer>
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
                                ref={phoneRef}
                                className="bg-pure txt-base"
                                placeholder="8005974500"
                            />
                        </InputContainer>
                    </PhoneContianer>
                    {/* <PhoneContianer>
                        <input type="number" required id="cell" ref={codeRef} placeholder="+1" />
                        <input type="number" required id="phone" ref={phoneRef} placeholder="8005974500" />
                    </PhoneContianer> */}
                </div>

                <div className="flex items-center justify-center gap-2 mb-10 text-sm font-medium mt-5">
                    <input type="checkbox" id="aboveThirteen" checked={checked} onChange={() => setChecked(!checked)} />
                    <label htmlFor="aboveThirteen" onClick={() => {
                        setChecked(!checked)
                        console.log("data clicked yay")
                    }} className='opacity-80'> <TranslatedText>I confirm that I am 13 years of age or older.</TranslatedText></label>
                </div>

                <Submit type='submit' className='btn'> <TranslatedText>Continue</TranslatedText></Submit>
            </form>
        </Root>
    )
}

const Root = styled.div`
    form {
        width: 80%;
        max-width: 600px;
    }
`

const Input = styled.input`
  border: 1px solid ${(props) => lighten(0.2, props.theme.primary)};
  border: 1px solid #cacaca;
  border-radius: 5px;
  padding: 5px;
  min-width: 300px;
  grid-column: span 2 / span 2;
  background-color: transparent;
`;

const Submit = styled.button`
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px ;
  color: #fff;
`;

const PhoneContianer = styled.div`
    // border: 1px solid ${(props) => lighten(0.2, props.theme.primary)};
    // border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    // overflow: hidden;
    gap: 5px;
    grid-column: span 2 / span 2;
    
    // input {
    //     padding: 5px;
    // }

    // input:first-child {
    //     border-right: 1px solid ${(props) => lighten(0.2, props.theme.primary)};
    //     width: 15%;
    // }

    // input:last-child {
    //     width: 85%;
    // }
`