import { PrimaryBtn } from "@/styles/Btn.styled";
import { H1 } from "@/styles/Typography.styled";
import { castingPreferences } from "@/utils/constants/profile";
import BackToTop from "components/BackToTop";
import Button from "components/Button";
import Checkbox from "components/Checkbox";
import CreateAccountBox from "components/CreateAccountBox";
import JobCart from "components/jobs/JobCart";
import Spinner from "components/Spinner";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { getAllMarketsApi, getLocationByIp, getNearestMarketsApi, getSelectedCastingCategories, setCastingCategories, setSelectedMarketsApi } from "network/apis/ownProfile";
import path from "path";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { CastingPreferencesContainer, ContentContainer } from "./styles";
import MarketSelects from "containers/MarketSelects";

const ListItem = ({ children, selected, onClick }: any) => {
  const [checked, setChecked] = useState(selected)
  useEffect(() => {
    setChecked(selected)
  }, [selected])

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        size={22}
        checked={checked}
        onChange={() => {
          setChecked((s) => !s)
          onClick()
        }}
      />
      <span onClick={() => {
        setChecked((s) => !s)
        onClick()
      }} className="cursor-pointer text-sm">{children}</span>
      {/* <small className="txt-primary">{selected ? "true" : "false"}</small> */}
    </div>
  )
}

export default function CastingPreferences() {
  const { token, auth: { authenticated } } = useAuth();
  const { profile } = useProfileStore()
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [nearestmarketsss, setNearestMarketsss] = useState<MarketItemD[]>([])
  const [marketLoading, setMarketLoading] = useState(false)
  const [markets, setMarkets] = useState<MarketItemD[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedMarkets, setSelectedMarkets] = useState<SelectedMarketD>({
    market1: { market_id: null, parent_id: [] },
    market2: { market_id: null, parent_id: [] },
    market3: { market_id: null, parent_id: [] }
  })
  const [selectedCat, setSelectedCat] = useState([])
  const [termsAccepted, setTermsAccepted] = useState(false)

  console.log("profile: ", profile)

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     try {
  //       const res = await getLocationByIp();
  //       const res2 = await getAllMarketsApi();
  //       setLat(res?.lat);
  //       setLon(res?.lon);
  //       setMarkets(res2?.data)
  //     } catch (err) { console.log(err) }
  //   }

  //   fetchLocation()
  // }, [])

  useEffect(() => {
    if (!token) {
      return
    }

    const getSelectedCat = async () => {
      try {
        const res = await getSelectedCastingCategories({ token })
        console.log("res: ", res)
        setSelectedCat(res?.data[0]?.categories)
      } catch (err) {
        console.log("error: ", err);
      }
    }
    getSelectedCat();
  }, [token])

  const onSave = async () => {
    // if (!termsAccepted) {
    //   toast.error("Please tick")
    //   return;
    // }

    try {
      // const res = await setCastingCategories({ token, raw: { "cat_18": 1 } });
      setLoading(true);

      const unSelectedArr = castingPreferences.filter(item => !selectedCat.includes(item.id)).map(i => i.id)

      const raw1 = selectedCat.map(i => {
        return (
          `cat_${i < 10 ? "0" : ""}${i}`
        )
      }).reduce((accumulator, value) => {
        return { ...accumulator, [value]: 1 };
      }, {})

      const raw2 = unSelectedArr.map(i => {
        return (
          `cat_${i < 10 ? "0" : ""}${i}`
        )
      }).reduce((accumulator, value) => {
        return { ...accumulator, [value]: 0 };
      }, {})

      const raw = { ...raw1, ...raw2 }

      const res = await setCastingCategories({
        token, raw: raw
      });



      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("selectedMarkets: ", selectedMarkets)
  }, [selectedMarkets])

  if (!authenticated) {
    return <CreateAccountBox />
  }

  return (
    <CastingPreferencesContainer className="padding-small">
      <BackToTop />
      <main className="padding-x lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
        <div className="left">
          <H1 className=" sm:px-0">Job Preferences</H1>
          <div className="text-xs sm:text-base mt-2 sm:mt-5  sm:px-0">We will find the most suitable auditions for you based on your preferences below, combined with your personal attributes</div>

          <ContentContainer className="px-4 md:px-10 pt-10 pb-20 mt-5 text-sm -mx-5 sm:mx-0">
            {/* Film / Theatre */}
            <div className="pref-container">
              <div className="pref-heading mb-5 flex items-center gap-2">
                {/* <Checkbox
                  size={22}
                  checked={checkfilmTheater}
                  onChange={() => {
                    setCheckfilmTheater((s) => !s)
                  }}
                /> */}
                {/* <span onClick={() => setCheckfilmTheater((s) => !s)} className="cursor-pointer">Film / Theatre</span> */}
                <span className="cursor-pointer">Film / Theatre</span>
              </div>
              <div className="flex flex-wrap items-center gap-5">
                {castingPreferences.filter(i => i.label.includes("Feature Film -")
                  || i.label.includes("Internet")
                  || i.label.includes("Industrial/Traning Films")
                  || i.label.includes("Theatre")).map((item: any) => (
                    <div key={item.id} className="pref-item">
                      <ListItem
                        onClick={() => setSelectedCat(prevArr => prevArr.includes(item.id) ? prevArr.filter(i => i !== item.id) : [...prevArr, item.id])}
                        selected={selectedCat.includes(item.id)}
                      >{item.label.includes(" - ") && !item.label.includes("Theatre") && !item.label.includes("SAG") && !item.label.includes("Non-SAG") ? item.label.split(" - ")[1] : item.label}
                      </ListItem>
                    </div>
                  ))}
              </div>
            </div>

            {/* Television */}
            <div className="pref-container">
              <div className="pref-heading mb-5 flex items-center gap-2">
                {/* <Checkbox
                  size={22}
                  checked={checkTelevision}
                  onChange={() => setCheckTelevision((s) => !s)}
                /> */}
                {/* <span onClick={() => setCheckTelevision((s) => !s)} className="cursor-pointer">Television</span> */}
                <span className="cursor-pointer">Television</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {castingPreferences.filter(i => i.label.includes("TV") || i.label.includes("Infomercials")).map((item: any) => (
                  <>
                    {
                      item.label.includes(" - ") ? item.label.split(" - ")[1].includes('TV/Radio')
                        ?
                        ""
                        :
                        <div key={item.id} className="pref-item">
                          <ListItem selected={selectedCat.includes(item.id)} onClick={() => setSelectedCat(prevArr => prevArr.includes(item.id) ? prevArr.filter(i => i !== item.id) : [...prevArr, item.id])}>{item.label.split(" - ")[1]}</ListItem>
                        </div> :
                        <div key={item.id} className="pref-item">
                          <ListItem selected={selectedCat.includes(item.id)} onClick={() => setSelectedCat(prevArr => prevArr.includes(item.id) ? prevArr.filter(i => i !== item.id) : [...prevArr, item.id])}>{item.label}</ListItem>
                        </div>
                    }
                  </>
                )
                )
                }
              </div>
            </div>

            {/* Other Acting */}
            <div className="pref-container">
              <div className="pref-heading mb-5 flex items-center gap-2">
                {/* <Checkbox
                  size={22}
                  checked={checkActing}
                  onChange={() => setCheckActing((s) => !s)}
                /> */}
                {/* <span onClick={() => setCheckActing((s) => !s)} className="cursor-pointer">Other Acting</span> */}
                <span className="cursor-pointer">Other Acting</span>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                {castingPreferences.filter(i => i.label.includes("Acting -") || i.label.includes("Extras") || i.label.includes("Voice-over")).map((item: any) => (
                  <div key={item.id} className="pref-item">
                    <ListItem
                      selected={selectedCat.includes(item.id)}
                      onClick={() => setSelectedCat(prevArr => prevArr.includes(item.id) ? prevArr.filter(i => i !== item.id) : [...prevArr, item.id])}>{item.label.includes(" - ") ? item.label.split(" - ")[1] : item.label}</ListItem>
                  </div>
                ))}
              </div>
            </div>

            {/* Modeling */}
            <div className="pref-container">
              <div className="pref-heading mb-5 flex items-center gap-2">
                {/* <Checkbox
                  size={22}
                  checked={checkModeling}
                  onChange={() => setCheckModeling((s) => !s)}
                /> */}
                {/* <span onClick={() => setCheckModeling((s) => !s)} className="cursor-pointer">Modeling</span> */}
                <span className="cursor-pointer">Modeling</span>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                {castingPreferences.filter(i => i.label.includes("Modeling -") || i.label.includes("Trade Shows")).map((item: any) => (
                  <div key={item.id} className="pref-item">
                    <ListItem selected={selectedCat.includes(item.id)} onClick={() => setSelectedCat(prevArr => prevArr.includes(item.id) ? prevArr.filter(i => i !== item.id) : [...prevArr, item.id])}>{item.label.includes(" - ") ? item.label.split(" - ")[1] : item.label}</ListItem>
                  </div>
                ))}
              </div>
            </div>

            {/* Dance */}
            <div className="pref-container">
              <div className="pref-heading mb-5 flex items-center gap-2">
                {/* <Checkbox
                  size={22}
                  checked={checkDance}
                  onChange={() => setCheckDance((s) => !s)}
                /> */}
                {/* <span onClick={() => setCheckDance((s) => !s)} className="cursor-pointer">Dance</span> */}
                <span className="cursor-pointer">Dance</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {castingPreferences.filter(i => i.label.includes("Dance -") || i.label.includes("Music Videos")).map((item: any) => (
                  <div key={item.id} className="pref-item">
                    <ListItem selected={selectedCat.includes(item.id)} onClick={() => setSelectedCat(prevArr => prevArr.includes(item.id) ? prevArr.filter(i => i !== item.id) : [...prevArr, item.id])}>{item.label.includes(" - ") ? item.label.split(" - ")[1] : item.label}</ListItem>
                  </div>
                ))}
              </div>
            </div>

            {/* Music */}
            <div className="pref-container">
              <div className="pref-heading mb-5 flex items-center gap-2">
                {/* <Checkbox
                  size={22}
                  checked={checkMusic}
                  onChange={() => setCheckMusic((s) => !s)}
                /> */}
                {/* <span onClick={() => setCheckMusic((s) => !s)} className="cursor-pointer">Music</span> */}
                <span className="cursor-pointer">Music</span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {castingPreferences.filter(i => i.label.includes("Music -")).map((item: any) => (
                  <div key={item.id} className="pref-item">
                    <ListItem selected={selectedCat.includes(item.id)} onClick={() => setSelectedCat(prevArr => prevArr.includes(item.id) ? prevArr.filter(i => i !== item.id) : [...prevArr, item.id])}>{item.label.split(" - ")[1]}</ListItem>
                  </div>
                ))}
              </div>
            </div>

            {/* Crew */}
            <div className="pref-container">
              <div className="pref-heading mb-5 flex items-center gap-2">
                {/* <Checkbox
                  size={22}
                  checked={checkCrew}
                  onChange={() => setCheckCrew((s) => !s)}
                /> */}
                {/* <span onClick={() => setCheckCrew((s) => !s)} className="cursor-pointer">Crew</span> */}
                <span className="cursor-pointer">Crew</span>
              </div>

              <div className="flex flex-wrap items-center gap-5">
                {castingPreferences.filter(i => i.label.includes("Crew -")).map((item: any) => (
                  <div key={item.id} className="pref-item">
                    <ListItem selected={selectedCat.includes(item.id)} onClick={() => setSelectedCat(prevArr => prevArr.includes(item.id) ? prevArr.filter(i => i !== item.id) : [...prevArr, item.id])}>{item.label.split(" - ")[1].includes("&amp;") ? item.label.split(" - ")[1].replace("&amp;", "&") : item.label.split(" - ")[1]}</ListItem>
                  </div>
                ))}
              </div>
            </div>

            <MarketSelects />
            
          </ContentContainer>
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
    </CastingPreferencesContainer>
  );
}

/* FIXME: commersial (NON-SAG) missing in television*/


// ------------


// const [checkfilmTheater, setCheckfilmTheater] = useState(false)
// const [checkTelevision, setCheckTelevision] = useState(false)
// const [checkActing, setCheckActing] = useState(false)
// const [checkModeling, setCheckModeling] = useState(false)
// const [checkDance, setCheckDance] = useState(false)
// const [checkMusic, setCheckMusic] = useState(false)
// const [checkCrew, setCheckCrew] = useState(false)

// -------------


// useEffect(() => {
//   if (selectedCat.some(element => {
//     return filmTheaterArr.includes(element);
//   })) {
//     setCheckfilmTheater(true);
//   } else {
//     setCheckfilmTheater(false);
//   }

//   checkfilmTheater &&
//     setSelectedCat(
//       s => [...s, ...castingPreferences.filter(i => i.label.includes("Feature Film -")
//         || i.label.includes("Internet")
//         || i.label.includes("Industrial/Traning Films")
//         || i.label.includes("Theatre")).map((item: any) => (
//           item.id))]
//     )
// }, [checkfilmTheater, selectedCat])

// useEffect(() => {
//   checkTelevision &&
//     setSelectedCat(
//       s => [...s, ...castingPreferences.filter(i => i.label.includes("TV") || i.label.includes("Infomercials")).filter(i => i.label !== "Crew - TV/Radio").map((item: any) => (
//         item.id))]
//     )
// }, [checkTelevision])

// useEffect(() => {
//   checkActing &&
//     setSelectedCat(
//       s => [...s, ...castingPreferences.filter(i => i.label.includes("Acting -") || i.label.includes("Extras") || i.label.includes("Voice-over")).map((item: any) => (
//         item.id))]
//     )
// }, [checkActing])

// useEffect(() => {
//   checkModeling &&
//     setSelectedCat(
//       s => [...s, ...castingPreferences.filter(i => i.label.includes("Modeling -") || i.label.includes("Trade Shows")).map((item: any) => (
//         item.id))]
//     )
// }, [checkModeling])

// useEffect(() => {
//   checkDance &&
//     setSelectedCat(
//       s => [...s, ...castingPreferences.filter(i => i.label.includes("Dance -") || i.label.includes("Music Videos")).map((item: any) => (
//         item.id))]
//     )
// }, [checkDance])

// useEffect(() => {
//   checkMusic &&
//     setSelectedCat(
//       s => [...s, ...castingPreferences.filter(i => i.label.includes("Music -")).map((item: any) => (
//         item.id))]
//     )
// }, [checkMusic])

// useEffect(() => {
//   checkCrew &&
//     setSelectedCat(
//       s => [...s, ...castingPreferences.filter(i => i.label.includes("Crew -")).map((item: any) => (
//         item.id))]
//     )
// }, [checkCrew])
// useEffect(() => {
//   checkfilmTheater &&
//     setSelectedCat(
//       s => [...s, ...castingPreferences.filter(i => i.label.includes("Feature Film -")
//         || i.label.includes("Internet")
//         || i.label.includes("Industrial/Traning Films")
//         || i.label.includes("Theatre")).map((item: any) => (
//           item.id))]
//     )
// }, [checkfilmTheater])