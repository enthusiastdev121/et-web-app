import { PrimaryBtn } from "@/styles/Btn.styled";
import { getFeaturedTalentApi } from "network/apis/featuredTalent";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Skel from "./Skel";
import { rgba } from "polished"

export default function FeaturedTalent() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {

        const res = await getFeaturedTalentApi();
        setData(res.data);
        setLoading(false);
      }
      catch (err) {


      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2 className="mb-5">Featured Talents</h2>

      <div className="grid grid-cols-3 gap-5">
        {loading ? (
          <>
            <Skel />
            {/* loading... */}
          </>
        ) : (
          <>
            {data?.filter(
              (i: any) =>
                i?.profile_picture_path !== "" && i?.profile_picture_path !== null
            )?.map((i: any, index: number) => {
              if (index < 15) {
                return (
                  <FeaturedCard key={i?.talentnum}>
                    <div
                      className="image-container cursor-pointer"
                      onClick={() => {
                        router.push(`/${i.talentlogin}`);
                      }}
                    >
                      {i?.profile_picture_path ? (
                        <img
                          src={i?.profile_picture_path}
                          alt={i?.fname}
                        // height={139}
                        // width={93}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="name">{i?.fname}</div>
                  </FeaturedCard>
                );
              }
            })}
          </>
        )}
      </div>

      <BeFeaturedCard>
        <Image
          src="/images/beFeaturedTalent.png"
          alt="become featured"
          layout="fill"
        />

        <div className="overlay">
          <div className="-mb-4">
            <Image
              src="/svg/tick-vector.svg"
              alt="tick"
              height={43}
              width={45.44}
            />
          </div>

          <h3>Step ahead of the competition now!</h3>

          <Link href="/upgrade-to-featured" passHref>
            <PrimaryBtn className="btn">Be a Featured Talent</PrimaryBtn>
          </Link>
        </div>
      </BeFeaturedCard>
    </div>
  );
}

const FeaturedCard = styled.div`
  .image-container {
    background: #000;
    width: 93px;
    height: 139px;
    border-radius: 4px;
  }

  img {
    width: 93px;
    height: 139px;
    border-radius: 4px;
    display: block;
  }

  .name {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: ${(p: any) => rgba(p.theme.base, 0.7)};
    margin-top: 5px;
  }
`;

const BeFeaturedCard = styled.div`
  position: relative;
  height: 269px;
  width: 330px;
  margin-top: 20px;
  border-radius: 4px;
  overflow: hidden;

  .overlay {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #ffffff;
  }
  img {
  }

  .name {
  }
`;
