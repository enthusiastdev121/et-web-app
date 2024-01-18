import { PrimaryBtn, PrimaryBtnOutline } from "@/styles/Btn.styled";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import styled from "styled-components";
import { AllDataD } from "types/telemarketing";
import { motion } from "framer-motion";

const animate = {
    hidden: {

        // opacity: 0, scale: 0.7

    },
    show: {
        // opacity: 1, scale: 1,
        // transition: {
        //     type: "spring", stiffness: 70,
        //     transition: { type: "spring", stiffness: 70 }
        // }
    },

}

export function TextInput(props: { title: string, onChange: (e: any) => any; value: any; className: string }) {
    const { title, className, onChange, value } = props;
    return (
        <Focus variants={animate} initial="hidden" animate="show" className="flex flex-col">
            <div className="input-title text-xl mb-3">{title}</div>
            <input
                {...props}
                onChange={
                    e => {
                        onChange(e.target.value)
                    }
                }
                value={value}
                className={`${className} rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none`}
            />
        </Focus>
    );
}
export default function Input(props: any) {
    const { title, allData, setAllData, selectedValue, className }: { title: string, allData: string, setAllData: Dispatch<SetStateAction<AllDataD>>, selectedValue: string, className: string } = props;
    return (
        <Focus variants={animate} initial="hidden" animate="show" className="flex flex-col">
            <div className="input-title text-xl mb-3 text-center">{title}</div>
            <input onChange={
                e => {
                    setAllData(
                        (s: any) => {
                            switch (selectedValue) {
                                case 'zipCode':
                                    return { ...s, zipCode: e.target.value }
                                case 'firstName':
                                    return { ...s, firstName: e.target.value }
                                default:
                                    return { ...s };
                            }
                        }
                        // ({ ...s, zipCode: e.target.value })
                    )
                }
            }
                value={allData}
                className={`${className} rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none`} />
        </Focus>
    );
}
export function Textarea(props: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
    return (
        <Focus variants={animate} initial="hidden" animate="show">
            <textarea {...props} className={`${props.className} rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none`} />
        </Focus>
    );
}

export function SelectBox(props: any) {
    const { title, allData, setAllData, selectedValue, options, className }: { title: string, allData: string, setAllData: Dispatch<SetStateAction<AllDataD>>, selectedValue: string, options: string[], className: string } = props;
    // console.log(allData);

    return (
        <Focus variants={animate} initial="hidden" animate="show" className="flex flex-col">
            <div className="input-title text-xl mb-3 text-center">{title}</div>
            <select
                onChange={
                    e => {
                        setAllData(
                            (s: any) => {

                                switch (selectedValue) {
                                    case 'insured':
                                        return { ...s, insured: e.target.value }
                                    case 'insurance':
                                        return { ...s, insurance: e.target.value }
                                    case 'carInsurance':
                                        return { ...s, carInsurance: e.target.value }
                                    case 'licence':
                                        return { ...s, licence: e.target.value }
                                    case 'DUI':
                                        return { ...s, DUI: e.target.value }
                                    case 'rent':
                                        return { ...s, rent: e.target.value }
                                    default:
                                        return { ...s };
                                }
                            }
                        )
                    }
                }
                value={allData}

                className={`${className} rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none select`}

            >
                <option value="" className="option">-- Select --</option>

                {
                    options.map((option) => {
                        return (
                            <option key={option} value={option} className="option">{option}</option>
                        )
                    })
                }

            </select>

        </Focus >
    );
}

export function SelectInput(props: { title: string, value: string; onChange: (e: any) => any; options: string[], className: string }) {
    const { title, value, onChange, options, className } = props;
    // console.log(allData);

    return (
        <Focus variants={animate} initial="hidden" animate="show" className="flex flex-col">
            <div className="input-title text-xl mb-3 text-center">{title}</div>
            <select
                onChange={e => onChange(e.target.value)}
                value={value}
                className={`${className} rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none select`}

            >
                <option value="" className="option">-- Select --</option>

                {
                    options.map((option) => {
                        return (
                            <option key={option} value={option} className="option">{option}</option>
                        )
                    })
                }

            </select>

        </Focus >
    );
}

export function RadioBox(props: any) {
    const { title, allData, setAllData, options, className }: { title: string, allData: number, setAllData: Dispatch<SetStateAction<AllDataD>>, options: number[], className: string } = props;
    return (
        <Focus variants={animate} initial="hidden" animate="show" className="flex flex-col">

            <div className="input-title text-xl mb-3 text-center">{title}</div>
            <div className="flex gap-8">
                {
                    options.map((option) => {
                        return (
                            <span key={option} className="flex gap-1 items-center">
                                <label htmlFor="carQuantity" className="text-xl">{option}</label>
                                <input
                                    onChange={
                                        e => {
                                            setAllData(
                                                (s: any) => ({ ...s, carQuantity: option })
                                            )
                                        }
                                    }
                                    type="radio" id="carQuantity" name="cars" value={allData} className={`${className} radio-input rounded-md border-2 px-3 bg-pure text-base transition-all py-2 outline-none`} checked={allData === option} />
                            </span>
                        )
                    })
                }
            </div>
        </Focus>
    );
}

export function ConfirmBox(props: any) {
    const { title, allData, setAllData, selectedValue, className, slide, setSlide }: { title: string, allData: string, setAllData: Dispatch<SetStateAction<AllDataD>>, selectedValue: string, className: string, slide: number, setSlide: any } = props;
    const reject = useRef<any>();
    const accept = useRef<any>();

    const rejectConfirmation = () => {
        setAllData((s: any) => ({ ...s, confirmation: reject.current?.innerText }))
    }
    const acceptConfirmation = () => {
        setAllData((s: any) => ({ ...s, confirmation: accept.current?.innerText }));
        setSlide(slide + 1);
    }

    return (
        <Focus variants={animate} initial="hidden" animate="show" className="flex flex-col">
            <div className="input-title text-xl mb-3 text-center">{title}</div>
            <div className='flex justify-center items-center mt-5 gap-3'>
                <PrimaryBtnOutline className='btn' onClick={rejectConfirmation} ref={reject}>No</PrimaryBtnOutline>
                <PrimaryBtn className='btn' onClick={acceptConfirmation} ref={accept}>Yes</PrimaryBtn>
            </div>
        </Focus>
    );
}

const Focus = styled(motion.div)`
  input:focus, textarea:focus, select:focus {
    border: 2px solid ${(p: any) => p.theme.primary};
  }
  .select {
    /* width: 220px; */
    /* text-align: center; */

    option{
        text-align: inherit;
    }
  }
    .radio-input {
        position: relative;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 100%;

        &::before { 
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background-color: #fff;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        transition: 0.25s ease;
        box-shadow: inset 0 0 0 0.1em #3C76EA;
    }
        &:checked::before{
            box-shadow: inset 0 0 0 0.37em #3C76EA;
        }
    }

  min-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: ${(p: any) => p.theme.abs.yellowLight}; */
  background-color: #e8eefa;
  padding: 2rem;
  /* border: 2px solid ${(p: any) => p.theme.primary}; */
  border-radius: 5px;
  border: 2px solid #d0dcfa;
  /* box-shadow: 0 0px 5px rgba(0,0,0,0.2); */
  @media screen and (max-width: 1050px) {
        min-width: auto;
    }
`