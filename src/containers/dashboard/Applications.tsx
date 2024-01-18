import { ApplicationContainer } from "./Dashboard.styled";
import { PrimaryBtnOutline } from "@/styles/Btn.styled";

export default function Application() {
  return (
    <ApplicationContainer className="boxShadow py-5 rounded-lg h-full txt-base">
      <div className="pb-3 border-b-2 px-5">
        <h2 className="text-lg font-semibold">Applications</h2>
        <nav></nav>
      </div>

      <ul className="mb-5 text-xs flex flex-col justify-between">
        <li className="flex flex-col md:flex-row items-start justify-between my-5 mx-5 border-b-2 pb-5 unread">
          <div className="">
            <h3 className="text-lg font-semibold mb-3">
              &lsquo;Savage Lands&rsquo;: SWEET HONEY
            </h3>
            <p>
              Application submitted on: 03/11/2020, Production Expired on:
              03/26/2020
            </p>
          </div>

          <PrimaryBtnOutline className="btn mt-5 lg:mt-0">
            Go&nbsp;to&nbsp;Application
          </PrimaryBtnOutline>
        </li>

        <li className="flex flex-col md:flex-row items-start justify-between my-5 mx-5 border-b-2 pb-5 unread">
          <div className="">
            <h3 className="text-lg font-semibold mb-3">
              &lsquo;Savage Lands&rsquo;: SWEET HONEY
            </h3>
            <p>
              Application submitted on: 03/11/2020, Production Expired on:
              03/26/2020
            </p>
          </div>

          <PrimaryBtnOutline className="btn mt-5 lg:mt-0">
            Go&nbsp;to&nbsp;Application
          </PrimaryBtnOutline>
        </li>

        <li className="flex flex-col md:flex-row items-start justify-between my-5 mx-5 border-b-2 pb-5 unread">
          <div className="">
            <h3 className="text-lg font-semibold mb-3">
              &lsquo;Savage Lands&rsquo;: SWEET HONEY
            </h3>
            <p>
              Application submitted on: 03/11/2020, Production Expired on:
              03/26/2020
            </p>
          </div>

          <PrimaryBtnOutline className="btn mt-5 lg:mt-0">
            Go&nbsp;to&nbsp;Application
          </PrimaryBtnOutline>
        </li>
      </ul>
    </ApplicationContainer>
  );
}
