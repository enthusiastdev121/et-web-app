import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FiClock } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillStar, AiOutlineStar, AiOutlineTwitter } from "react-icons/ai";
import { HiLocationMarker, HiMail, HiMinusCircle } from "react-icons/hi";

import { H3, H2, Body1 } from "@/styles/Typography.styled";
import { CardContainer, DeleteBtn, Span } from "./Styles";
import RoleCard from "./RoleCard";
import { formatAudtionDetailSlug } from "@/utils/helper";
import { useAuth } from "context/AuthContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { JobItemD } from "types/jobs";
import Button from "components/Button";
import { MdAddCircle } from "react-icons/md";
import TranslatedText from "components/TranslatedText";

export default function JobCard({
  heading,
  description,
  location,
  matchingRoles,
  roles,
  id,
  type,
  favorite,
  dateCreated,
  expiration,
  rolesCount,
  zip,
  showFav = true,
  showDelete = false,
  onFav,
  openApplyJobModal,
  onAddToCart,
  onApply,
  rateDes,
  rate,
  matchedRoleCount,
  ...p

}: JobItemD) {
  const {
    auth: { authenticated },
  } = useAuth();
  const [modal, setModal] = useState(false);
  const [fav, setFav] = useState(favorite);
  const [showFullJobDetail, setShowFullJobDetail] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };


  return (
    <CardContainer className="mb-5 p-5 rounded text-sm -mx-5 sm:mx-0">
      {/* HEADING */}
      <div className="flex items-start gap-3 justify-between">
        <h2 className="text-lg lg:text-2xl font-semibold cursor-pointer">
          <Link href={`/auditions/${formatAudtionDetailSlug(heading + " " + location + " " + zip, id)}`}>
            <a className="heading-link">{heading}</a>
          </Link>
        </h2>

        {authenticated && (
          <div className="flex items-center gap-3">
            {showDelete && (
              <DeleteBtn>
                <RiDeleteBinLine />
              </DeleteBtn>
            )}
            {showFav && fav ? (
              <span
                className="active-fav block w-fit cursor-pointer"
                onClick={() => {
                  setFav(!fav);
                  onFav(id);
                }}
              >
                <AiFillStar />{" "}
              </span>
            ) : (
              <span
                className="fav block w-fit cursor-pointer opacity-50"
                onClick={() => {
                  setFav(!fav);
                  onFav(id);
                }}
              >
                <AiOutlineStar />{" "}
              </span>
            )}
          </div>
        )}
      </div>


      <div className="mt-2 secondary-text" >
        <b><TranslatedText>Category:</TranslatedText> </b> <span>{p.category}</span>
      </div>


      {/* DESCRIPTION */}
      <p className="my-5 whitespace-pre-wrap ">
        {description?.length > 200 ? (showFullJobDetail ? description : description?.substring(0, 200) + "... ") : description}

        {description?.length > 200 && (
          <div className="txt-primary mt-2 cursor-pointer" onClick={() => setShowFullJobDetail((s) => !s)}>
            <TranslatedText>{showFullJobDetail ? "View less" : "View more.."}</TranslatedText>
          </div>
        )}

        {/* <Link href={`/auditions/${formatAudtionDetailSlug(heading + " " + location + " " + zip, id)}`}>
          <a className="link-text">more</a>
        </Link> */}
      </p>

      {/* ADDITIONAL INFO */}

      <div className="flex justify-between text-gray-500">

        <div className=" flex flex-col">
          <div className="secondary-text flex flex-col">
            <b><TranslatedText>Dates & Location:</TranslatedText></b>
            {location}
          </div>



        </div>

        <div className=" flex flex-col gap-1 ">
          <div className="secondary-text">
            <b><TranslatedText>Posted: </TranslatedText></b>
            {dateCreated}
          </div>
          <div className="secondary-text">
            <b><TranslatedText>Expires: </TranslatedText></b>
            {expiration}
          </div>
          <div className="secondary-text">
            <b><TranslatedText>Rate: </TranslatedText></b>
            {rateDes === 'negotiable' ? rateDes :
              rate > 0 ? "$" + rate + (rateDes ? " / " + rateDes : '') : 'Unpaid'}
          </div>


        </div>


      </div>

      <div className="text-gray-500 secondary-text break-words">
        <b> <TranslatedText>Seeking submissions from: </TranslatedText></b>
        {(p.market === 'N/A' || !p.market) ? "Nationwide, United States" : p?.market}
      </div>



      {/* AVAILABLE AND MATCHING ROLES */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:items-center mt-5">
        {/* ROLES TOGGLE BTN   */}
        <div>
          <div className="relative">
            <input id={id?.toString()} className="absolute opacity-0 -z-10" type="checkbox" />
            <label htmlFor={id?.toString()} onClick={showModal} className="flex items-center cursor-pointer">
              {modal ? <HiMinusCircle className="txt-primary text-lg" /> : <MdAddCircle className="txt-primary text-lg" />}
              <Span className="font-semibold ml-2"> <TranslatedText>View all </TranslatedText>{rolesCount} <TranslatedText>available roles</TranslatedText></Span>
            </label>
          </div>
        </div>


        {/* NO OF MATCHING ROLES */}
        {matchedRoleCount > 0 ?
          <>
            <div className="flex items-center gap-2 matched-roles">
              <AiFillStar />
              <TranslatedText>You have</TranslatedText> {matchedRoleCount}<TranslatedText>matched</TranslatedText> <TranslatedText>{matchedRoleCount == 1 ? "role" : "roles"}</TranslatedText>
            </div>
          </> : ""}


        {/* {authenticated && (
          <div className="flex items-center gap-2 matched-roles">
            <AiFillStar />
            You have 1 matched Role
          </div>
        )} */}
      </div>

      {/* ROLES CARDS */}
      <div className="mt-5 xl:mt-10">
        {modal && (
          <div >
            <div className="my-5 flex flex-col lg:flex-row lg:items-center justify-between gap-2">
              {/* <div className="flex items-center gap-2 p-2 border-2 rounded-3xl">
                <span className="clock-icon">
                  <FiClock />
                </span>
                <div>
                  <strong>Just listed.</strong> People who apply in the first 48 hours are more likely to be cast.
                </div>
              </div> */}

              <div className="social-icons font-semibold flex items-center gap-2">
                <TranslatedText> Share</TranslatedText>
                <span className="social-icon">
                  <HiMail />
                </span>
                <span className="social-icon">
                  <FaFacebookF />
                </span>
                <span className="social-icon">
                  <AiOutlineTwitter />
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center font-semibold">
              <div><TranslatedText>Roles in this project</TranslatedText></div>

              <Link href={`/auditions/${formatAudtionDetailSlug(heading + " " + location + " " + zip, id)}`}>
                <a className="link-text"><TranslatedText>View project full details</TranslatedText></a>
              </Link>
            </div>

            <div className="mt-5 flex flex-col gap-4 mb-4">
              {roles.map((role: any) => (
                <RoleCard key={role.id} {...role} />
              ))}
            </div>
          </div>
        )}

        <Link href={`/auditions/${formatAudtionDetailSlug(heading + " " + location + " " + zip, id)}`}>
          <a>
            <Button primary><TranslatedText>View all details</TranslatedText></Button>
          </a>
        </Link>
      </div>
    </CardContainer>
  );
}
