import { useState } from "react";
import { HiPencil, HiLocationMarker } from "react-icons/hi";

import JobCart from "components/jobs/JobCart";
import JobsList from "components/ProductPage/AuditionJobPage/JobsList";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";

import { PrimaryBtnLight } from "@/styles/Btn.styled";
import { H1 } from "@/styles/Typography.styled";
import { Container } from "./styles";
import BackToTop from "components/BackToTop";

export default function AuditionsNearMe() {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const navItems = [
    {
      id: 1,
      label: "From my main address",
      active: true,
      onClick: () => {
        setOne(true);
        setTwo(false);
        setThree(false);
      },
    },
    {
      id: 2,
      label: "In my current location",
      active: false,
      onClick: () => {
        setOne(false);
        setTwo(true);
        setThree(false);
      },
    },
    {
      id: 3,
      label: "Based on desired markets",
      active: false,
      onClick: () => {
        setOne(false);
        setTwo(false);
        setThree(true);
      },
    },
  ];
  return (
    <Container className="padding-small ">
      <BackToTop />
      <main className="padding-x lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          <H1>Auditions near me</H1>

          <nav className="mt-10 mb-5">
            <ul className="flex items-center flex-wrap gap-5">
              {navItems.map((item: any) => (
                <li key={item.id} className="nav-item relative">
                  <input type="radio" id={item.id} name="nav" className="absolute top-0 left-0 opacity-0" />
                  <label onClick={item.onClick} htmlFor={item.id} className={one && item.active ? "active-link" : ""}>
                    {item.label}{" "}
                  </label>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {one && (
              <>
                <div className="bg-blue-100 p-20">map one</div>
                <div className="flex flex-wrap gap-3 items-center justify-between mt-5">
                  <div className="text-2xl">
                    There are <strong>128</strong> jobs near your main address
                  </div>
                  <select className="border-2 rounded-3xl bg-transparent py-2 px-5 text-sm">
                    <option>Sort&nbsp;by&nbsp;latest&nbsp;listing</option>
                  </select>
                </div>
              </>
            )}
            {two && (
              <>
                <div className="bg-blue-100 p-20">map two</div>
                <div className="flex flex-wrap gap-3 items-center justify-between mt-5">
                  <div className="text-2xl">
                    There are <strong>128</strong> jobs near you
                  </div>
                  <select className="border-2 rounded-3xl bg-transparent py-2 px-5 text-sm">
                    <option>Sort&nbsp;by&nbsp;latest&nbsp;listing</option>
                  </select>
                </div>
              </>
            )}
            {three && (
              <>
                <div className="">
                  <div className="flex flex-col gap-5 items-start xl:flex-row xl:items-center">
                    <div>These are the 3 closest city markets you have choosen from your jobs preference</div>
                    <PrimaryBtnLight className="btn flex items-center gap-2">
                      <HiPencil className="text-xl" /> Edit&nbsp;jobs&nbsp;preferences
                    </PrimaryBtnLight>
                  </div>

                  <div className="my-5 p-5 blue-bg">
                    <ul className="flex items-start gap-5 flex-wrap gap-issue">
                      <li>
                        <div>
                          <h3>1st Closest City</h3>
                          <div className="flex items-center gap-2 font-semibold">
                            <HiLocationMarker /> Seattle, WA
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <h3>2nd Closest City</h3>
                          <div className="flex items-center gap-2 font-semibold">
                            <HiLocationMarker /> Portland, OR
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <h3>3rd Closest City</h3>
                          <div className="flex items-center gap-2 font-semibold">
                            <HiLocationMarker /> Boise, ID
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-between mt-5">
                  <div className="text-2xl">
                    There are <strong>928</strong> jobs near your markets
                  </div>
                  <select className="border-2 rounded-3xl bg-transparent py-2 px-5 text-sm">
                    <option>Sort&nbsp;by&nbsp;latest&nbsp;listing</option>
                  </select>
                </div>
              </>
            )}
          </div>

          <div className="mt-5">
            <JobsList />
          </div>
        </div>

        <aside className="right mt-5 lg:mt-0">
          <Advertisement />

          <div className="mb-5">
            {" "}
            <JobCart />{" "}
          </div>

          <div className="mb-5">
            <CommunityBuzz />
          </div>
          <div>
            <SuccessStories />
          </div>
        </aside>
      </main>
    </Container>
  );
}
