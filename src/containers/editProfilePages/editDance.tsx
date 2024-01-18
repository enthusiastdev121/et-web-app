import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import AgentBox from "components/profile/edit/AgentBox";
import SimpleList from "components/profile/edit/SimpleList";
import {
  agentType,
  categories,
  categoriesKeys,
} from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { addDanceApi, updateProfileDetailApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateHttps } from "@/utils/helper";
import Button from "components/Button";

export default function EditDance() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    style: [],
    teachingAbility: "",
    danceAbility: "",
    schoolName: "",
    courseName: "",
    schoolYear: "",
    agentType: "",
    agentName: "",
    agentWebsite: "",
  });

  const { profile, setProfile } = useProfileStore();
  const { token } = useAuth();

  useEffect(() => {
    if (profile.categories && profile?.categories[categoriesKeys.dance]) {
      setState((s) => {
        return {
          ...s,
          ...profile?.categories[categoriesKeys.dance],
          style: categories[categoriesKeys.dance].style?.options?.map(
            (i, ind) => {
              return {
                label: i,
                id: ind,
                selected:
                  profile?.categories[categoriesKeys.dance]?.style?.includes(i),
              };
            }
          ),
        };
      });
    }
  }, [profile]);

  const onSave = async () => {
    try {
      let someInvalid = false;
      if (state.agentWebsite.length > 0) {
        if (!validateHttps(state.agentWebsite)) {
          someInvalid = true;
        }

        if (someInvalid) {
          toast.error("Agent website link is invalid, Please check");
        }
      }

      setLoading(true);
      const res = await addDanceApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              dance_ability: state.danceAbility,
              teaching_ability: state.teachingAbility,
              dance_school: state.schoolName ? "1" : "0",
              school_name: state.schoolName,
              course_name: state.courseName,
              course_year: state.schoolYear,
              dancing_agent:
                agentType.filter((i) => i.label === state.agentType)[0]?.id ||
                "I don't have an agent",
              agency_name: state.agentName,
              agency_website: state.agentWebsite,
              experience_text: "",
              job_dancing_styles: state.style
                .filter((i: any) => i.selected)
                .map((i: any) => i.label),
            },
          })
        )
      );
      setLoading(false);
      if (res) {
        setProfile((s) => {
          return {
            ...s,
            categories: {
              ...s.categories,
              [categoriesKeys.dance]: {
                ...s.categories[categoriesKeys.dance],
                ...state,
                style: state.style
                  .filter((i: any) => i.selected)
                  .map((i: any) => i.label),
              },
            },
          };
        });

        if (!someInvalid) {
          router.back();
        }
      }
    } catch (err) {
      setLoading(false);

      console.log("Err", err);
    }
  };

  return (
    <ParentContainer className="padding-small">
      <ToastContainer className="Toastify" />
      <div
        className="padding-x"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between ">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Edit Dance</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* Styles of dancing */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Styles of dancing</h3>
            <SimpleList
              items={state.style}
              onChange={(id: any) => {
                setState((s: any) => {
                  return {
                    ...s,
                    style: s.style.map((i: any) =>
                      i.id === id ? { ...i, selected: !i.selected } : i
                    ),
                  };
                });
              }}
            />
          </div>

          {/* Dance ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Dance Ability</h3>
            <Select
              value={state.danceAbility}
              onChange={(e) => {
                setState((s) => ({ ...s, danceAbility: e.target.value }));
              }}
            >
              <option value="">No Dancing Ability</option>
              {categories.dance.ability.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Teaching or Choreography ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">
              Teaching or Choreography Ability
            </h3>
            <Select
              value={state.teachingAbility}
              onChange={(e) => {
                setState((s) => ({ ...s, teachingAbility: e.target.value }));
              }}
            >
              <option value="">No Teaching or Choreography Ability</option>
              {categories.dance.teachingChoreography.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Dance school */}
          <div className="mb-5">
            <div className="mb-5">
              <h3 className="font-semibold mb-1">Dance school</h3>
              <label className="text-sm">School name</label>
              <Input
                type="text"
                placeholder="School name"
                value={state.schoolName}
                onChange={(e) =>
                  setState((s) => ({ ...s, schoolName: e.target.value }))
                }
                className="mb-2"
              />

              <label className="text-sm">Course name</label>
              <Input
                type="text"
                placeholder="Course name"
                value={state.courseName}
                onChange={(e) =>
                  setState((s) => ({ ...s, courseName: e.target.value }))
                }
                className="mb-2"
              />

              <label className="text-sm">Year</label>
              <Input
                type="number"
                placeholder="Year"
                value={state.schoolYear}
                onChange={(e) =>
                  setState((s) => ({ ...s, schoolYear: e.target.value }))
                }
              />
            </div>
          </div>

          {/* Dancing Agent */}
          <div>
            <h3 className="font-semibold mb-1">Dancing agent</h3>
            <Select
              value={state.agentType}
              onChange={(e) => {
                setState((s) => ({ ...s, agentType: e.target.value }));
              }}
            >
              <option disabled>Choose</option>
              {categories.dance.agent.options?.map(
                (item: any, index: number) => (
                  <option key={index}>{item.label}</option>
                )
              )}
            </Select>
            <AgentBox
              value={state.agentType}
              agentName={state.agentName}
              agentWebsite={state.agentWebsite}
              setState={setState}
              onNameChange={(e: any) =>
                setState((s) => ({ ...s, agentName: e.target.value }))
              }
              onWebsiteChange={(e: any) =>
                setState((s) => ({ ...s, agentWebsite: e.target.value }))
              }
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Button primary outlined onClick={() => router.back()}>
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
