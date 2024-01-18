
import styled from "styled-components";
import CardCarousel from "../exploretalent/Caruosel";

const clients = [
  {
    id: 1,
    pic: "/images/home-hire-1.png",
    name: "Tamzine walshe",
    cat: "Connect Entertainment",
    desc: "“Explore Talent is the No. 1 supplier of referrals to our registration page across every region for the entire tour!”",
  },
  {
    id: 2,
    pic: "/images/home-hire-2.png",
    name: "Wayne Waterson",
    cat: "Revolver Casting",
    desc: "“I needed to find good people fast and ExploreTalent was perfect. By the end of that day I had over 500 people to choose from, perfect”",
  },
];

export default function LookingHire() {
  return (
    <Root className="flex flex-col lg:flex-row items-start gap-5">
      <div className="text-left left lg:mt-10">
        <h2>Looking to hire?</h2>
        <p>
          Reach professional talent and fresh faces by placing a free casting
          call. See applicants&apos; experience, photos, videos, audio and more.
          Easily sort applications, make notes on them and cast the perfect
          talent. Contact and book talent direct.
        </p>
        <button className="BtnPrimary"><span className="text-[24px] ">+</span><span>List&nbsp;a&nbsp;job&nbsp;(FREE)</span></button>
      </div>

      <div className="right">
        <div
          style={{ color: "rgba(60, 60, 67, 0.6)" }}
          className="text-left ml-7 text-lg font-semibold"
        >
          What our happy clients say
        </div>

        <div>
          <CardCarousel ht={"94%"}>
            {clients.map((i) => (
              <Card key={i.id}>
                <img src={i.pic} alt={i?.name} className="block mx-auto" />

                <h3 className="font-semibold text-xl">{i?.name}</h3>

                <small>{i.cat}</small>

                <p>{i.desc}</p>
              </Card>
            ))}
          </CardCarousel>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
  max-width: 1530px;
  width: 80vw;
  margin: 160px auto 160px auto;
  position: relative;
  z-index: 20;
  text-align: center;
  padding: 50px 0 50px 50px;
   color: ${p => p.theme.base};

  @media (max-width: 1050px) {
    padding: 50px;
  }
  @media (max-width: 500px) {
    width: 100vw;
    padding: 0;
  }
.BtnPrimary{
    border:1px solid ${p => p.theme.primary};
    color: ${p => p.theme.primary};
    border-radius: 10px;
    margin: 20px 0px; 
    padding: 10px 30px;
    display: flex;
    align-items: center;
    gap: 10px;

  &:hover {
    color: #ffffff;
    background: ${p => p.theme.primary};
    transition: all 0.2s ease;
  }

  &:active {
    transform: translateY(1px);
  }
}
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 150%;

    @media (min-width: 1530px) {
      font-size: 50px;
    }

    @media (max-width: 510px) {
      line-height: 130%;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;
    margin-top: 20px;
    margin-bottom: 45px;

    @media (min-width: 1530px) {
      font-size: 18px;
    }
  }

  .left {
    width: 40%;

    @media (max-width: 1050px) {
      width: 100%;
    }

    @media (max-width: 500px) {
      padding: 50px 0 50px 50px;
    }
  }

  .right {
    width: 60%;

    @media (max-width: 1050px) {
      width: 100%;
    }

    @media (max-width: 500px) {
      padding: 0 30px;
    }
  }
`;

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.02),
    0px 7px 8px 2px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 80px 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  max-width: 493px;
  min-height: 430px;
  max-height: 500px;

  @media (max-width: 600px) {
    max-width: 80vw;
  }
`;
