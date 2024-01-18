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
  interest,
} from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  addModelingApi,
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

export default function EditModeling() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subs, setSubs] = useState([]);
  const { token } = useAuth();
  const { categoryPlaceholder, profile, setProfile } = useProfileStore();

  const [state, setState] = useState({
    experience: "",
    website: "",
    agentType: "",
    agentName: "",
    agentWebsite: "",
  });

  useEffect(() => {
    let has: any = [];
    if (profile.interest) {
      if (profile.interest?.length > 0) {
        has = profile.interest?.filter(
          (i) => i.id === interest[categoriesKeys.modeling]?.id
        );
        if (has.length > 0) {
          has = has[0]?.sub?.map((i: any) => i.label);
        }
      }
      setSubs([
        ...interest[categoriesKeys.modeling]?.sub.map((i: any) => {
          return {
            ...i,
            selected: has?.includes(i.label) ? true : false,
          };
        }),
      ]);
    }
  }, [profile.interest]);

  useEffect(() => {
    if (profile.categories && profile.categories[categoriesKeys.modeling]) {
      console.log(profile.categories[categoriesKeys.modeling]);
      setState((s) => ({
        ...s,
        ...profile.categories[categoriesKeys.modeling],
      }));
    }
  }, [profile]);

  const onSave = async () => {
    try {
      let agentSite = false;
      let modelSite = false;

      if (state.agentWebsite?.length > 0) {
        if (!validateHttps(state.agentWebsite)) {
          agentSite = true;
        }
        if (agentSite) {
          toast.error("Agent website link is invalid, Please check");
        }
      }
      if (state.website?.length > 0) {
        if (!validateHttps(state.website)) {
          modelSite = true;
        }
        if (modelSite) {
          toast.error("Modeling website link is invalid, Please check");
        }
      }

      setLoading(true);
      const res = await addModelingApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              modeling_experience: state.experience || "",
              modeling_website: state.website || "",
              modeling_agent:
                agentType.filter((i) => i.label === state.agentType)[0]?.id ||
                "",
              agency_name: state.agentName || "",
              agency_website: state.agentWebsite || "",
              modeling_experience_text: "",
              talent_interests: [
                {
                  category_id: interest[categoriesKeys.modeling]?.id,
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
              [categoriesKeys.modeling]: {
                ...s?.categories[categoriesKeys.modeling],
                ...state,
              },
            },
            interest: s.interest.map((i) => {
              if (i.id === interest[categoriesKeys.modeling]?.id) {
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
        if (!agentSite && !modelSite) {
          router.back();
        }
      }
    } catch (err) {
      setLoading(false);

      console.log("ERR", err);
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
          <h1 className="text-xl lg:text-2xl font-bold">Edit Modeling</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* Modeling Experience */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Modeling experience</h3>
            <Select
              value={state.experience}
              onChange={(e) => {
                setState((s) => ({ ...s, experience: e.target.value }));
              }}
            >
              {categories.modeling.modeling_experience.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Modeling website */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Modeling website</h3>
            <Input
              type="text"
              placeholder="https://"
              value={state.website}
              onChange={(e) =>
                setState((s) => ({ ...s, website: e.target.value }))
              }
            />
          </div>

          {/* Modeling agent */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Modeling agent</h3>
            <Select
              value={state.agentType}
              onChange={(e) => {
                setState((s) => ({ ...s, agentType: e.target.value }));
              }}
            >
              {agentType?.map((item: any, index: number) => (
                <option key={index}>{item.label}</option>
              ))}
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

          {/* Sub categories */}
          <div>
            <h3 className="font-semibold mb-1">Modeling Sub Categories</h3>
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
