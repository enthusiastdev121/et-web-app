import { LinkText } from '@/styles/Link.styled';
import { validateEmail } from '@/utils/helper';
import Spinner from 'components/Spinner';
import TranslatedText from 'components/TranslatedText';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { lighten } from 'polished';
import React, { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

export default function ParentInfo({ height, setData, isChild, setProcessLogin, mailLoading, btnDisabled }:
    { height: number, setData: any, isChild: boolean, setProcessLogin: any, mailLoading: boolean, btnDisabled: boolean }) {
    const router = useRouter()
    const fnameRef = useRef(null)
    const lnameRef = useRef(null)
    const emailRef = useRef(null)
    const cfname = useRef(null)
    const [checked, setChecked] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!checked) {
            toast.error('Please confirm you are 13 years of age or older.');
            return;
        }
        setData((data) => ({
            ...data,
            gfname: fnameRef.current?.value,
            glname: lnameRef.current?.value,
            gemail: emailRef.current?.value,
            fName: cfname.current?.value
        }));

        if (validateEmail(emailRef.current?.value) === null) {
            toast.error("Please enter a valid email");
        } else {
            setData((data) => ({ ...data, email: emailRef.current?.value }));
            setProcessLogin(true);
        }

        // document.getElementById("guardianCell").classList.remove("hidden");
        // router.push("#guardianCell");
    }

    return (
        <Root
            className="padding text-center min-h-screen flex flex-col items-center justify-center"
            style={{ minHeight: height }}
        >
            <h1 className="font-bold text-3xl sm:text-5xl mb-5">
                <TranslatedText>  Enter guardian&apos;s information</TranslatedText>
            </h1>

            <form className='my-10' onSubmit={onSubmit}>
                <div className="grid grid-cols-3 gap-2 items-center">
                    <label htmlFor="childFname"> <TranslatedText>Child&apos;s First Name</TranslatedText></label>
                    <Input type="text" required id="childFname" ref={cfname} />

                    <label htmlFor="fname"> <TranslatedText>Gaurdian&apos;s First Name</TranslatedText></label>
                    <Input type="text" required id="fname" ref={fnameRef} />

                    <label htmlFor="lname"> <TranslatedText>Gaurdian&apos;s Last Name</TranslatedText></label>
                    <Input type="text" required id="lname" ref={lnameRef} />

                    <label htmlFor="email"> <TranslatedText>Gaurdian&apos;s Email</TranslatedText></label>
                    <Input type="email" required id="email" ref={emailRef} />
                </div>

                <div className="flex items-center justify-center gap-2 mb-10 text-[13px] font-medium mt-5">
                    <input type="checkbox" id="aboveThirteen" onChange={() => setChecked(!checked)} />
                    <label htmlFor="aboveThirteen"> <TranslatedText>I confirm that I am over 13 years old and agree to</TranslatedText> <Link href="/about/kidsprivacy" passHref>
                        <LinkText target="_blank" className="underline">
                            <TranslatedText>Kids Privacy Policy</TranslatedText>
                        </LinkText>
                    </Link></label>
                </div>

                <button
                    disabled={mailLoading}
                    className="md:px-5 py-2 text-sm sm:text-base font-semibold xl:px-8 xl:py-4 text-center bg-primary rounded w-1/4 cursor-pointer text-white"
                >
                    {mailLoading ? (
                        <div className="flex items-center justify-center w-full">
                            <Spinner />
                        </div>
                    ) : (
                        <TranslatedText>Continue</TranslatedText>
                    )}
                </button>
            </form>
        </Root>
    )
}

const Root = styled.div`
`

const Input = styled.input`
  border: 1px solid ${(props) => lighten(0.2, props.theme.primary)};
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