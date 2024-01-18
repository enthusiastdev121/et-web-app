import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";
import { Question } from "@/styles/Breadcrumb.styled";
import { Span, AddRoleBtn } from "./Looking5.styled";
import AddRoleModal from "./AddRoleModal";
import Modal from "../../Modal";
import { H2 } from "@/styles/Typography.styled";

export default function LookingPage5() {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  return (
    <div className="page-padding text-center min-h-screen flex flex-col items-center justify-center">
      <Question>Question 5/10</Question>
      <H2 size={48}>5. Add the roles you&apos;re looking for</H2>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showModal && (
          <Modal handleClose={close}>
            <AddRoleModal handleClose={close} />
          </Modal>
        )}
      </AnimatePresence>

      <div>
        <div>
          <p className="text-lg font-semibold mt-5">Actore for feature films</p>
          <p>Lorem, ipsum dolor</p>
        </div>

        <div className="my-10 text-xl">
          <p>
            Name: <Span>Rohit</Span>
          </p>
          <p>
            Age: <Span>18 Years</Span>
          </p>
        </div>
      </div>

      <div className="w-full mb-20">
        <AddRoleBtn onClick={open}>
          <div className="mr-5">
            <Image
              src="/svg/add-role.svg"
              height={31}
              width={31}
              alt="add role"
            />
          </div>
          Add Your First Role Back
        </AddRoleBtn>
      </div>

      <div className="max-w-4xl w-full">
        <div className="flex w-full flex-col sm:flex-row justify-center">
          <Link href="#looking4" passHref>
            <button className="mb-5 sm:mr-auto sm:m-0">&larr; Back</button>
          </Link>
          <div>
            <Link href="#looking6" passHref>
              <TertiaryBtn
                className="btn mr-2"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking6")
                    .classList.remove("hidden");
                }}
              >
                Cancel
              </TertiaryBtn>
            </Link>
            <Link href="#looking6" passHref>
              <PrimaryBtn
                className="btn"
                border="1px solid"
                onClick={() => {
                  document
                    .getElementById("looking6")
                    .classList.remove("hidden");
                }}
              >
                Next &rarr;
              </PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
