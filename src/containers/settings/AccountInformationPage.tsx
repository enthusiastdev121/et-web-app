import Aside from "components/settings/Aside";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { updatePhysicalAttrsApi } from "network/apis/ownProfile";
import Link from "next/link";
import { useRouter } from "next/router";
import { rgba } from "polished";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { ImArrowLeft2 } from "react-icons/im";
import styled from "styled-components";
import { Root, Main, Nav } from "./styles";
import Spinner from "components/Spinner";
import Button from "components/Button"; 

const AGES = [
  {
    id: 1,
    min: 0,
    max: 5,
  },
  {
    id: 2,
    min: 6,
    max: 12,
  },
  {
    id: 3,
    min: 13,
    max: 17,
  },
  {
    id: 4,
    min: 18,
    max: 29,
  },
  {
    id: 5,
    min: 30,
    max: 39,
  },
  {
    id: 6,
    min: 40,
    max: 49,
  },
  {
    id: 7,
    min: 50,
    max: 59,
  },
  {
    id: 8,
    min: 60,
    max: 120,
  },
];

const SEX = [
  'Male', 'Female', 'Others'
];

export default function AccountInformationPage() {
  const router = useRouter();
  const { profile, setProfile } = useProfileStore()
  const { token } = useAuth();
  const [ageRange, setAgeRange] = useState(profile?.ageRange || "")
  const [gender, setGender] = useState(profile?.gender || "")
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    setAgeRange(profile?.ageRange)
  }, [profile?.ageRange])

  useEffect(() => {
    setGender(profile?.gender)
  }, [profile?.gender])

  const onSave = async () => {

    try {
      setLoading(true);
      let kkk = {
        sex: gender === 'Others' ? "" : gender,
        age_range: ageRange,
      };
      const res = await updatePhysicalAttrsApi(
        token,
        JSON.stringify({ ...kkk })
      );

      setLoading(false);

      setProfile((s) => ({
        ...s,
        ageRange,
        gender
      }));
      router.back();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }


  }

  return (
    <Root>
      <Aside active="account" />

      <Main>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Nav>
            <div className="text-xl mr-auto cursor-pointer">
              <ImArrowLeft2
                onClick={() => {
                  router.back();
                }}
              />
            </div>

            <div className="mr-auto title">Account Information</div>
          </Nav>

          <div className="md:hidden font-bold text-xl text-center mb-3">Account Information</div>

          <div className="mb-4">
            Your Talent number is <b>{profile.talentnum}</b> please mention this when you contact our support team for any assistance.
          </div>


          <div>
            <ul className="list">
              <li>
                <h3>Display name</h3>
                <div className="flex items-center gap-2">
                  <div className="list-info">{profile?.displayName || profile?.name}</div>
                  <div
                    className="txt-link font-semibold ml-auto cursor-pointer"
                    onClick={() => router.push("/profile/edit/name")}
                  >
                    Edit
                  </div>
                </div>
              </li>

              <li>
                <h3>Contact number</h3>
                <div className="flex items-center gap-2">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="list-info">Primary</div>
                      <div className="list-info">{profile?.phone}</div>
                    </div>

                    {profile?.phone2 && <div className="flex items-center gap-3">
                      <div className="list-info">Secondary</div>
                      <div className="list-info">{profile?.phone2}</div>
                    </div>}
                  </div>
                  <div
                    className="txt-link font-semibold ml-auto cursor-pointer"
                    onClick={() => router.push("/profile/edit/contact")}
                  >
                    Edit
                  </div>
                </div>
              </li>

              <li>
                <h3>Email address</h3>
                <div className="flex items-center gap-2">
                  <div className="list-info">{profile?.email}</div>
                  {/* <div className="txt-link font-semibold ml-auto cursor-pointer">
                    Edit
                  </div> */}
                </div>
              </li>

              <li>
                <h3>Date of birth</h3>
                <div className="flex items-center gap-2">
                  <div className="list-info">
                    {`${profile?.dob?.month}-${profile?.dob?.day}-${profile?.dob?.year}`}
                    {/* {datedob?.day} */}
                    </div>
                  <div className="txt-link font-semibold ml-auto cursor-pointer"
                    onClick={() => router.push("/profile/edit/dob")}
                  >
                    Edit
                  </div>
                </div>
              </li>

              <li>
                <h3 className="">Age range</h3>
                <div className="flex gap-4 flex-wrap mt-4">
                  {AGES.map((i) => {
                    return (
                      <div key={i.id}>
                        <ChipBox
                          active={ageRange === i.id}
                          onClick={() => { setAgeRange(i.id) }}
                        >
                          <>
                            {i.min === 60 ? (
                              <>{i.min}+</>
                            ) : (
                              <>
                                {i.min}-{i.max}
                              </>
                            )}
                          </>
                        </ChipBox>
                      </div>
                    );
                  })}
                </div>
              </li>

              <li>
                <h3>Gender</h3>
                <div className="flex gap-4 flex-wrap mt-3">
                  {SEX.map((i) => {
                    return (
                      <div key={i}>
                        <ChipBox
                          active={gender === i}
                          onClick={() => { setGender(i) }}
                        >
                          {i}
                        </ChipBox>
                      </div>
                    );
                  })}
                </div>
              </li>
            </ul>

            <div>
              <Button loading={loading} primary onClick={onSave} >Save</Button>
            </div>

          </div>
        </div>
      </Main>
    </Root>
  );
}

const ChipBox = styled.div<{ active: boolean }>`
  background: ${(p) => (p.active ? p.theme.primary : rgba(p.theme.primary, 0.15))};
  color: ${(p) => (p.active ? "#fff" : p.theme.base)};
  padding: 5px 10px;
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background: ${p => p.theme.primary};
    color: #fff;
  }
`;