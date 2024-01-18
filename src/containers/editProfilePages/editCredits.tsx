import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
  ToogleContainer,
} from "@/styles/Btn.styled";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { starts } from "moment";
import {
  addCreditExperienceApi,
  updateCreditExperienceApi,
  updateProfileDetailApi,
} from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
import { MONTHS } from "../../utils/helper"

export default function EditCredits({ route }: any) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const { user, token } = useAuth();
  const { setProfile, profile } = useProfileStore();
  const [state, setState] = useState({
    id: "",
    role: "",
    production: "",
    production_type: "",
    director: "",
    production_company: "",
    location: "",
    start: "",
    startYear: "",
    end: "",
    endYear: "",
    year: "",
  });

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

  useEffect(() => {
    const date = new Date("1" + state.start + state.startYear)
    // const startYear = date.getDate().toString() + "-" + date.getMonth() + "-" + date.getFullYear() + " " + date.toLocaleTimeString() 
    // const startYear = date.toISOString() 
    const startYear = date.toUTCString()


    console.log(
      "start: ", formatDate(date)
    )
  }, [startYear])

  console.log("check data month", MONTHS);

  // const startYear = new Date()
  // useEffect(() => {
  //   console.log("check start month ", startYear.getMonth());
  //   console.log("check start year ", startYear.getFullYear());
  // }, [state])

  // const end = new Date()
  // useEffect(() => {
  //   console.log("check end month ", end.getMonth());
  //   console.log("check end year ", end.getFullYear());
  // }, [state])

  const params = route;
  useEffect(() => {
    if (params && params.id) {
      setState((s) => ({
        ...s,
        id: params.id,
        production: params.production,
        production_type: params.production_type,
        director: params.director,
        production_company: params.production_company,
        role: params.role,
        year: params.start,
        location: params.location,
        start: new Date("1" + state.start + state.startYear).getTime().toString(),
        startYear: params.startYear,
        end: new Date("1" + state.end + state.endYear).getTime().toString(),
        endYear: params.endYear
      }));
    }
  }, [params]);

  const onSave = async () => {
    if (!state.role.trim() || !state.role.trim() || !state.start) {
      return;
    }

    try {
      if (state.id) {
        setLoading(true);
        const res = await updateCreditExperienceApi(token, {
          id: state.id,
          data: JSON.stringify({
            year: state.year,
            production: state.production,
            production_type: state.production_type,
            role: state.role,
            director: state.director,
            production_company: state.production_company,
            location: state.location,
            end: state.end,
            start: state.start,
            // startMonth: state.startMonth,
            startYear: state.startYear,
            // endMonth: state.endMonth,
            endYear: state.endYear
          }),
        });
        console.log("UPDATE RES", res);
        setLoading(false);
        if (typeof res === "object") {
          setProfile((s) => {
            return {
              ...s,
              creditExperience: s.creditExperience.map((i) => {
                if (Number(i.id) === Number(state.id)) {
                  return {
                    ...i,
                    production: res.production,
                    production_type: res.production_type,
                    role: res.role,
                    year: res.year,
                    director: res.director,
                    production_company: res.production_company,
                    location: res.location,
                    end: res.end,
                    start: res.start,
                    // startMonth: res.startMonth,
                    startYear: res.startYear,
                    // endMonth: res.endMonth,
                    endYear: res.endYear
                  };
                } else {
                  return i;
                }
              }),
            };
          });
          router.back();
          return;
        }
      }

      setLoading(true);
      const res = await addCreditExperienceApi(
        token,
        JSON.stringify({
          year: state.startYear,
          production: state.production,
          production_type: state.production_type,
          role: state.role,
          director: state.director,
          production_company: state.production_company,
          location: state.location,
          end: formatDate(new Date("1" + state.end + state.endYear)),
          start: formatDate(new Date("1" + state.start + state.startYear)),
          startYear: state.startYear,
          endYear: state.endYear

        })
      );
      setLoading(false);
      console.log("PU RES", res);
      if (typeof res === "object") {
        setProfile((s) => {
          if (s.creditExperience) {
            return {
              ...s,
              creditExperience: [
                ...s.creditExperience,
                {
                  id: res.id,
                  production: res.production,
                  production_type: res.production_type,
                  role: res.role,
                  year: res.year,
                  director: res.director,
                  location: res.location,
                  end: res.end,
                  start: res.start,
                  // startMonth: res.startMonth,
                  startYear: res.startYear,
                  // endMonth: res.endMonth,
                  endYear: res.endYear
                },
              ],
            };
          } else {
            return {
              ...s,
              creditExperience: [
                {
                  id: res.id,
                  production: res.production,
                  production_type: res.production_type,
                  role: res.role,
                  year: res.year,
                  director: res.director,
                  production_company: res.production_company,
                  location: res.location,
                  end: res.end,
                  start: res.start,
                  // startMonth: res.startMonth,
                  startYear: res.startYear,
                  // endMonth: res.endMonth,
                  endYear: res.endYear
                },
              ],
            };
          }
        });
        router.back();
      }
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  };

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
          <h1 className="text-xl lg:text-2xl font-bold">
            Edit Credits & Experience
          </h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div>
          <div className="mb-5">
            <label htmlFor="production_type" className="font-semibold mb-1 block">
              Production Type
            </label>
            <Input
              type="text"
              id="production_type"
              placeholder="production_type..."
              value={state.production_type}
              onChange={(e) =>
                setState((s) => ({ ...s, production_type: e.target.value }))
              }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="production" className="font-semibold mb-1 block">
              Project name
            </label>
            <Input
              type="text"
              id="production"
              placeholder="Your production..."
              value={state.production}
              onChange={(e) =>
                setState((s) => ({ ...s, production: e.target.value }))
              }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="role" className="font-semibold mb-1 block">
              Role
            </label>
            <Input
              type="text"
              id="role"
              placeholder="Your role..."
              value={state.role}
              onChange={(e) =>
                setState((s) => ({ ...s, role: e.target.value }))
              }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="director" className="font-semibold mb-1 block">
              Director/Production company
            </label>
            <Input
              type="text"
              id="director"
              placeholder="Your Director..."
              value={state.director}
              onChange={(e) =>
                setState((s) => ({ ...s, director: e.target.value }))
              }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="production_company" className="font-semibold mb-1 block">
              Production Company
            </label>
            <Input
              type="text"
              id="production_company"
              placeholder="Your company..."
              value={state.production_company}
              onChange={(e) =>
                setState((s) => ({ ...s, production_company: e.target.value }))
              }
            />
          </div>
          <div className="mb-5">
            <label htmlFor="location" className="font-semibold mb-1 block">
              Location
            </label>
            <Input
              type="text"
              id="compalocationny"
              placeholder="Your location..."
              value={state.location}
              onChange={(e) =>
                setState((s) => ({ ...s, location: e.target.value }))
              }
            />
          </div>

          <div className="mb-5">

            <div className="font-semibold mb-3">Date Started</div>
            <div className="flex justify-between mx-auto gap-6">
              <div className="w-[50%]">
                <label htmlFor="start" className="font-semibold mb-1 block">
                  start Month
                </label>
                <Select
                  value={state.start}
                  onChange={(e) => {
                    setState((s) => ({ ...s, start: e.target.value }));
                  }}
                >
                  {MONTHS.map((item: any, index: number) => (
                    <option key={index}>{item.label}</option>
                  ))}
                </Select>
              </div>
              <div className="w-[50%]">
                <label htmlFor="year" className="font-semibold mb-1 block">
                  Start Year
                </label>
                <Input
                  type="number"
                  id="year"
                  placeholder="start year"
                  value={state.startYear}
                  onChange={(e) =>
                    setState((s) => ({ ...s, startYear: e.target.value }))
                  }
                />
              </div>

            </div>
          </div>

          <div className="flex gap-5 mb-5">
            <div className="font-semibold">Present?</div>
            <div>
              <ToogleContainer>
                <label className="switch">
                  <input type="checkbox" className="checkbox" />
                  <span className="toggle-thumb"></span>
                </label>
              </ToogleContainer>
            </div>
          </div>

          <div className="mb-5">

            <div className="font-semibold mb-3">Date Ended</div>
            <div className="flex justify-between mx-auto gap-6">
              <div className="w-[50%]">
                <label htmlFor="end" className="font-semibold mb-1 block">
                  End Date
                </label>

                <Select
                  value={state.end}
                  onChange={(e) => {
                    setState((s) => ({ ...s, end: e.target.value }));
                  }}
                >
                  {MONTHS.map((item: any, index: number) => (
                    <option key={index}>{item.label}</option>
                  ))}
                </Select>
              </div>

              <div className="w-[50%]">
                <label htmlFor="year" className="font-semibold mb-1 block">
                  Year
                </label>
                <Input
                  type="number"
                  id="year"
                  placeholder="end Year"
                  value={state.endYear}
                  onChange={(e) =>
                    setState((s) => ({ ...s, endYear: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Button
            loading={loading}
            size="large"
            primary
            outlined
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button loading={loading} size="large" primary onClick={onSave}>
            Save
          </Button>
        </div>
      </div>
    </ParentContainer>
  );
}
function startYear(startYear: any) {
  throw new Error("Function not implemented.");
}

