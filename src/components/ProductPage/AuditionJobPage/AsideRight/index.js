import Image from "next/image";

import { LikeBtn, GreenBtn, H3 } from "./AsideRight.styled";
import { PrimaryBtnLight, PrimaryBtnSingle } from "@/styles/Btn.styled";
import { useAuth } from "context/AuthContext";
import CommunityBuzz from "../../../../containers/CommunityBuzz";

export default function AsideRight() {
  const {
    auth: { authenticated },
  } = useAuth();

  return (
    <div className="lg:w-60 mx-auto">
      {authenticated && (
        <>
          <div
            className="flex items-center mt-10 lg:mt-0 border-t-2 pt-5 border-slate-100 lg:border-t-0 lg:p-0 mb-5 mx-auto justify-center"
            style={{ marginTop: "2.5rem" }}
          >
            <Image
              src="/svg/facebook-rounded.svg"
              alt="facebook"
              height={27}
              width={27}
            />

            <LikeBtn className="rounded-md py-1 px-4 flex items-center ml-3">
              <Image
                src="/svg/like.svg"
                alt="facebook"
                height={20}
                width={20}
              />{" "}
              <span className="ml-2">Like 4.7M</span>
            </LikeBtn>
          </div>

          <div
            className="px-5 py-5 text-center rounded-md mb-5"
            style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.15)" }}
          >
            <H3 className="text-3xl font-extrabold mb-5">
              Get Free Access to <span className="text-xl">Talent Academy</span>{" "}
            </H3>
            <GreenBtn className="btn">Upgrade to PRO</GreenBtn>
          </div>

          <div
            className="px-5 py-5 text-center rounded-md mb-5"
            style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="flex justify-between mb-10">
              <div>
                <H3 className="font-bold">Role/Job Cart</H3>
                <p className="text-xs">No Submission Yet</p>
              </div>

              <PrimaryBtnSingle className="text-xs">View all</PrimaryBtnSingle>
            </div>
            <PrimaryBtnLight className="btn w-full">View All</PrimaryBtnLight>
          </div>
        </>
      )}
      <div className="text-center mt-5">
        <Image
          src="/images/aside-r-img.png"
          alt="casting talent"
          height={450}
          width={250}
          style={{ width: "100%", height: "100%" }}
          className="rounded"
          priority
        />
      </div>
      <CommunityBuzz />
    </div>
  );
}
