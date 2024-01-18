import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getNearestMarketsApi } from "network/apis/ownProfile";
import TranslatedText from "components/TranslatedText";

export default function Fname({ setData, isChild, data, height }) {
  const router = useRouter();
  const [fname, setFName] = useState("");
  const [market, setMarket] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    setData((data) => ({ ...data, fName: fname }));

    document.getElementById(isChild ? "guard-fname" : "email").classList.remove("hidden");

    setTimeout(() => {
      router.push(isChild ? "#guard-fname" : "#email");
    }, 1);
  };

  useEffect(() => {
    const getNearestMarkets = async () => {
      try {
        const res = await getNearestMarketsApi({ lat: data.lat, lon: data.lon });
        setMarket(res.length > 0 ? res[0].market : "");
        setData((data) => ({ ...data, selectedMarkets: res }));
      } catch (err) {
        console.log("ERR", err);
      }
    };

    getNearestMarkets();
  }, [data.lat, data.lon]);

  return (
    <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: height }}>
      <h1 className="font-bold text-3xl sm:text-5xl mb-5">
        {" "}
        <TranslatedText>{isChild ? "Enter your child's first name" : "Enter your first name"}</TranslatedText>
      </h1>
      {market.length > 0 && (
        <p className="mb-10 txt-primary font-medium">
          {" "}
          <TranslatedText>You have matched auditions around</TranslatedText> <TranslatedText>{market}.</TranslatedText>
        </p>
      )}
      <form className="w-full lg:w-4/6 flex" onSubmit={formSubmit}>
        <Input type="text" onChange={(e) => setFName(e.target.value)} className="py-2 xl:py-4 w-3/4 pl-5 bg-paper" required />
        <Submit type="submit" value="Continue" className="px-1 text-sm sm:text-base md:px-5 py-2 font-semibold xl:px-8 xl:py-4 text-center  w-1/4 cursor-pointer text-white" />
      </form>
    </div>
  );
}

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px 0 0 5px;
`;

const Submit = styled.input`
  background-color: ${(props) => props.theme.primary} !important;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0 5px 5px 0;
`;
