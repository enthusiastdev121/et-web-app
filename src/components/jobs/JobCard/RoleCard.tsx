import Image from "next/image";
import { useRouter } from "next/router";
import { FcCalendar } from "react-icons/fc";

import { PrimaryBtn } from "@/styles/Btn.styled";
import { Match, Role } from "./Styles";
import { useAuth } from "context/AuthContext";
import { formatDate } from "@/utils/helper";
import { H4, Body2 } from "@/styles/Typography.styled";
import { AiFillStar } from "react-icons/ai";
import { useProfileStore } from "../../../context/ProfileStore/index";
import { BsCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
import Button from "components/Button";
import { JobRoleD } from "types/jobs";
import classNames from "classnames";
import { useState } from "react";
import TranslatedText from "components/TranslatedText";

export default function RoleCard(role: JobRoleD) {
  const {
    auth: { authenticated },
  } = useAuth();
  const router = useRouter();
  const { profile } = useProfileStore();


  const expired = new Date(role.expirationT * 1000) < new Date();


  return (
    <Role className={`txt-base rounded-md ${classNames({ "bg-gray-100": role.inCart }, { "border bg-green-50 border-red-500": role.applied }, { "border bg-yellow-50 border-yellow-500": role.matched })} `}>
      {/* Role className={` txt-base rounded-md ${role.role_match ? "border border-green-400 bg-green-400" : "bg-paper"} ${classNames({ "bg-gray-100": role.inCart }, { "border bg-green-50 border-red-500": role.applied })} `}> */}

      {/* <Role className={`bg-paper txt-base rounded-md ${role.role_match && "border border-green-400 bg-green-400"} ${classNames({ "bg-gray-100": role.inCart }, { "border bg-green-50 border-red-500": role.applied })} `}> */}

      {/* <div className="matched-role-card p-5 md:p-10 mb-5"> </div> */}


      <div className="p-5 md:p-10 mb-5">
        <h4 className="font-semibold text-base mb-2">Role #{role.id}</h4>
        <h4 className="font-semibold text-base">{role?.name}</h4>
        <p
          className="my-3"
          dangerouslySetInnerHTML={{
            __html: role.desc,
          }}
        />

        {/* <p className="font-semibold seeking">Seeking 1 talent for this role</p> */}

        <div className="my-3">
          {/* <h5 className="font-bold">Talent Needed:</h5> */}
          <ul>


            {role.categories?.length > 0 &&

              <li>
                <TranslatedText>Talent Needed:</TranslatedText> <span>{role.categories?.join()}</span>
              </li>
            }
            <li>
              <TranslatedText># of talents needed:</TranslatedText> <span>{role.talentCount}</span>
            </li>
            <li>
              <TranslatedText>Gender:</TranslatedText>  <span>{role.gender}</span>
            </li>
            <li>
              <TranslatedText>Ethnicity:</TranslatedText>  <span>{role.ethnicity.join(", ")}</span>
            </li>
            <li>
              <TranslatedText>Age Rage:</TranslatedText> <span>{role.age}</span>
            </li>
            <li>

              {expired ? "Role is expired" : <>

                <TranslatedText>Role Expires:</TranslatedText>  <span>{role.expiration}</span>
              </>}
            </li>
          </ul>
        </div>





        <div className="flex items-center flex-col-reverse md:flex-row md:items-center gap-2">
          {!authenticated ? (
            <>
              <Link href={`/account/login`}>
                <a>
                  <Button primary><TranslatedText>Login to apply</TranslatedText></Button>
                </a>
              </Link>

            </>
          ) : role.applied ? (
            <Button green disabled>
              <TranslatedText>Applied</TranslatedText>
            </Button>
          ) : role.inCart ? (
            <Link href={`/auditions/saved`}>
              <a>
                <Button primary> <TranslatedText>Complete Submission</TranslatedText></Button>
              </a>
            </Link>
          ) : (
            <>
              <Link href={`/auditions/apply?roleId=${role.id}&jobId=${role.jobId}`}>
                <a>
                  <Button primary> <TranslatedText>Submit for Role</TranslatedText></Button>
                </a>
              </Link>

            </>
          )}


          {authenticated && role.matched ?
            <>
              <div className="flex items-center gap-2 matched-roles">
                <AiFillStar />
                <TranslatedText>You match this Role</TranslatedText>
              </div>
            </> : ""}

        </div>
      </div>
    </Role>

  );
}
