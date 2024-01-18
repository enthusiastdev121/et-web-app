import Button from "components/Button";
import Aside from "components/settings/Aside";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { AiOutlineDesktop, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { FiMonitor, FiSmartphone } from "react-icons/fi";
import { ImArrowLeft2 } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { Root, Main, Nav, Input } from "./styles";
import toast from 'react-hot-toast';
import { updateProfileDetailApi } from "network/apis/ownProfile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";

export default function PasswordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { token } = useAuth();
  const { profile } = useProfileStore()
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  const onSave = async () => {
    if (password !== confirmPassword) {
      toast.error("Password does not match");
      return;
    }

    if (password.length < 4) {
      toast.error("Password must be at least 4 characters");
      return;
    }

    try {
      setLoading(true);
      const res = await updateProfileDetailApi({
        token,
        talentnum: profile?.talentnum?.toString(),
        raw: {
          talentpass: password,
        },
      });
      setLoading(false)
      toast.success("Password updated successfully!")
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  }

  return (
    <Root>
      <Aside active="password" />

      <Main>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Nav>
            <div className="text-xl mr-auto cursor-pointer">
              <ImArrowLeft2
                onClick={() => {
                  router.back();
                }}
              />
            </div>
            <div className="mr-auto title">Password & Security</div>
          </Nav>

          <div className="md:hidden font-bold text-xl text-center mb-8">Password & Security</div>

          <div>
            <h3 className="text-xl font-bold mb-3">Change password</h3>

            <Ul className="">
              {/* <li>
                <label className="font-semibold mb-1 block">
                  Current password
                </label>
                <Input type="text" placeholder="Enter current password" />
              </li> */}

              <li>
                {/* <label className="font-semibold mb-1 block">New password</label>
                <Input type="text" placeholder="Enter new password" value={password} onChange={e => setPassword(e.target.value)} /> */}
                <div className="relative text-left flex flex-col">
                  <label htmlFor="password" className="font-semibold mb-1 block">New Password</label>
                  <Input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-2 xl:py-4 pl-5 bg-pure"
                    required
                    ref={passwordRef}
                    value={password}
                  />
                  <div
                    onClick={() => {
                      passwordRef.current.type =
                        passwordRef.current.type === "text"
                          ? "password"
                          : "text";
                      console.log("passwordRef.current: ", passwordRef.current)
                      setShowPass(!showPass);
                    }}
                    className="cursor-pointer"
                  >
                    {showPass ? (
                      <AiOutlineEye
                        className="text-xl absolute right-5 text-slate-400"
                        style={{ top: "70%", transform: "translateY(-50%)" }}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="text-xl absolute right-5 text-slate-400"
                        style={{ top: "70%", transform: "translateY(-50%)" }}
                      />
                    )}
                  </div>
                </div>


              </li>

              <li>
                <div className="relative text-left flex flex-col my-5">
                  <label htmlFor="confirm" className="font-semibold mb-1 block">Confirm Password</label>
                  <Input
                    type="password"
                    id="confirm"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="py-2 xl:py-4 pl-5 w-full block bg-pure"
                    required
                    ref={confirmPasswordRef}
                    value={confirmPassword}
                  />
                  <div
                    onClick={() => {
                      confirmPasswordRef.current.type =
                        confirmPasswordRef.current.type === "text"
                          ? "password"
                          : "text";
                      setShowConfirmPass(!showConfirmPass);
                    }}
                    className="cursor-pointer"
                  >
                    {showConfirmPass ? (
                      <AiOutlineEye
                        className="text-xl absolute right-5 text-slate-400"
                        style={{ top: "70%", transform: "translateY(-50%)" }}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="text-xl absolute right-5 text-slate-400"
                        style={{ top: "70%", transform: "translateY(-50%)" }}
                      />
                    )}
                  </div>
                </div>
                {/* <label className="font-semibold mb-1 block">
                  Confirm password
                </label>
                <Input type="text" placeholder="Enter current password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} /> */}
              </li>

              {/* <li>
                <div className="font-semibold mb-1 block">
                  Your password must contain:
                </div>
                <div
                  className="txt-base flex items-center gap-1 mb-2"
                >
                  <Bullet /> 8 to 12 characters
                </div>
                <div
                  className="txt-base flex items-center gap-1"
                >
                  <Bullet /> Letters, numbers, special characters
                </div>
              </li> */}
            </Ul>

            <div className="flex gap-5 justify-center">
              <Button primary loading={loading} onClick={onSave}>Save</Button>
              <Button primary outlined onClick={() => {
                setPassword("")
                setConfirmPassword("")
              }}>
                Cancel
              </Button>
            </div>

            {/* <div className="txt-link font-semibold mt-7">
              Forgot your password?
            </div> */}
          </div>

          {/* <hr className="my-10" />

          <div>
            <h3 className="font-xl font-bold mb-5">Login Activity</h3>

            <Ul>
              <li className="flex gap-3 items-center">
                <div className="text-5xl">
                  <AiOutlineDesktop />
                </div>

                <div className="text-sm">
                  <div>
                    <strong>Windows PC •</strong> Los Angeles CA, USA
                  </div>
                  <div>
                    Chrome •{" "}
                    <span style={{ color: "#37C96A", fontWeight: "600" }}>
                      Active Now
                    </span>{" "}
                  </div>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <div className="text-5xl">
                  <FiSmartphone />
                </div>

                <div className="text-sm">
                  <div>
                    <strong>Iphone 12 •</strong> Texas, USA
                  </div>
                  <div>ExploreTalent App • April 21 at 10:30 AM</div>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <div className="text-5xl">
                  <AiOutlineDesktop />
                </div>

                <div className="text-sm">
                  <div>
                    <strong>Windows PC •</strong> Los Angeles CA, USA
                  </div>
                  <div>Chrome • April 21 at 10:30 AM</div>
                </div>
              </li>

              <li className="flex gap-3 items-center">
                <div className="text-5xl">
                  <AiOutlineDesktop />
                </div>

                <div className="text-sm">
                  <div>
                    <strong>Windows PC •</strong> Los Angeles CA, USA
                  </div>
                  <div>Chrome • March 1 at 9:22 PM</div>
                </div>
              </li>
            </Ul>

            <div className="txt-link font-semibold cursor-pointer">
              <IoIosArrowDown className="inline-block mr-1" /> See more
            </div>
          </div> */}
        </div>
      </Main>
    </Root>
  );
}

const Ul = styled.ul`
  li {
    margin-bottom: 1.5em;
  }
`;

const Bullet = styled.span`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background: #e5e7eb;
`;
