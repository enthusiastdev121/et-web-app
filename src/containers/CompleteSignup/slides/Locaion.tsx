import React, { useEffect, useRef, useState } from "react";
import BottomBar from "../bits/BottomBar";
import Frame from "../bits/Frame";
import {
  ChipBox,
  ContentBox,
  CountryPik,
  HeadingSmall,
  Input,
  SlideHeading,
} from "./Styles";
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

export default function Location({
  onScreenChange,
  onUpdate,
  value,
  prevSlide,
  nextSlide,
  setCurrentSlide,
}: any) {
  const zipRef = useRef(null);
  const [zip, setZip] = useState(value.zip || "");
  const [loadingAddress, setLoadingAddress] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [liveCode, setLiveCode] = useState("")
  const [countryCode, setCountryCode] = useState(value.countryCode || "");
  const [address, setAddress] = useState({
    city: "",
    state: "",
  });
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("United States");
  const [address1, setAddress1] = useState("");
  const [currentLocation, setCurrentLocation] = useState("")

  useEffect(() => {
    if (zip !== "") {
      return;
    }

    const getLocation = async () => {
      try {
        const res = await getLocationByIp()
        setCurrentLocation(res?.country)
        setCountryCode(value.countryCode || res?.countryCode)
        setCity(res?.city)
        setState(res?.regionName)
        setCountry(res?.country)
        setZip(res?.zip)
        console.log("countryCode: ", countryCode)
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }
    getLocation()
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // onUpdate({ zip: zip });
    // onUpdate({ countryCode: countryCode });


    onUpdate({
      country,
      countryCode,
      zip,
      city,
      state,
      address: address1,
    })


    setCurrentSlide(nextSlide);

    // if (address1 === "") {
    //   toast.error("Please select your address from the map");
    // } else {
    //   onUpdate({ zip: zip });
    //   onUpdate({ countryCode: countryCode });

    //   if (zip !== null && zip !== "") {
    //     setCurrentSlide(nextSlide);
    //   } else {
    //     toast.warning("Please enter your zip code");
    //   }
    // }
  };

  useEffect(() => {
    const fetchZip = async () => {
      try {
        setLoadingAddress(true);
        const res = await fetchZipApi({ zip });
        setLoadingAddress(false);
        if (res?.zipcode) {
          setErrorMessage("");
          setAddress((s: any) => ({ ...s, city: res?.city, state: res?.state }));
          setCity(res?.city)
          setState(res?.state)
          setCountry("United States")
          setZip(res?.zipcode)
        } else {
          setErrorMessage("Enter valid ZIP code");
        }
      } catch (err) {
        setLoadingAddress(false);
        setErrorMessage("Enter valid ZIP code");

        console.log("Err", err);
      }
    };

    if (zip?.trim()) {
      fetchZip();
    }
  }, [zip]);

  const onConfirm = (ad1, city, state, country, z1, cCode) => {
    setAddress1(ad1);
    setCity(city);
    setState(state);
    setCountry(country);
    setZip(z1);
    setCountryCode(cCode);
  }

  return (
    <Frame>
      <ToastContainer className="Toastify" />
      <div className="grow flex items-center content">
        <ContentBox>
          <SlideHeading>Enter your location</SlideHeading>

          <div className="flex flex-col gap-8 mb-10">
            <CountryPik className="bg-paper">
              <ReactFlagsSelect
                searchable={true}
                selected={countryCode}
                onSelect={(code: any) => setCountryCode(code)}
              />
            </CountryPik>

            {currentLocation === "United States" || countryCode === "US" ?
              <>
                <Input
                  type="number"
                  placeholder="Zip Code*"
                  value={zip}
                  onChange={(e) => {
                    setZip(e.target.value);
                  }}
                  ref={zipRef}
                />

                <>
                  {loadingAddress ? (
                    <div>
                      <div>...</div>
                    </div>
                  ) : (
                    <>
                      {errorMessage ? (
                        <div className="txt-danger">Enter a valid zip code</div>
                      ) : address?.city ? (
                        <div>
                          <div className="txt-link">
                            <HiLocationMarker
                              style={{ display: "inline-block", marginRight: 10 }}
                            />
                            {address?.city}, {address?.state}
                          </div>
                        </div>
                      ) : null}
                    </>
                  )}
                </>
              </> : zip?.length > 0 ?
                <ZipContainer>{zip}</ZipContainer> : ""
            }



            {address1 && <div className="mb-5 mt-2 font-semibold txt-primary">Address: <span className="font-normal">{address1}</span></div>}

            <div className="flex items-center txt-primary font-semibold gap-[4px]">
              <span className="txt-base opacity-60">or</span><MdMyLocation /><button className="font-semibold" onClick={() => {
                setLocationModalOpen(true);
              }}> Use my current location</button>
            </div>

            <div className="self-start">
              <Button primary onClick={handleSubmit}>
                Ok
              </Button>
            </div>
          </div>

          <LocationDialog open={locationModalOpen} onClose={() => setLocationModalOpen(false)} onConfirm={onConfirm}>
          </LocationDialog>

        </ContentBox>
      </div>
      <BottomBar
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        width={50}
        setCurrentSlide={setCurrentSlide}
        allFilled={true}
        warningText={"Please enter your zip code"}
      />
    </Frame>
  );
}

const Form = styled.form`

.ReactFlagsSelect-module_selectOptions__3LNBJ {
  max-height: 335px !important;
  background-color: ${p => p.theme.paper};
}

`
const ZipContainer = styled.div`
background-color: ${(p: any) => p.theme.pure};
  border: 1px solid ${(p: any) => p.theme.border};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;`