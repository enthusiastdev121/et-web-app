import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { GOOGLE_MAPS_API_KEY } from "@/utils/constants/config";
import Button from "components/Button";
import SelectCountry from "components/profile/edit/SelectCountry";
import LocationDialog from "components/profile/modals/LocationDialog";
import { CountryPik } from "containers/CompleteSignup/slides/Styles";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { fetchZipApi } from "network/apis/auth";
import { getLocationByIp, updateProfileDetailApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md"
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
import ReactFlagsSelect from "react-flags-select";
import styled from "styled-components";
import { rgba } from "polished";
import lookup from 'country-code-lookup'
import MarketSelects from "containers/MarketSelects";

export default function EditLocation() {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const router = useRouter();
  const { user, token } = useAuth();
  const { setProfile, profile } = useProfileStore();
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(profile.city);
  const [state, setState] = useState(profile.state);
  const [country, setCountry] = useState(profile?.country || "");
  const [countryCode, setCountryCode] = useState(lookup.byCountry(country)?.fips || "");
  const [zip, setZip] = useState(profile?.zip || "");
  const [loadingAddress, setLoadingAddress] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [address, setAddress] = useState({
    city: "",
    state: "",
  });
  const [address1, setAddress1] = useState(profile?.address || "");
  const [currentLocation, setCurrentLocation] = useState("");
  const zipRef = useRef(null)
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  useEffect(() => {
    setCountryCode(lookup.byCountry(country)?.fips || "")
  }, [country])

  useEffect(() => {

    if (profile.country) {
      setCountry(profile.country)
    }
  }, [profile.country])




  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await getLocationByIp()
        setCurrentLocation(res.country)

        // if (country === "" && !profile.country) {
        //   setCountry(res.country)
        // }
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }
    getLocation()
  }, [])

  const onSave = async () => {
    // if (!zip.trim()) {
    //   return;
    // }
    try {
      setLoading(true);
      const res = await updateProfileDetailApi({
        token,
        talentnum: user?.talentnum,
        raw: {
          zip,
          country,
          city,
          state,
          address1: countryCode === "US" ? "" : address1
        },
      });
      setLoading(false);
      setProfile((s) => ({ ...s, zip, country, city, state, address: address1 }));
      router.back();
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  };

  useEffect(() => {
    const fetchZip = async () => {
      try {
        setLoadingAddress(true);
        const res = await fetchZipApi({ zip });
        setLoadingAddress(false);
        if (res.zipcode) {
          setErrorMessage("");
          if (res.city) {

            setCity(res?.city);
          }
          setCountry("United States");
          if (res.state) {

            setState(res?.state);
          }
          // setAddress1("");
          // setAddress((s: any) => ({ ...s, city: res.city, state: res.state }));
        } else {
          setErrorMessage("Enter valid ZIP code");
        }
      } catch (err) {
        setLoadingAddress(false);
        setErrorMessage("Enter valid ZIP code");

        console.log("Err", err);
      }
    };

    if (zip.trim()) {
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

  console.log(state, city, "JJJJJJJJJj")
  return (
    <ParentContainer className="padding-small">
      <div
        className="padding-x"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between ">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">My Location</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="grow flex items-center content w-full">
          <ContentBox className="mx-auto">
            <div className="flex flex-col gap-4 mb-8">
              <CountryPik className="bg-paper">
                <ReactFlagsSelect
                  searchable={true}
                  selected={countryCode}
                  onSelect={(code) => setCountryCode(code)}
                />
              </CountryPik>

              {currentLocation === "United States" || countryCode === "US" ? (
                <>
                  <div className="flex flex-col gap-5 items-start">
                    <label className="text-base font-medium ">
                      Enter you zip code:
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

                  <>
                    {loadingAddress ? (
                      <div>
                        <div>...</div>
                      </div>
                    ) : (
                      <>
                        {errorMessage ? (
                          <div className="txt-danger">Enter a valid zip code</div>
                        ) : address.city ? (
                          <div>
                            <div className="txt-link">
                              <HiLocationMarker
                                style={{
                                  display: "inline-block",
                                  marginRight: 10,
                                }}
                              />
                              {address.city}, {address.state}
                            </div>
                          </div>
                        ) : null}
                      </>
                    )}
                  </>
                </>
              ) : <></>

                // zip.length > 0 ? (
                //   <ZipContainer>{zip}</ZipContainer>
                // ) : 

              }

              <div className="font-bold m-0">State: <span className="font-normal">{state || profile.state || "NA"}</span></div>
              <div className="font-bold m-0">City: <span className="font-normal">{state || profile.city || "NA"}</span></div>


              {(address1 && countryCode !== 'US') ? (
                <div className="  font-semibold ">
                  Address: <span className="font-normal">{address1}</span>
                </div>
              ) : (
                <>
                  <div className="font-semibold rounded-xl">
                    {/* <div className="bg-primary px-5 text-white font-semibold rounded-xl"> */}
                    Select your address from the map
                  </div>
                </>
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
                  {" "}
                  Use my current location
                </button>
              </div>
            </div>

            <LocationDialog
              open={locationModalOpen}
              onClose={() => setLocationModalOpen(false)}
              onConfirm={onConfirm}
            ></LocationDialog>
          </ContentBox>
        </div>

        <div className="flex gap-5 mb-10">
          <Button primary outlined onClick={() => router.back()}>
            Cancel
          </Button>
          <Button loading={loading} size="large" primary onClick={onSave}>
            Save
          </Button>
        </div>
        <div className="border-t-[1px] pt-8">
          <MarketSelects />
        </div>
      </div>

    </ParentContainer>
  );
}

const ContentBox = styled.div`
  // padding: 20px 40px;
  max-width: 600px;
  width: 100%;
`;

const ZipContainer = styled.div`
background-color: ${(p: any) => p.theme.paper};
  border: 1px solid ${(p: any) => rgba(p.theme.base, 0.3)};
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;`


{/* <div>
    <div className="mb-5">
  
      <CountryPik className="bg-paper">
        <ReactFlagsSelect
          selected={countryCode || "US"}
          onSelect={(code: any) => setCountryCode(code)}
        />
      </CountryPik>
    </div>
  
    {currentLocation === "United States" ?
  
      <>
        <Input
          type="text"
          placeholder="zip code"
          value={zip}
          onChange={(e) => {
            setZip(e.target.value);
          }}
        />
  
        <div className="mt-2">
          <div>
            {loadingAddress ? (
              <div>
                <div>...</div>
              </div>
            ) : (
              <>
                {errorMessage ? (
                  <div className="txt-danger">Enter a valid zip code</div>
                ) : address.city ? (
                  <div>
                    <div className="txt-link">
                      <HiLocationMarker
                        style={{ display: "inline-block", marginRight: 10 }}
                      />
                      {address.city}, {address.state}
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </>
      : zip ?
        <ZipContainer>
          {zip}
        </ZipContainer>
        : ""
    }
  
  
  
    <div className="my-5 font-semibold txt-primary">{address1 && <>Address: <span className="font-normal">{address1}</span></>}</div>
  
    <div className="flex items-center txt-primary font-semibold gap-[4px]">
      <span className="text-[#3C3C4399]">or</span><MdMyLocation /><button className="font-semibold" onClick={() => {
        setDeleteDialog(true);
      }}> Use my current location</button>
    </div>
  
    <LocationDialog open={deleteDialog} onClose={() => setDeleteDialog(false)} onConfirm={onConfirm}>
    </LocationDialog>
  
  
    <small className="mt-5 block text-center dim-text text-sm mb-10">
      <strong>Note:</strong> Updating your location will update all your
      previous application
    </small>
  </div> */}