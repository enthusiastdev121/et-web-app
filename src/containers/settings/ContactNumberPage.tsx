import Aside from "components/settings/Aside";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillPersonFill } from "react-icons/bs";
import { ImArrowLeft2 } from "react-icons/im";
import { Root, Main, Nav } from "./styles";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Button from "components/Button";

export default function ContactNumberPage() {
  const router = useRouter();
  const [value, setValue] = useState();

  return (
    <Root>
      <Aside active="account" />

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

            <div className="mr-auto title">Account Information</div>

            <button className="txt-link font-semibold">Save</button>
          </Nav>

          <div>
            <h2 className="text-xl font-bold mb-3">Display Name</h2>
            <div className="flex items-center justify-between text-sm font-semibold">
              <div>Adam Sandman</div>
              <button className="txt-link font-semibold">Edit</button>
            </div>

            <hr className="my-5" />

            <h2 className="text-xl font-bold mb-3">Contact Number</h2>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={(e) => setValue(value)}
              className="contact-input-container"
            />

            <h2 className="font-bold mb-3 mt-5">Secondary Contact Number</h2>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={(e) => setValue(value)}
              className="contact-input-container"
            />

            <small
              style={{
                color: "rgba(60, 60, 67, 0.6)",
                marginTop: "15px",
                display: "block",
              }}
            >
              <strong>Recommended</strong>: casting professionals may need to
              call or text you for urgent castings (only casting professionals
              whose listings you applied to can see your number).
            </small>

            <div className="flex gap-5 justify-center mt-5">
              <Button primary outlined>
                Cancel
              </Button>
              <Button primary>Save</Button>
            </div>

            <hr className="my-5" />

            <h2 className="text-xl font-bold mb-3">Email Address</h2>
            <div className="flex items-center justify-between text-sm font-semibold">
              <div>Adam Sandman</div>
              <button className="txt-link font-semibold">Edit</button>
            </div>

            <hr className="my-5" />

            <h2 className="text-xl font-bold mb-3">Date of birth</h2>
            <div className="flex items-center justify-between text-sm font-semibold">
              <div>March 3, 1980</div>
              <button className="txt-link font-semibold">Edit</button>
            </div>
          </div>
        </div>
      </Main>
    </Root>
  );
}
