import { ToggleBtn, ToogleContainer } from "@/styles/Btn.styled";
import Aside from "components/settings/Aside";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillPersonFill } from "react-icons/bs";
import { ImArrowLeft2 } from "react-icons/im";
import styled from "styled-components";
import { Root, Main, Nav, Ul } from "./styles";

export default function PushNotificationPage() {
  const router = useRouter();

  return (
    <Root>
      <Aside active="push" />

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

            <div className="mr-auto title">Push Notification</div>
          </Nav>

          <div>
            <div
              style={{ color: "rgba(60, 60, 67, 0.6)" }}
              className="flex items-center justify-between mb-5"
            >
              <h2 className="font-semibold text-xl txt-base">
                Allow all notification
              </h2>
              <ToogleContainer>
                <label className="switch">
                  <input type="checkbox" className="checkbox" />
                  <span className="toggle-thumb"></span>
                </label>
              </ToogleContainer>
            </div>

            {/* job alerts */}
            <div>
              <h2 className="text-xl font-bold" style={{ marginBottom: "1em" }}>
                Jobs alerts
              </h2>
              <Ul>
                <li>
                  <div>Matched jobs</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
                <li>
                  <div>Jobs near you</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
                <li>
                  <div>Jobs from your market preference</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
                <li>
                  <div>New job posts</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
              </Ul>
            </div>

            <hr className="my-5" />

            {/* contests */}
            <div>
              <h2 className="text-xl font-bold" style={{ marginBottom: "1em" }}>
                Contests
              </h2>
              <Ul>
                <li>
                  <div>Newly opened contests</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>

                <li>
                  <div>1 day before closing contest</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>

                <li>
                  <div>Contest result</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>

                <li>
                  <div>Vote entries</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
              </Ul>
            </div>

            <hr className="my-5" />

            {/* messaging */}
            <div>
              <h2 className="text-xl font-bold" style={{ marginBottom: "1em" }}>
                Messaging
              </h2>
              <Ul>
                <li>
                  <div>Message from talents</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>

                <li>
                  <div>Message from casting directors</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
              </Ul>
            </div>

            <hr className="my-5" />

            {/* Intraction */}
            <div>
              <h2 className="text-xl font-bold" style={{ marginBottom: "1em" }}>
                Interaction
              </h2>
              <Ul>
                <li>
                  <div>Connection</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>

                <li>
                  <div>New followers</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>

                <li>
                  <div>Comments</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>

                <li>
                  <div>Likes</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
              </Ul>
            </div>

            <hr className="my-5" />

            {/* subscription */}
            <div>
              <h2 className="text-xl font-bold" style={{ marginBottom: "1em" }}>
                Subscription
              </h2>
              <Ul>
                <li>
                  <div>Renew reminder if near expiration</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
              </Ul>
            </div>

            <hr className="my-5" />

            {/* Other */}
            <div>
              <h2 className="text-xl font-bold" style={{ marginBottom: "1em" }}>
                Other
              </h2>
              <Ul>
                <li>
                  <div>News & Updates</div>
                  <ToogleContainer>
                    <label className="switch">
                      <input type="checkbox" className="checkbox" />
                      <span className="toggle-thumb"></span>
                    </label>
                  </ToogleContainer>
                </li>
              </Ul>
            </div>
          </div>
        </div>
      </Main>
    </Root>
  );
}
