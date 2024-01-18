import Button from "components/Button";
import Checkbox from "components/Checkbox";
import Image from "next/image";
import React, { useState } from "react";
import { HeadingSmall } from "./Styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WHITELABELS } from "@/utils/whitelabelConfig";
import { useHost } from "context/HostContext";

export default function Agree({ onAgree }: any) {
  const [agree, setAgree] = useState(false);
  const [accept, setAccept] = useState(false);
  const hostname = useHost()

  return (
    <div className="py-4 h-full text-sm" style={{ lineHeight: "150%" }}>
      <ToastContainer className="Toastify" />

      <div className="text-center">
        <Image src={
          hostname === "exploretalent" ? "/svg/logo.svg" :
            hostname === "auditions" ? "/images/logoauctions.png" :
              hostname === "talento" ? "/images/talento.png" :
                hostname === "modeling" ? "/svg/modeling_logo.svg" : "/svg/logo.svg"
        }
          width={hostname === "exploretalent" ? 180 :
            hostname === "auditions" ? 152 :
              hostname === "talento" ? 100 :
                hostname === "modeling" ? 146 : 180} height={hostname === "exploretalent" ? 40 :
                  hostname === "auditions" ? 26 :
                    hostname === "talento" ? 40 :
                      hostname === "modeling" ? 40 : 40} alt="logo" />
      </div>


      <div className="flex flex-col justify-center gap-6 items-center">
        <div
          className="shadow-sm mx-auto px-10 py-6 mt-10 rounded-lg bg-pure txt-base"
          style={{ maxWidth: 650 }}
        >
          <h2
            className="text-center font-bold text-xl mb-3 mx-auto mt-5"
            style={{ maxWidth: 240 }}
          >
            Let’s start your signup, We’re almost there
          </h2>

          <p>
            When you sign up with Facebook, we set up your account, add your
            Facebook account and newly created exploretalent account. This will
            enable connected experiences that make it easier to do things across
            accounts like logging in with Facebook. Please review and accept
            legal stuff so we can finish the setup.
          </p>

          <div>
            <HeadingSmall>If you sign up with Facebook</HeadingSmall>
            <p>
              We&apos;ll also use your info to improve your profile and get
              discovered by casting directors easily, like name, email, phone
              number, gender, location, ethnicity.
            </p>
          </div>
          <div className="mb-8">
            <HeadingSmall>Even if you sign up with email or phone</HeadingSmall>
            <p>We still use your information per our Data Policy to:</p>

            <ul>
              <li>Provide information with casting directors</li>
              <li>Help you find match jobs</li>
              <li>Provide you suggested auditions</li>
              <li>Keep you and all user safe</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-start">
              <div>
                <Checkbox
                  size={22}
                  checked={agree}
                  onChange={() => setAgree((s) => !s)}
                />
              </div>

              <p onClick={() => setAgree((s) => !s)} className="cursor-pointer">I agree to ExploreTalent’s Terms of Service</p>
            </div>

            <div className="flex gap-2 items-start">
              <div>
                <Checkbox
                  size={22}
                  checked={accept}
                  onChange={() => setAccept((s) => !s)}
                />
              </div>
              <p className="mb-5 cursor-pointer" onClick={() => setAccept((s) => !s)}>
                I accept ExploreTalent’s use of my data for the service and
                everything else described in the Privacy Policy and Data
                Processing Agreement
              </p>
            </div>
          </div>
        </div>

        <Button
          primary
          onClick={() => {
            agree && accept
              ? onAgree()
              : toast.warning("Please accept our terms of service");
          }}
        >
          Yes start setup
        </Button>
      </div>
    </div>
  );
}
