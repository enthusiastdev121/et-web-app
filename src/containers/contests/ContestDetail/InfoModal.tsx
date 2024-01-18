import { CgClose } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { GoCalendar } from "react-icons/go";

import { PrimaryBtn } from "@/styles/Btn.styled";
import { InfoModalContainer } from "./ContestDetail.styled";
import { formatDate } from "@/utils/helper";

export default function InfoModal({ handleClose, prize, rules, endTime }: any) {
  const ruleArray = rules.split("\r\n");

  return (
    <InfoModalContainer className="rounded-lg overflow-y-scroll no-scroll">
      <div className="header border-b-2 py-5 px-10 flex items-center justify-between">
        <h2 className="text-2xl">Contest information</h2>
        <CgClose className="text-xl cursor-pointer" onClick={handleClose} />
      </div>
      <div className="content ">
        <div className="py-5 px-10">
          <h3 className="mb-5 font-semibold text-xl">Contest Rules</h3>
          <div>
            <ul>
              {ruleArray.map((rule: any, index: number) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pb-5 px-10">
          <h3 className="mb-5 font-semibold text-xl">Prizes</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: prize,
            }}
          />
        </div>

        <div className="pb-5 px-10">
          <h3 className="flex items-center">
            <span className="icon">
              <GoCalendar />
            </span>
            End&apos;s on
          </h3>
          <div className="date">{formatDate(endTime)}</div>
        </div>
      </div>
      <div className="footer py-5 px-10">
        <PrimaryBtn className="btn" onClick={handleClose}>
          Close &rarr;
        </PrimaryBtn>
      </div>
    </InfoModalContainer>
  );
}

{
  /* <ul>
            <li>
              <span>
                <TiTick />
              </span>
              You must be smilling in the picture
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              You must be smilling in the picture
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              You must be smilling in the picture
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              You must be smilling in the picture
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              You must be smilling in the picture
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              You must be smilling in the picture
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              You must be smilling in the picture
            </li>
            <li>
              <span>
                <TiTick />
              </span>
              You must be smilling in the picture
            </li>
          </ul> 

          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
            asperiores?
          </p>
          */
}
