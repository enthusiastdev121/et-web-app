import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ModalPopup } from "./welcome.styled";
import { PrimaryBtnSingle, BlackOutline } from "@/styles/Btn.styled";
import { socialLogin } from "network/services/auth";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { rgba } from "polished";

export default function SignUpModal() {
  const router = useRouter();
  const { onLoginSuccess } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const onGoogle = async () => {
    try {
      const res = await socialLogin({ type: "google" });
      onLoginSuccess({ creds: res.creds, user: res.user, type: "talent", newLogin: true });
      setShowModal(true);
    } catch (err) {
      console.log("Err", err);
    }
  };

  const redirctpage = async () => {
    try {
      const res = await socialLogin({ type: "google", email });
      onLoginSuccess({ creds: res.creds, user: res.user, type: 'talent', newLogin: true });
      setShowModal(false);
    } catch (err) {
      console.log("Err", err);

      // if (err.type === "emailNotFound") {
      //   console.log("errorrrr");
      // }
    }
  };

  const onFacebook = async () => {
    try {
      const res = await socialLogin({ type: "facebook" });
      onLoginSuccess({ creds: res.creds, user: res.user, type: 'talent', newLogin: true });
    } catch (err) {
      console.log("Err", err, "err?.response: ", err?.response);
      // toast.error(
      //   "Email associated with this account already exist please login with that email."
      // );
      if (err.type === "emailNotFound") {
        // setBufferData(err.data);
        // setEmailDialog(true);
      }
    }
  };

  const onApple = async () => {
    try {
      const res = await socialLogin({ type: "apple" });
      onLoginSuccess({ creds: res.creds, user: res.user, type: 'talent', newLogin: true });
      setShowModal(true);
    } catch (err) {
      console.log("Err", err);
    }
  };

  const settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const openProfile = () => {
    router.push("/profile/edit");
  };

  return (
    <>
      <div>
        <Modal className="shadow-lg rounded-2xl flex flex-col px-5 lg:px-40 py-10 text-center text-sm lg:text-base mx-auto">
          <div className="grid grid-cols-1 gap-5 mt-10">
            <BlackOutline onClick={onFacebook} className="btn flex items-center">
              <span className="sm:text-3xl mr-2">
                <FaFacebookF />
              </span>
              <span className="text-base lg:text-lg sm:ml-auto sm:mr-30pr md:mr-40pr lg:mr-20pr">Signup with Facebook</span>
            </BlackOutline>

            <BlackOutline
              // disabled
              onClick={onApple}
              className="btn flex items-center"
            >
              <span className="text-lg sm:text-3xl mr-2">
                <FaApple />
              </span>
              <span className="text-base lg:text-lg sm:ml-auto sm:mr-30pr md:mr-40pr lg:mr-20pr">Signup with Apple</span>
            </BlackOutline>

            <BlackOutline onClick={onGoogle} className="btn flex items-center">
              <span className="sm:text-3xl mr-2">
                <FaGoogle />
              </span>
              <span className="text-base lg:text-lg sm:ml-auto sm:mr-30pr md:mr-40pr lg:mr-20pr">Signup with Google</span>
            </BlackOutline>

            {/* <Link href="/account/signup/find-work" passHref> */}
            <Link
              // href="/join/talentb?kw=Acting%20Auditions.%20New%20Faces%20Needed"
              href="/join/talentb"
              passHref
            >
              <BlackOutline className="btn flex items-center">
                <span className="text-lg sm:text-3xl mr-2">
                  <IoIosMail />
                </span>
                <span className="text-base lg:text-lg sm:ml-auto sm:mr-30pr md:mr-40pr lg:mr-20pr">Continue with email</span>
              </BlackOutline>
            </Link>

            <p className="mt-2 text-xs">
              By continuing using the app, you agree to our.{" "}
              <Link href="/about/agreement">
                <a className="underline cursor-pointer hover:text-blue-400 transition-all duration-75 ease-in-out">Terms of Service</a>
              </Link>{" "}
              and acknowledge that you have read{" "}
              <Link href="/about/privacy">
                <a className="underline cursor-pointer hover:text-blue-400 transition-all duration-75 ease-in-out">our Privacy</a>
              </Link>{" "}
              Notice to learn how we collect, use, and share your data.
            </p>

            <p className="mt-2">
              Already have an account?{" "}
              <Link href="/account/login" passHref>
                <PrimaryBtnSingle className="font-semibold">Login</PrimaryBtnSingle>
              </Link>
            </p>
          </div>
        </Modal>
      </div>
      {showModal ? (
        <ModalPopup>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative modal-popup w-auto my-6 mx-auto">
              <div className="close-button" onClick={redirctpage}>
                <img src="/images/close.png" alt="" />
              </div>
              <div className="border-0 modal-content  relative flex flex-col w-full  outline-none focus:outline-none">
                <div className="relative flex-auto">
                  <div className="internal-model">
                    <div className="popup-header">
                      <h5>Getting started</h5>
                    </div>
                    <img src="/images/user-popup.png" alt="" className="image" />
                    <div className="popup-info">
                      <h4>Want to maximize your results and stand out from the competition?</h4>
                      <p>Of course you do, so make sure you follow these steps: </p>
                    </div>

                    <div className="slider-modal">
                      <Slider {...settings}>
                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/bubble.png" alt="" />
                            <h5>Add social links</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-2.png" alt="" />
                            <h5>Add a video greeting</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-3.png" alt="" />
                            <h5>Add stunning photos</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-4.png" alt="" />
                            <h5>Add incredible videos</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-5.png" alt="" />
                            <h5>Add audio recordings</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-6.png" alt="" />
                            <h5>Add spotlights</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-7.png" alt="" />
                            <h5>List your credits & experience</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-8.png" alt="" />
                            <h5>Add acting interest</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-9.png" alt="" />
                            <h5>Add modeling information</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-10.png" alt="" />
                            <h5>Add extras information</h5>
                          </div>
                        </div>

                        <div className="pr-2">
                          <div className="single-slide">
                            <img src="/images/full-list-12.png" alt="" />
                            <h5>Add professional documents</h5>
                          </div>
                        </div>
                      </Slider>

                      <button className="take-tour-btn" onClick={openProfile}>
                        <img src="/images/play-icon.svg" alt="" />
                        Learn more and start the tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </ModalPopup>
      ) : null}
    </>
  );
}

const Modal = styled.div`
  background-color: ${(props) => props.theme.pure};
  color: ${(props) => props.theme.base};
  border: 1px solid ${(props) => rgba(props.theme.base, 0.1)};
  max-width: 825px;
  max-height: 825px;
  margin: 0 auto;
`;
