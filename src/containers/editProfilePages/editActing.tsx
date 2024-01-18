import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import AgentBox from "components/profile/edit/AgentBox";
import SimpleList from "components/profile/edit/SimpleList";
import {
  accents,
  agentType,
  categories,
  categoriesKeys,
  interest,
  languages,
} from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { addActingApi, updateProfileDetailApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateHttps } from "@/utils/helper";
import ChipSelectField from "components/profile/edit/ChipSelectField";
import Button from "components/Button";

export default function EditActing() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { profile, setProfile } = useProfileStore();
  const { token } = useAuth();
  const [subs, setSubs] = useState([]);
  const [language, setLanguage] = useState([]);
  const [accent, setAccent] = useState([]);

  const [state, setState] = useState({
    experience: "",
    agentType: "",
    agentName: "",
    agentWebsite: "",
    language: [],
    accent: [],
  });

  useEffect(() => {
    let has: any = [];

    if (profile.interest?.length > 0) {
      has = profile.interest?.filter((i) => i.id === interest.acting.id);
      if (has.length > 0) {
        has = has[0]?.sub?.map((i: any) => i.label);
      }
    }
    setSubs([
      ...interest.acting.sub.map((i: any) => {
        return {
          ...i,
          selected: has?.includes(i.label) ? true : false,
        };
      }),
    ]);
  }, [profile.interest]);

  useEffect(() => {
    if (profile.categories && profile.categories[categoriesKeys.acting]) {
      setLanguage(profile.categories[categoriesKeys.acting]?.language || []);
      setAccent(profile.categories[categoriesKeys.acting]?.accent || []);
      setState((s) => ({ ...s, ...profile.categories[categoriesKeys.acting] }));
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
      const res = await addActingApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              acting_experience: state.experience,
              acting_agent:
                agentType.filter((i) => i.label === state.agentType)[0]?.id ||
                "",
              agency_name: state.agentName,
              agency_website: state.agentWebsite,
              acting_experience_text: "",
              job_languages: language,
              job_accents: accent,
              talent_interests: [
                {
                  category_id: interest[categoriesKeys.acting].id,
                  subcategory_id: subs
                    .filter((i: any) => i.selected)
                    .map((i: any) => i.id),
                },
              ],
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
              [categoriesKeys.acting]: {
                ...s?.categories[categoriesKeys.acting],
                ...state,
                language,
                accent,
              },
            },
            interest: s.interest.map((i: any) => {
              if (i.id === interest[categoriesKeys.acting]?.id) {
                return {
                  ...i,
                  sub: subs
                    .filter((i: any) => i.selected)
                    .map((i3: any) => ({
                      label: i3.label,
                      categoryId: i3.categoryId,
                      id: i3.id,
                    })),
                };
              } else {
                return i;
              }
            }),
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
          <h1 className="text-xl lg:text-2xl font-bold">Edit Acting</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* Auditions & Jobs I'm interested in */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">
              Auditions & Jobs I&apos;m interested in
            </h3>
            <SimpleList
              items={subs}
              onChange={(id: any) =>
                setSubs((s: any) =>
                  s.map((i: any) =>
                    i.id === id ? { ...i, selected: !i.selected } : i
                  )
                )
              }
            />
          </div>

          {/* Acting experience */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Acting experience</h3>
            <Select
              value={state.experience}
              onChange={(e) => {
                setState((s) => ({ ...s, experience: e.target.value }));
              }}
            >
              {categories.acting.acting_experience.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Acting Agent */}
          <div>
            <h3 className="font-semibold mb-1">Acting Agent</h3>
            <Select
              value={state.agentType}
              onChange={(e) => {
                setState((s) => ({ ...s, agentType: e.target.value }));
              }}
            >
              <option disabled>Choose</option>
              {categories.acting.acting_agent.options?.map(
                (item: any, index: number) => (
                  <option key={index}>{item.label}</option>
                )
              )}
            </Select>
            <AgentBox
              setState={setState}
              value={state.agentType}
              agentName={state.agentName}
              agentWebsite={state.agentWebsite}
              onNameChange={(e: any) =>
                setState((s) => ({ ...s, agentName: e.target.value }))
              }
              onWebsiteChange={(e: any) =>
                setState((s) => ({ ...s, agentWebsite: e.target.value }))
              }
            />
          </div>

          {/* Languages */}
          <div className="my-5">
            <h3 className="font-semibold mb-1">Languages</h3>
            <ChipSelectField
              items={language}
              allItems={languages}
              onRemove={(t: any) =>
                setLanguage((s: any) => s.filter((i: any) => i !== t))
              }
              onAdd={(t: any) =>
                setLanguage((s: any) => Array.from(new Set([...s, t])))
              }
              replaceAll={(t: any) => setLanguage(t)}
              title="Select Languages"
              addTitle="Add more languages"
            />
          </div>

          {/* Accents */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Accents</h3>
            <ChipSelectField
              items={accent}
              allItems={accents}
              onRemove={(t: any) => setAccent((s) => s.filter((i) => i !== t))}
              onAdd={(t: any) =>
                setAccent((s: any) => Array.from(new Set([...s, t])))
              }
              replaceAll={(t: any) => setAccent(t)}
              title="Select Accents"
              addTitle="Add more accents"
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
