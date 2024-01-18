import Modal from "components/Modal";
import { useAuth } from "context/AuthContext";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiShieldStarFill } from "react-icons/ri";
import styled from "styled-components";
import OptionsModal from "./sendReview/OptionsModal";
import RecordVideoReviewModal from "./sendReview/RecordVideoReviewModal";
import TextReviewModal from "./sendReview/TextReviewModal";
import VideoReviewModal from "./sendReview/VideoReviewModal";
import VideoReviewOptionsModal from "./sendReview/VideoReviewOptions";

export default function Header({ active }: { active: string }) {
  const { auth: { authenticated } } = useAuth()
  const router = useRouter()
  const [modalContent, setModalContent] = useState<ModalContentD>({
    modalName: "options",
  });
  const [showModal, setShowModal] = useState(false);
  const open = () => {
    if (!authenticated) {
      router.push('/account/login')
      return;
    }
    setShowModal(true)
  };
  const close = () => {
    setShowModal(false)
    setModalContent({ modalName: "options" })
  }


  return (
    <HeaderContainer className="mb-5">
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showModal && (
          <Modal handleClose={close}>
            {modalContent.modalName === "options" ? (
              <OptionsModal
                handleClose={close}
                setModalContent={setModalContent}
              />
            ) : modalContent.modalName === "message" ? (
              <TextReviewModal
                handleClose={close}
                setModalContent={setModalContent}
              />
            ) : modalContent.modalName === "video-options" ? (
              <VideoReviewOptionsModal
                handleClose={close}
                setModalContent={setModalContent}
              />
            ) : modalContent.modalName === "video" ? (
              <VideoReviewModal
                handleClose={close}
                setModalContent={setModalContent}
              />
            ) : (
              <OptionsModal
                handleClose={close}
                setModalContent={setModalContent}
              />
            )}
          </Modal>
        )}
      </AnimatePresence>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-5 gap-5 md:gap-2">
        <h1>Top reviews</h1>

        {/* <button className="top-btn"> */}
        <button className="top-btn" onClick={open}>
          <div className="text-2xl">
            <RiShieldStarFill />
          </div>
          <span>Send&nbsp;a&nbsp;review</span>
        </button>
      </div>

      <div className="flex items-center justify-center md:justify-between ">
        <div className="flex items-center gap-3">
          <Link href="/reviews/all" passHref>
            <button className={active === "all" ? "active" : ""}>All</button>
          </Link>
          <Link href="/reviews/messages" passHref>
            <button className={active === "messages" ? "active" : ""}>
              Messages
            </button>
          </Link>
          <Link href="/reviews/videos" passHref>
            <button className={active === "videos" ? "active" : ""}>
              Videos
            </button>
          </Link>
        </div>
      </div>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.header`
  h1 {
    font-weight: 700;
    font-size: 22px;
line-height: 24px;
  
    @media (min-width: 768px) {
      font-size: 32px;
    line-height: 39px;
    }
  }

  button,
  select {
    border: 1px solid #e5e7eb;
    border-radius: 100px;
    transition: all 0.3s ease;
    padding: 5px 18px;
    color: ${(p: any) => p.theme.base};

    @media (min-width: 1530px) {
      padding: 10px 18px;
    }
  }

  .active,
  button:hover {
    background: ${(p: any) => p.theme.primary};
    border: 1px solid ${(p: any) => p.theme.primary};
    border-radius: 100px;
    color: #fff;
  }

  .top-btn {
    border: 1px solid ${(p: any) => p.theme.primary};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 5px 10px;
    color: ${(p: any) => p.theme.primary};
    font-weight: 600;
    @media (min-width: 768px) {
      padding: 10px 18px;
    }
  }

  .top-btn:hover {
    border-radius: 4px;
  }
`;

type ModalContentD = {
  modalName: "options" | "message" | "video" | "video-options";
};
