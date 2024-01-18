import { PrimaryBtn } from "@/styles/Btn.styled";
import React, { useState } from "react";
import { RiGenderlessFill } from "react-icons/ri";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import { ChipBox, HeadingSmall, SlideHeading } from "./Styles";

export default function Dob({
    onScreenChange,
    onUpdate,
    value,
    prevSlide,
    nextSlide,
    setCurrentSlide,
    onNext,
}: any) {
    const [date, setDate] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2001);

    const increment = (setState: any) => {
        setState((state) => state + 1);
    };
    const decrement = (setState: any) => {
        setState((state) => state - 1);
    };

    const incrementDate = () => {
        if (month === 1) date < 31 && setDate((date) => date + 1);
        else if (month === 2) date < 29 && setDate((date) => date + 1);
        else if (month === 3) date < 31 && setDate((date) => date + 1);
        else if (month === 4) date < 30 && setDate((date) => date + 1);
        else if (month === 5) date < 31 && setDate((date) => date + 1);
        else if (month === 6) date < 30 && setDate((date) => date + 1);
        else if (month === 7) date < 31 && setDate((date) => date + 1);
        else if (month === 8) date < 31 && setDate((date) => date + 1);
        else if (month === 9) date < 30 && setDate((date) => date + 1);
        else if (month === 10) date < 31 && setDate((date) => date + 1);
        else if (month === 11) date < 30 && setDate((date) => date + 1);
        else if (month === 12) date < 31 && setDate((date) => date + 1);
    };
    return (
        <Frame>
            <div className="grow flex items-center content">
                <div>
                    <SlideHeading>Enter you birthdate</SlideHeading>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mb-10">
                        <InputBox
                            text="Date"
                            state={date}
                            onClickIncrement={incrementDate}
                            onClickDecrement={() => date > 1 && decrement(setDate)}
                        />
                        <InputBox
                            text="Month"
                            state={month}
                            onClickIncrement={() => month < 12 && increment(setMonth)}
                            onClickDecrement={() => month > 1 && decrement(setMonth)}
                        />
                        <InputBox
                            text="Year"
                            state={year}
                            onClickIncrement={() => increment(setYear)}
                            onClickDecrement={() => year > 0 && decrement(setYear)}
                        />
                    </div>

                    <PrimaryBtn
                        className="btn"
                        onClick={() => {
                            onUpdate({
                                dob: {
                                    date: date,
                                    month: month,
                                    year: year,
                                }
                            })

                            setCurrentSlide(nextSlide);
                            onNext({date, month, year});
                        }
                        }
                    >
                        Continue{" "}
                    </PrimaryBtn>

                </div>
            </div>
            <BottomBar
                prevSlide={prevSlide}
                nextSlide={nextSlide}
                width={30}
                setCurrentSlide={setCurrentSlide}
                allFilled={value.dob !== undefined}
                warningText={"Please enter your birthdate"}
            />
        </Frame>
    );
}

function InputBox({ text, state, onClickIncrement, onClickDecrement }: any) {
    return (
        <div className="">
            <h2 className="text-left text-lg font-semibold mb-2">{text}</h2>
            <div className="grid grid-cols-4 grid-rows-2 text-xl font-semibold">
                <div className="col-span-3 row-span-2 border border-r-0 px-5 py-5 text-center rounded-l-md w-28">{state}</div>
                <div
                    className="col-span-1 border flex justify-center items-center cursor-pointer select-none rounded-tr-md border-b-0"
                    onClick={onClickIncrement}
                >
                    +
                </div>
                <div
                    className="col-span-1 border flex justify-center items-center cursor-pointer select-none rounded-br-md"
                    onClick={onClickDecrement}
                >
                    -
                </div>
            </div>
        </div>
    );
}
