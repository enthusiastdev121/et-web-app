import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import AgentBox from "components/profile/edit/AgentBox";
import ChipSelectField from "components/profile/edit/ChipSelectField";
import SimpleList from "components/profile/edit/SimpleList";
import {
  accents,
  agentType,
  categories,
  categoriesKeys,
  languages,
} from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  addPresentingApi,
  updateProfileDetailApi,
} from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateHttps } from "@/utils/helper";
import Button from "components/Button";

export default function EditPresenter() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    tvExperience: "",
    radioExperience: "",
    agentType: "",
    agentName: "",
    agentWebsite: "",
  });
  const [accent, setAccent] = useState([]);
  const [language, setLanguage] = useState([]);
  const { token, user } = useAuth();
  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    if (profile.categories && profile.categories[categoriesKeys.presenter]) {
      setLanguage(profile.categories[categoriesKeys.presenter]?.language || []);
      setAccent(profile.categories[categoriesKeys.presenter]?.accent || []);
      setState((s) => ({
        ...s,
        ...profile.categories[categoriesKeys.presenter],
      }));
    }
  }, [profile]);

  const onSave = async () => {
    if (!state.tvExperience.trim() || !state.radioExperience.trim()) {
      return;
    }

    try {
      let agentSite = false;

      if (state.agentWebsite.length > 0) {
        if (!validateHttps(state.agentWebsite)) {
          agentSite = true;
        }
        if (agentSite) {
          toast.error("Agent website link is invalid, Please check");
        }
      }

      setLoading(true);
      const res = await addPresentingApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              talentnum: user?.talentnum,
              tv_presenter: state.tvExperience,
              radio_presenter: state.radioExperience,
              agent: agentType.filter((i) => i.label === state.agentType)[0].id,
              agency_name: state.agentName,
              agency_website: state.agentWebsite,
              // experience_text: '',
              job_languages: language,
              job_accents: accent,
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
              [categoriesKeys.presenter]: {
                ...s?.categories[categoriesKeys.presenter],
                ...state,
                language,
                accent,
              },
            },
          };
        });
        if (!agentSite) {
          router.back();
        }
      }
    } catch (err) {
      setLoading(false);
      console.log("EEE", err);
    }
  };

  return (
    <ParentContainer className="padding-small">
      <ToastContainer className="Toastify" />
      <div
        className="padding-x"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Edit Presenter</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* tv presenter */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">TV presenter experience</h3>
            <Select
              value={state.tvExperience}
              onChange={(e) => {
                setState((s) => ({ ...s, tvExperience: e.target.value }));
              }}
            >
              {categories.presenting.tv_presenter.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* radio presenter */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Radio presenter experience</h3>
            <Select
              value={state.radioExperience}
              onChange={(e) => {
                setState((s) => ({ ...s, radioExperience: e.target.value }));
              }}
            >
              {categories.presenting.radio_presenter.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Agent */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Agent</h3>
            <Select
              value={state.agentType}
              onChange={(e) => {
                setState((s) => ({ ...s, agentType: e.target.value }));
              }}
            >
              <option disabled>Choose</option>
              {agentType?.map((item: any, index: number) => (
                <option key={index}>{item.label}</option>
              ))}
            </Select>
            <AgentBox
              value={state.agentType}
              setState={setState}
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

          {/*  Languages */}
          <div className="mb-5">
            <h3 className="mb-1 font-semibold">Languages</h3>
            <ChipSelectField
              items={language}
              allItems={languages}
              onRemove={(t) => setLanguage((s) => s.filter((i) => i !== t))}
              onAdd={(t) => setLanguage((s) => Array.from(new Set([...s, t])))}
              replaceAll={(t) => setLanguage(t)}
              title="Select Languages"
              addTitle="Add more languages"
            />
          </div>

          {/* Accents */}
          <div className="mb-5">
            <h3 className="mb-1 font-semibold">Accents</h3>
            <ChipSelectField
              items={accent}
              allItems={accents}
              onRemove={(t) => setAccent((s) => s.filter((i) => i !== t))}
              onAdd={(t) => setAccent((s) => Array.from(new Set([...s, t])))}
              replaceAll={(t) => setAccent(t)}
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
