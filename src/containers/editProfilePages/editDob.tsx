import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { updatePhysicalAttrsApi, updateProfileDetailApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
import Link from "next/link";
import styled from "styled-components";
import Button from "components/Button";
import { ContactWrapper } from "components/StyledWrappers";

export default function EditDob() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { user, token } = useAuth();
    const { setProfile, profile } = useProfileStore();
    const [value, setValue] = useState();
    const [date, setDate] = useState(profile?.dob?.day);
    const [month, setMonth] = useState(profile?.dob?.month);
    const [year, setYear] = useState(profile?.dob?.year);


    const increment = (setState: any) => {
        setState((state: number) => state + 1);
    };
    const decrement = (setState: any) => {
        setState((state: number) => state - 1);
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

console.log('dob', profile?.dob)

    const onSave = async () => {
        try {
            setLoading(true);

            let kkk = {
                dobyyyy: year,
                dobmm: month,
                dobdd: date,
            };
            const res = await updatePhysicalAttrsApi(
                token,
                JSON.stringify({ ...kkk })
            );

            setLoading(false);
            setProfile((s) => ({
                ...s,
                dob: {
                    year,month, day: date
                }
            }));
            // setProfile((s) => ({
            //     ...s,
            //     dob: new Date(
            //         Number(year),
            //         Number(month),
            //         Number(date)
            //     ).toString()
            // }));
            router.back();
        } catch (err) {
            setLoading(false);
            console.log("Err", err);
        }
    };

    console.log(profile.dob,"profile");
    
    return (
        <ParentContainer className="padding-small">
            <div className="padding-x" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <HeaderContainer>
                    <BsArrowLeftShort className="text-3xl arrow" onClick={() => router.back()} />
                    <h1 className="text-xl lg:text-2xl font-bold">Date of birth</h1>
                    <Button loading={loading} size="small" primary link onClick={onSave}>
                        Save
                    </Button>
                </HeaderContainer>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mb-10">
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

                <div className="flex items-center justify-center gap-5">
                    <Button primary outlined onClick={() => router.back()}>
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

function InputBox({ text, state, onClickIncrement, onClickDecrement }: any) {
    return (
        <div className="">
            <h2 className="text-left text-lg font-semibold mb-2">{text}</h2>
            <div className="grid grid-cols-4 grid-rows-2 text-xl font-semibold w-full bg-pure">
                <div className="col-span-3 row-span-2 border border-r-0 px-5 py-5 text-center rounded-l-md w-full">{state}</div>
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

const InputContainer = styled.div`
  // border: 1px solid ${(props) => props.theme.primary};
  border: 2px solid #dfdfdf;
  border-radius: 5px;
  height: 46px;
  box-shadow: 0 0 1px #dfdfdf;

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
