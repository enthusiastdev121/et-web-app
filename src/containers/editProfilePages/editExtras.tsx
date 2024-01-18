import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import { validateHttps } from "@/utils/helper";
import {
  agentType,
  categories,
  categoriesKeys,
  interest,
} from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { addExtrasApi, updateProfileDetailApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "components/Button";

export default function EditExtras() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subs, setSubs] = useState([]);
  const { token } = useAuth();
  const { profile, categoryPlaceholder, setProfile } = useProfileStore();
  const [state, setState] = useState({
    experience: "",
    agentName: "",
    agentWebsite: "",
    agentType: "",
  });

  //   useEffect(() => {
  //     let has = [];
  //     if (profile.interest) {
  //       if (profile.interest?.length > 0) {
  //         has = profile.interest?.filter(
  //           (i) => i.id === interest[categoriesKeys.extras]?.id
  //         );
  //         if (has.length > 0) {
  //           has = has[0]?.sub?.map((i) => i.label);
  //         }
  //       }
  //       setSubs([
  //         ...interest[categoriesKeys.extras]?.sub.map((i) => {
  //           return {
  //             ...i,
  //             selected: has?.includes(i.label) ? true : false,
  //           };
  //         }),
  //       ]);
  //     }
  //   }, [profile.interest]);

  useEffect(() => {
    if (profile.categories && profile.categories[categoriesKeys.extras]) {
      setState((s) => ({ ...s, ...profile.categories[categoriesKeys.extras] }));
    }
  }, [profile]);

  const onSave = async () => {
    if (!state.experience.trim()) {
      return;
    }

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
      const res = await addExtrasApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              extras_experience: state.experience,
              extras_agent: agentType.filter(
                (i) => i.label === state.agentType
              )[0]?.id,
              agency_name: state.agentName,
              agency_website: state.agentWebsite,
              extras_experience_text: "",
              talent_interests: [
                {
                  category_id: interest[categoriesKeys.extras]?.id,
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
              [categoriesKeys.extras]: {
                ...s?.categories[categoriesKeys.extras],
                ...state,
              },
            },
            interest: s.interest.map((i) => {
              if (i.id === interest[categoriesKeys.extras]?.id) {
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
          <h1 className="text-xl lg:text-2xl font-bold">Edit Extras</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* experience */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Extras experience</h3>
            <Select
              value={state.experience}
              onChange={(e) => {
                setState((s) => ({ ...s, experience: e.target.value }));
              }}
            >
              {categories.extras.extras_experience.options.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </Select>
          </div>

          {/* agent */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Extras agent</h3>
            <Select
              value={state.agentType}
              onChange={(e) => {
                setState((s) => ({ ...s, agentType: e.target.value }));
              }}
            >
              {categories.extras.extras_agent.options.map((item) => (
                <option key={item.id}>{item.label}</option>
              ))}
            </Select>
          </div>

          {/* agency name */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Agency name</h3>
            <Input
              type="text"
              placeholder="name"
              value={state.agentName}
              onChange={(e) => {
                setState((s) => ({ ...s, agentName: e.target.value }));
              }}
            />
          </div>

          {/* website */}
          <div>
            <h3 className="font-semibold mb-1">Agency website</h3>
            <Input
              type="text"
              placeholder="website"
              value={state.agentWebsite}
              onChange={(e) => {
                setState((s) => ({ ...s, agentWebsite: e.target.value }));
              }}
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
