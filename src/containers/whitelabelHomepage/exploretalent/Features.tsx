import { numberWithCommas } from "@/utils/helper";
import { getHomePageStatsApi } from "network/apis/homePage";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Features() {
  const [stats, setStats] = useState({
    count_roles: 430,
    count_talents: 9666082,
    count_creators: 66609,
    years_knowledge: 62,
  })
  // const [stats, setStats] = useState({
  //   count_roles: "",
  //   count_talents: "",
  //   count_creators: "",
  //   years_knowledge: "",
  // })

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await getHomePageStatsApi()
        setStats(res)
      } catch (err) {
        console.log(err)
      }
    }

    getStats()
  }, [])

  return (
    <Parent className="relative">
      <div
        className="big-grad hidden lg:block"
        style={{
          position: "absolute",
          width: 1109,
          height: 1108,
          left: -123,
          top: -260,
          background: "url('/images/home-features-grad-1.png')",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div
        className="small-grad hidden lg:block"
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          left: -43,
          top: 50,
          background: "url('/images/home-features-grad-2.png')",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Root>
        <h2>Community and Job opportunity for everybody!</h2>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          <FeatureCard>
            <Image
              src="/images/home-note.png"
              alt="notes"
              width={60}
              height={60}
              priority={true}
            />
            {/* <div className="stats">{numberWithCommas(stats.count_roles)}</div>
            <p>New roles posted this week</p> */}
            <div className="stats">10,000 +</div>
            <p>New Roles posted every month</p> 
          </FeatureCard>

          <FeatureCard>
            <Image
              src="/images/home-profile-user.png"
              alt="user profile"
              width={60}
              height={60}
              priority={true}
            />
            {/* <div className="stats">{numberWithCommas(stats.count_talents)}</div> */}
            <div className="stats">11 Million +</div>
            <p>ExploreTalent members and counting</p>
          </FeatureCard>

          <FeatureCard>
            <Image
              src="/images/home-user-octagon.png"
              alt="creators"
              width={60}
              height={60}
              priority={true}
            />
            {/* <div className="stats">{numberWithCommas(stats.count_creators)}</div>
            <p>Creators looking for talent</p> */}
                 <div className="stats">60,000 +</div>
            <p>Casting Directors and Industry Professionals</p>
          </FeatureCard>

          <FeatureCard>
            <Image
              src="/images/home-teacher.png"
              alt="notes"
              width={60}
              height={60}
              priority={true}
            />
            {/* <div className="stats">{stats.years_knowledge}</div>
            <p>Years of insider knowledge</p> */}
                        <div className="stats">20 +</div>
            <p>Years in business and insider knowledge</p>
          </FeatureCard>
        </div>
      </Root>
    </Parent>
  );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 206px auto 200px auto;
  position: relative;
  z-index: 20;
  text-align: center;

  @media (max-width: 1050px) {
    margin: 100px auto 200px auto;
  }

  @media (max-width: 768px) {
    margin: 30px auto 200px auto;
  }

  h2 {
    font-weight: 700;
    font-size: 34px;
    line-height: 150%;
    text-align: center;
     color: ${p => p.theme.base};
    max-width: 585px;
    margin: 0 auto;
  }
`;

const FeatureCard = styled.div`
  max-width: 362px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.02),
    0px 7px 8px 2px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
   color: ${p => p.theme.base};
  padding: 3em 1em;

  @media (min-width: 1530px) {
    padding: 4em 1em;
  }

  .stats {
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    text-align: center;

    @media (min-width: 1050px) {
      font-size: 32px;
    }

    @media (min-width: 1260px) {
      font-size: 40px;
    }
  }

  p {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }

  img {
    margin-bottom: 10px;
  }
`;

const Parent = styled.div`
  .small-grad {
    animation: rotate 10s infinite;
  }

  .big-grad {
    animation: scale 20s infinite;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;
