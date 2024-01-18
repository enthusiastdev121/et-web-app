// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useRouter } from "next/router";

// import { fetchZipApi } from "../../../network/apis/auth";

// export default function Address({ data = {}, setData }) {
//   const router = useRouter();
//   const [countryOpen, setCountryOpen] = useState(false);
//   const [zip, setZip] = useState(data?.zip || "");
//   const [city, setCity] = useState(data?.city || "");
//   const [state, setState] = useState(data?.city || "");
//   const [country, setCountry] = useState({
//     name: data?.country || "United States",
//     cca2: data?.countryCode || "US",
//   });
//   const [fetchingZip, setFetchingZip] = useState(false);

//   const formSubmit = (e) => {
//     e.preventDefault();
//     setData((data) => ({
//       ...data,
//       country: country.name,
//       countryCode: country.cca2,
//       zip,
//       city,
//       state,
//     }));
//     document.getElementById("fname").classList.remove("hidden");
//     router.push("#fname");
//   };

//   useEffect(() => {
//     const fetchZ = async () => {
//       try {
//         setFetchingZip(true);
//         const res = await fetchZipApi({ zip });

//         if (res.zipcode) {
//           setCity(res.city);
//           setState(res.state);
//         }
//       } catch (err) {
//       } finally {
//         setFetchingZip(false);
//       }
//     };

//     if (zip.length > 2) {
//       fetchZ();
//     }
//   }, [zip]);

//   return (
//     <div
//       className="padding text-center min-h-screen flex flex-col items-center justify-center"
//       style={{ minHeight: "100vh" }}
//     >
//       <h1 className="font-bold text-5xl mb-10">Enter your zipcode</h1>
//       <form className="w-full lg:w-4/6 flex" onSubmit={formSubmit}>
//         <Input
//           type="number"
//           className="py-2 xl:py-4 w-3/4 pl-4 bg-paper"
//           required
//           onChange={(e) => {
//             setZip(e.target.value);
//           }}
//         />
//         <Submit
//           type="submit"
//           value="Enter"
//           className="md:px-5 py-2 font-semibold xl:px-8 xl:py-4 text-center  w-1/4 cursor-pointer text-white"
//         />
//       </form>
//     </div>
//   );
// }

// const Input = styled.input`
//   border: 1px solid ${(props) => props.theme.primary};
//   border-radius: 5px 0 0 5px;
// `;

// const Submit = styled.input`
//   background-color: ${(props) => props.theme.primary};
//   border: 1px solid ${(props) => props.theme.primary};
//   border-radius: 0 5px 5px 0;
// `;

import React, { useEffect, useRef, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Button from "components/Button";
import { fetchZipApi } from "network/apis/auth";
import { HiLocationMarker } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import LocationDialog from "components/profile/modals/LocationDialog";
import { MdMyLocation } from "react-icons/md";
import { getLocationByIp } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import TranslatedText from "components/TranslatedText";

export default function Address({ data, setData, isChild, height }) {
  const router = useRouter();
  const zipRef = useRef(null);
  const [zip, setZip] = useState("");
  const [loadingAddress, setLoadingAddress] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [liveCode, setLiveCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [address, setAddress] = useState({
    city: "",
    state: "",
  });
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("United States");
  const [address1, setAddress1] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [geoLat, setGeoLat] = useState(0);
  const [geoLon, setGeoLon] = useState(0);
  const addressRef = useRef(null);

  
  const userLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setGeoLon(longitude);
        setGeoLat(latitude);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // 0 to 1; 1 means 100% of the target is visible
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          userLocation();
        }
      });
    }, observerOptions);

    if (addressRef.current) {
      observer.observe(addressRef.current);
    }
    return () => {
      if (addressRef.current) {
        observer.unobserve(addressRef.current);
      }
    };
  }, []);


  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await getLocationByIp();
        setCurrentLocation(res.country);
        setCountryCode(res.countryCode);
        setCity(res.city);
        setState(res.regionName);
        setCountry(res.country);
        setZip(res.zip);
        setLat(res.lat);
        setLon(res.lon);
        setData((data) => ({
          ...data,
          zip: res.zip,
        }));
      } catch (err) {
        console.log("ERROR: ", err);
      }
    };
    getLocation();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Value: ", city !== "" && country !== "" && state !== "" && zip !== "");

    if (city !== "" && country !== "" && state !== "" && zip !== "") {
      setData((data) => ({
        ...data,
        country,
        countryCode,
        zip,
        city,
        state,
        address: address1,
        lat: geoLat || lat,
        lon: geoLon || lon,
      }));

      if (isChild) {
        document.getElementById("parentInfo").classList.remove("hidden");
        router.push("#parentInfo");
      } else {
        document.getElementById("fname").classList.remove("hidden");
        router.push("#fname");
      }
    } else {
      // toast.error("Please enter your location");
    }
  };

  useEffect(() => {
    const fetchZip = debounce(async () => {
      try {
        setLoadingAddress(true);
        const res = await fetchZipApi({ zip });
        setLoadingAddress(false);
        if (res.zipcode) {
          setErrorMessage("");
          setLon(res?.lon);
          setLat(res?.lat);
          setCity(res?.city);
          setCountry("United States");
          setState(res?.state);
          setAddress1("");
        } else {
          setErrorMessage("Enter valid ZIP code");
        }
      } catch (err) {
        setLoadingAddress(false);
        setErrorMessage("Enter valid ZIP code");
        console.log("Err", err);
      }
    }, 1000);

    if (zip?.trim()) {
      fetchZip();
    }
  }, [zip]);

  const onConfirm = (ad1, city, state, country, z1, cCode, lat, lon) => {
    setZip(!z1 ? data.zip : z1);
    setAddress1(ad1);
    setCity(city);
    setState(state);
    setCountry(country);
    setCountryCode(cCode);
    setLat(lat);
    setLon(lon);
  };

  return (
    <div ref={addressRef} className="padding min-h-screen flex items-center justify-center" style={{ minHeight: height }}>
      <ToastContainer className="Toastify" />
      <div className="grow flex items-center content w-full">
        <ContentBox className="mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-10">
            {" "}
            <TranslatedText>{isChild ? "Guardian's Address" : "Where are you located?"}</TranslatedText>
          </h1>

          <div className="flex flex-col gap-8 mb-10">
            <CountryPik className="bg-paper">
              <ReactFlagsSelect searchable={true} selected={countryCode} onSelect={(code) => setCountryCode(code)} />
            </CountryPik>

            {currentLocation === "United States" || countryCode === "US" ? (
              <>
                <>
                  {loadingAddress ? (
                    <div>
                      <div>...</div>
                    </div>
                  ) : (
                    <>
                      {errorMessage ? (
                        <div className="txt-danger">
                          {" "}
                          <TranslatedText>Enter a valid zip code</TranslatedText>
                        </div>
                      ) : city ? (
                        <div>
                          <div className="txt-link">
                            <HiLocationMarker
                              style={{
                                display: "inline-block",
                                marginRight: 10,
                              }}
                            />
                            {city}, {state}
                          </div>
                        </div>
                      ) : null}
                    </>
                  )}
                </>

                <div className="flex gap-5 items-center">
                  <label className="txt-base font-medium">
                    {" "}
                    <TranslatedText>Enter you zip code:</TranslatedText>
                  </label>
                  <Input
                    type="number"
                    placeholder="Zip Code*"
                    value={zip}
                    onChange={(e) => {
                      setZip(e.target.value);
                    }}
                    ref={zipRef}
                  />
                </div>
              </>
            ) : zip?.length > 0 ? (
              <ZipContainer>{zip}</ZipContainer>
            ) : (
              <>
                <div className="font-semibold rounded-xl">
                  {/* <div className="bg-primary px-5 text-white font-semibold rounded-xl"> */}
                  <TranslatedText> Select your address from the map</TranslatedText>
                </div>
              </>
            )}

            {address1 && (
              <div className="mb-5 mt-2 font-semibold txt-primary">
                <TranslatedText>Address:</TranslatedText>{" "}
                <span className="font-normal">
                  {" "}
                  <TranslatedText>{address1}</TranslatedText>
                </span>
              </div>
            )}

            <div className="flex items-center txt-primary font-semibold gap-[4px]">
              {/* <span className="txt-base opacity-60">or</span> */}
              <MdMyLocation />
              <button
                className="font-semibold"
                onClick={() => {
                  setLocationModalOpen(true);
                }}
              >
                <TranslatedText>Use my current location</TranslatedText>
              </button>
            </div>

            <div className="self-start">
              <Button primary onClick={handleSubmit}>
                <TranslatedText>Continue</TranslatedText>
              </Button>
            </div>
          </div>

          <LocationDialog open={locationModalOpen} onClose={() => setLocationModalOpen(false)} onConfirm={onConfirm}></LocationDialog>
        </ContentBox>
      </div>
    </div>
  );
}

const Form = styled.form`
  .ReactFlagsSelect-module_selectOptions__3LNBJ {
    max-height: 335px !important;
    background-color: ${(p) => p.theme.paper};
  }
`;
const ZipContainer = styled.div`
  background-color: ${(p) => p.theme.pure};
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
`;

const ContentBox = styled.div`
  // padding: 20px 40px;
  max-width: 600px;
  width: 100%;
`;

const Input = styled.input`
  // width: 100%;
  // border-bottom: 1px solid ${(p) => p.theme.border};
  // background: transparent;
  // padding-bottom: 0.5em;
  border: 1px solid ${(p) => p.theme.border};
  border: 1px solid #bbb;
  background-color: ${(p) => p.theme.paper};
  border-radius: 5px;
  padding: 0.5em;
`;

export const CountryPik = styled.div`
  .ReactFlagsSelect-module_flagsSelect__2pfa2 {
    padding-bottom: 0;
  }

  .ReactFlagsSelect-module_selectOptions__3LNBJ {
    max-height: 260px;
    background: ${(p) => p.theme.paper};
  }

  .ReactFlagsSelect-module_filterBox__3m8EU {
    background: ${(p) => p.theme.paper};

    input {
      background: ${(p) => p.theme.paper};
      color: inherit;
    }
  }
`;

// if (address1 === "") {
//   toast.error("Please select your address from the map");
// } else {
//   setData((data) => ({
//     ...data,
//     country,
//     countryCode,
//     zip,
//     city,
//     state,
//     address: address1,
//   }));
//   document.getElementById("fname").classList.remove("hidden");
//   router.push("#fname");
// }
