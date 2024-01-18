import {
  formatContestantDetailSlug,
  formatContestDetailSlug,
} from "@/utils/helper";
import { useAuth } from "context/AuthContext";
import { submitVote } from "network/apis/contest";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineHowToVote, MdOutlineRemoveRedEye } from "react-icons/md";
import styled from "styled-components";
import ReactPlayer from 'react-player'
import Skeleton from "react-loading-skeleton";


const Card = ({
  img,
  entryImage,
  name,
  votes,
  score,
  views,
  featured,
  contest_name,
  contest_id,
  title,
  cm_id,
  talentnum,
  accept_pic,
  accept_video,
  video,
  user_rating,
  is_voted
}: any) => {
  const { token, user }: any = useAuth();
  const [rateSelection, setrateSelection] = useState(0);
  const [successfully, setsuccessfully] = useState(false);
  const [loading, setloading] = useState(false);
  const [fully, setFully] = useState(false);
  const showSucessfully = async (cm_id: any, talentnum: any) => {

    try {

      setloading(true)
      let raw = {
        cm_id: cm_id,
        of_talentnum: talentnum,
        status: "1",
        score: rateSelection,
        by_ip_address: "99.60.67.136"
      }

      const result = await submitVote(JSON.stringify(raw), token)
      if (result) {
        setsuccessfully(true)
        setloading(false)
      }
    }
    catch (err) {
      console.log("ERR", err)
    }
  }

  const stopMovie = (e: any) => {
    e.target.pause();
  }

  const playMovie = (e: any) => {
    e.target.play();
  }


  return (
    <div className="card relative">
      <div className="img-container ">
        {featured && <FeaturedBadge className="px-2">Featured</FeaturedBadge>}
        <Link
          href={`/contestants/${formatContestDetailSlug(
            contest_name,
            contest_id
          )}/${formatContestantDetailSlug(name, title || name, talentnum)}`}
        >
          <a className="w-full">
            {/* <img className="contestant-img" src={img} alt="entry" /> */}
            {accept_pic == 1 &&
              <img className="contestant-img" src={entryImage || img} alt="entry" />
            }
            {accept_video == 1 &&
              <>
                <video
                  className="contestant-img"
                  width="100%"
                  controls
                  onMouseOver={playMovie}
                  onMouseOut={stopMovie}
                  src={video}
                />
              </>
            }
          </a>
        </Link>
      </div>
      <div className="info-container">

        <Link
          href={`/contestants/${formatContestDetailSlug(
            contest_name,
            contest_id
          )}/${formatContestantDetailSlug(name, title || name, cm_id)}`}
        >
          <div className="person-title">
            <img className="person-img object-cover" src={img} alt="entry" />

            <h1>{name}</h1>
          </div>
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-3 mt-2">
          <ol className="list-reset flex">
            <li className="content-list"><h1 className="text-color-primary hover:text-color-primary action-panel">{votes}</h1> <span>Votes</span></li>
            <li className="padding-hi"><span className="text-color-secondory mx-2">|</span></li>
            <li className="content-list"><h1 className="text-color-primary hover:text-color-primary action-panel">{score ?? 0}</h1> <span>Score</span></li>
            <li className="padding-hi"><span className="text-color-secondory mx-2">|</span></li>
            <li className="content-list"><h1 className="text-color-primary hover:text-color-primary action-panel">{views}</h1> <span>Views</span></li>
          </ol>
        </div>



      </div>
      <div className="voting-content">
        <div className="border-top"></div>

        {is_voted == false &&
          <>
            {!loading && successfully == false &&
              <>
                <h1>How would you rate this entry?</h1>
                <div className="relative mb-1">
                  <div className="rating">

                    {
                      Array.from(Array(10).keys()).map((y, i) => (
                        <div key={i} className={rateSelection == (y + 1) ? "text-center rate-count-active" : "text-center rate-count-deactive"} onClick={() => { setrateSelection(y + 1) }}>
                          <h2 className="w-full">{y + 1}</h2>
                        </div>
                      ))
                    }


                  </div>
                  <div className="rating-titie">
                    <div className="bad-count">Bad</div>
                    <div className="great-count">Great</div>
                  </div>
                </div>
                <div className="text-center mb-5">
                  <button className="submit-vote" onClick={() => { showSucessfully(cm_id, talentnum) }}>
                    Submit vote
                  </button>
                </div>
              </>
            }
            {loading && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
              {[1].map((i) => {
                return (
                  <div key={i}>
                    <Skeleton style={{ height: 46, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                    <Skeleton style={{ height: 23, width: "20%", borderRadius: 8, marginBottom: 4 }} />
                  </div>
                );
              })}
            </div>}
            {successfully == true &&
              <div className="sucessfully-badge">
                <h5>{rateSelection}</h5>
                <p>Vote successfully submitted</p>
              </div>
            }
          </>
        }

        {is_voted == true &&
          <div className="sucessfully-badge">
            <h5>{user_rating}</h5>
            <p>Vote successfully submitted</p>
          </div>
        }

      </div>
    </div>
  );
};

export default Card;

const FeaturedBadge = styled.div`
  position: absolute;
  background: linear-gradient(320.66deg, #00A73A 14.75%, #37C96A 84.81%);
  filter: blur(0.0873219px);
  border-radius: 43.6609px;
  font-weight: 600;
  font-size: 18.6208px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  width: fit-content;
  top: 5px;
  right: 6px;
`;


