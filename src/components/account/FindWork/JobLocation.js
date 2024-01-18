import { useState } from "react";
import Link from "next/link";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";

export default function JobLocation({ setData, onFinish }) {
  const [location, setLocation] = useState();
  const [distance, setDistance] = useState();

  const onSubmit = () => {
    const location = document.querySelector(
      'input[name="location"]:checked'
    ).value;
    const distance = document.querySelector(
      'input[name="local-location"]:checked'
    ).value;

    setLocation(location);
    setDistance(distance);

    setData((data) => ({
      ...data,
      job_location: {
        location: location,
        distance: distance,
      },
    }));
  };

  const onCancel = () => {};

  return (
    <div className="py-10 px-10v 2xl:px-20v text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.060934312297!2d121.02097341475698!3d14.423650889915363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1cf4b655555%3A0xcd8131fbb267f0a5!2sPhilippine%20Film%20Studios%20Inc.!5e0!3m2!1sen!2sin!4v1645164053777!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: "0", width: "100%", height: "100%" }}
            loading="lazy"
          ></iframe>
        </div>

        <div className="text-left md:py-20">
          <div className="mb-5">
            <h2 className="font-semibold text-xl mb-3">
              Where do you want to accept jobs:
            </h2>
            <form className="flex flex-wrap">
              <div className="mr-5">
                <input
                  type="radio"
                  name="location"
                  id="Worldwide"
                  className="check-with-label"
                  value="worldwide"
                />
                <label
                  className="font-semibold ml-2 label-for-check"
                  htmlFor="Worldwide"
                >
                  Worldwide
                </label>
              </div>
              <div className="mr-5">
                <input
                  type="radio"
                  className="check-with-label"
                  name="location"
                  id="nationwide"
                  value="nationwide"
                />
                <label
                  className="label-for-check font-semibold ml-2"
                  htmlFor="nationwide"
                >
                  Nation Wide, USA
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  className="check-with-label"
                  name="location"
                  id="custom"
                  value="custom"
                />
                <label
                  className="label-for-check font-semibold ml-2"
                  htmlFor="custom"
                >
                  Custom
                </label>
              </div>

              <div className="mt-5">
                <h2 className="font-semibold text-xl mb-3">
                  Local only within:
                </h2>
                <div className="flex flex-wrap">
                  <div className="mr-5">
                    <input
                      type="radio"
                      className="check-with-label"
                      id="one"
                      name="local-location"
                      value="More than 1k Miles"
                    />
                    <label
                      className="label-for-check font-semibold ml-2"
                      htmlFor="one"
                    >
                      More than 1k Miles
                    </label>
                  </div>
                  <div className="mr-5">
                    <input
                      type="radio"
                      className="check-with-label"
                      id="500"
                      name="local-location"
                      value="Less than 500 Miles"
                    />
                    <label
                      className="label-for-check font-semibold ml-2"
                      htmlFor="500"
                    >
                      Less than 500 Miles
                    </label>
                  </div>
                  <div className="mr-5">
                    <input
                      type="radio"
                      className="check-with-label"
                      id="100"
                      name="local-location"
                      value="Less than 100 Miles"
                    />
                    <label
                      className="label-for-check font-semibold ml-2"
                      htmlFor="100"
                    >
                      Less than 100 Miles
                    </label>
                  </div>
                  <div className="mr-5">
                    <input
                      type="radio"
                      className="check-with-label"
                      id="50"
                      name="local-location"
                      value="Less than 50 Miles"
                    />
                    <label
                      className="label-for-check font-semibold ml-2"
                      htmlFor="50"
                    >
                      Less than 50 Miles
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="check-with-label"
                      id="custom2"
                      name="local-location"
                      value="custom"
                    />
                    <label
                      className="label-for-check font-semibold ml-2"
                      htmlFor="custom2"
                    >
                      Custom
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
        {/* <Link href="/" passHref> */}
        <PrimaryBtn
          onClick={onSubmit}
          className="btn cursor-pointer lg:text-xl font-semibold"
        >
          Ok &rarr;
        </PrimaryBtn>
        {/* </Link> */}
        <Link href="/" passHref>
          <TertiaryBtn
            onClick={onCancel}
            border="1px solid"
            className="btn cursor-pointer lg:text-xl font-semibold"
          >
            Cancel
          </TertiaryBtn>
        </Link>
      </div>
    </div>
  );
}

// document.querySelector('input[name="rate"]:checked').value;

// if (document.getElementById('r1').checked) {
//   rate_value = document.getElementById('r1').value;
// }
