import { useEffect, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import styled from "styled-components";
import { CastingCallD } from "types/casting";
import CardCarousel from "./Caruosel";
import { formatAudtionDetailSlug, formatDate, getTimeRemaining } from "@/utils/helper";
import { differenceInHours, format } from "date-fns";
import { getFeaturedCastingApi, getHomeAllCastingApi } from "network/apis/homePage";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ZSkel from "components/ZSkel";
import Link from "next/link";
import CountdownTimer from "components/CountdownTimer";
import { useCountdown } from "hooks/useCountdown";
import { FontFamily } from "./styles";


const arr = [
  {
    id: 1,
    name: `"Shrek the Musical" Auditions in WI`,
    location: "Saint Louis, MO",
    rate: 2000,
    time: 1658202131,
  },
  {
    id: 2,
    name: `Joseph & Amazing Technicolor Dreamcoat`,
    location: "Cleveland, OH",
    rate: 5000,
    time: 1663202100,
  },
  {
    id: 3,
    name: `Cupid's Comeback Documentary`,
    location: "Cleveland, OH",
    rate: 5000,
    time: 1658202100,
  },
  {
    id: 4,
    name: `Auditions Persona Voiceovers`,
    location: "Cleveland, OH",
    rate: 5000,
    time: 1663202100,
  },
  {
    id: 5,
    name: `"Guest" Short Film, $1`,
    location: "Cleveland, OH",
    rate: 5000,
    time: 1658202100,
  },
  {
    id: 6,
    name: `"A Christmas Carol" Auditions in KY`,
    location: "Cleveland, OH",
    rate: 5000,
    time: 1663202100,
  },
];

const filters = [
  "Featured",
  "Acting",
  "Modeling",
  "Musicians",
  "Dance",
  "Crew",
];
const CASTING_DATA = {
  "Acting": "41,42,43,61",
  "Modeling": "18,19,20",
  "Musicians": "29,30,31,32,33",
  "Dance": "53,54,55,56,57,58",
  "Crew": "34,35,36,37,38,39,47,48,49,50,51,52",
}

const NavItem = ({ children, activeBtn, onClick }: { children: any, activeBtn: boolean, onClick: any }) => {
  // const [active, setActive] = useState(activeBtn);
  return (
    <button
      className={
        activeBtn
          ? "nav-btn-active"
          : "nav-btn"
      }
      onClick={() => {
        // setActive(!active)
        onClick()
      }}
    >
      {children}
    </button>
  );
};

const Card = ({ name, location, time, rate, zip, casting_id }: CastingCallD) => {
  const [localEnd, setLocalEnd] = useState(new Date());
  const [clock, setClock] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    let int: any;
    // if (differenceInHours(new Date(time * 1000), new Date()) < 0) {
    //   setIsActive(false);
    // }

    int = setInterval(() => {
      setLocalEnd(new Date());
    }, 1000);

    return () => {
      if (int) {
        clearInterval(int);
      }
    };
  }, [localEnd]);

  useEffect(() => {
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(new Date(time * 1000));
      setClock({ days: t.days, hours: t.hours, minutes: t.minutes, seconds: t.seconds })

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);

    return () => clearInterval(timeinterval)

  }, [time, clock])

  const [days, hours, minutes, seconds] = useCountdown(time * 1000);

  return (
    <div className="casting-card">
      <Link href={`/auditions/${formatAudtionDetailSlug(name + " " + location + " " + zip, casting_id)}`}>
        <a>
          <h3 className="font-bold">{name}</h3>
        </a>
      </Link>

      <div className="flex gap-3 items-center my-4 text-sm">
        <div className="font-medium" style={{ color: "#0070F4" }}>
          <HiLocationMarker className="text-lg inline-block -mt-1" /> {location}
        </div>
        {/* {rate === 0.00 ? <div className="font-semibold">Unpaid</div> : <div className="font-semibold">${rate} Rate</div>} */}
        {rate !== "0.00" && <div className="font-semibold">${rate} Rate</div>}
      </div>

      {/* <div className="flex items-center gap-3">
        <span className="font-semibold text-sm flex items-center justify-center time" >Posted at: {formatDate(time * 1000)} </span>
        <span>Ending in: </span>
        <div className="font-semibold text-sm flex items-center justify-center time">
          <span className="box">
            {Math.round(
              differenceInHours(new Date(time * 1000), new Date()) / 60
            )}
            d
          </span>
          <span className="mx-1"></span>
          <span className="box">
            {Math.abs(differenceInHours(new Date(time * 1000), new Date()) - Math.round(
              differenceInHours(new Date(time * 1000), new Date()) / 60
            ) *
              60)}
            h
          </span>
          <span className="mx-1"></span>
          <span className="box">{60 - format(localEnd, "mm")}m</span>
          <span className="mx-1"></span>
          <span className="box">{60 - format(localEnd, "ss")}s</span>
        </div>
      </div> */}

      {!(seconds < 0) && <div className="flex items-center">
        <h6 className="font-semibold text-sm title txt-base">Ending in: &nbsp;&nbsp;</h6>
        <div className="flex items-center justify-center time">
          <span className="">
            {days}d
          </span>
          <span className="mx-1"></span>
          <span className="">
            {hours}h
          </span>
          <span className="mx-1"></span>
          <span className="">{minutes}m</span>
          <span className="mx-1"></span>
          <span className="">{seconds}s</span>
        </div>
      </div>}
    </div>
  );
};

export default function CastingCalls() {
  const [loading, setLoading] = useState(false)
  const [castingData, setCastingData] = useState([])
  const [category, setCategory] = useState("Featured")

  const fetchFeaturedJobs = async () => {
    try {
      setLoading(true)
      const res = await getFeaturedCastingApi();
      console.log(res);

      if (res) {
        setCastingData(res);
        console.log("castingData", castingData);
      }
      setLoading(false)
    } catch (err) {
      console.log("Err", err)
      setLoading(false)
    }
  }

  const getHomeCategories = async () => {
    try {
      setLoading(true)
      const res = await getHomeAllCastingApi({ filterData: CASTING_DATA[category] });


      if (res) {
        setCastingData(res);
        console.log("castingData", castingData);
      }
      setLoading(false)
    } catch (err) {
      console.log("Err", err)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (category === "Featured") {
      fetchFeaturedJobs()

    } else {

      getHomeCategories();
    }

  }, [category])

  return (
    <div className="pb-5 -mt-32" style={{ background: `linear-gradient(180deg, #fafafa 0%, #fafafa 100%)` }}>

      <Root className="flex items-center justify-center gap-3 flex-col lg:flex-row">
        {/* heading text */}
        <div className="heading-container lg:-mt-20">
          <div className="heading-top">Casting Calls</div>
          <FontFamily>
            <h2 className="">Ongoing <span style={{}}>{category} </span> <br />
              Castings for today</h2>
          </FontFamily>

        </div>
        <div className="carousel-container">
          {loading ? (
            <>
              {/* <div 
      style={{  display: "flex", padding: "10px 10px", gap: 20 }}
      > */}
              <div className="flex gap-4">

                {[1, 2, 3].map((i) => {
                  return (
                    <div
                      key={i} className='aspect-video relative' style={{ width: 250 }} >
                      <ZSkel />
                    </div>
                  );
                })}
              </div>

              {/* </div> */}

            </>
          ) :
            <CardCarousel ht={"86%"}>
              {castingData.map((i: CastingCallD) => (
                <Card
                  key={i.casting_id}
                  name={i?.name}
                  location={i.location}
                  time={i.asap}
                  rate={i.rate}
                  zip={i.zip}
                  casting_id={i.casting_id}
                // {...i}
                />
              ))}
            </CardCarousel>
          }
          {/* card carousel */}
          {/* <CardCarousel ht={"86%"}>
            {castingData.map((i: CastingCallD) => (
              <Card
                key={i.casting_id}
                name={i.name}
                location={i.location}
                time={i.date_created}
                rate={i.rate}
              />
            ))}
          </CardCarousel> */}

          {/* nav */}
          <nav className="md:flex items-center md:gap-5 mt-5 md:mt-11 md:ml-8 flex-wrap md:text-sm xl:text-base grid grid-cols-3 gap-1 text-xs">
            {filters.map((i: string, index: number) => (
              <NavItem key={i} activeBtn={
                i === category ? true : false
              } onClick={() => {
                setCategory(i)

              }
              }
              >{i}</NavItem>
            ))}
          </nav>
        </div>
      </Root>

    </div>
  );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 100px auto;
  position: relative;
  z-index: 20;

  @media (max-width: 450px) {
    width: 95vw;
  }

  .heading-container {
    // width: 30%;
  }

  .carousel-container {
    width: 100%;
    @media (min-width: 1050px) {
      width: 70%;
    }
  }

  .heading-top {
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    color: rgba(60, 60, 67, 0.6);

    @media (max-width: 450px) {
      margin-left: 20px;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 150%;
     color: ${p => p.theme.base};

    @media (min-width: 1050px) {
      font-size: 25px;
    }

    @media (min-width: 1340px) {
      font-size: 30px;
    }

    @media (max-width: 450px) {
      margin-left: 20px;
    }
  }

  .casting-card {
    background: #ffffff;
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.02),
      0px 7px 8px 2px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 3em;
    padding: 3em 2em;
    width: 380px;
    min-height: 220px;

    @media (max-width: 450px) {
      max-width: 90vw;
    }
  }

  .nav-btn {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 100px;
    padding: 1em 1.125em;
  }

  .nav-btn-active {
    background: ${p => p.theme.primary};
    border-radius: 100px;
    color: #fff;
    padding: 1em 1.125em;
    border: 1px solid ${p => p.theme.primary};
  }
`;
