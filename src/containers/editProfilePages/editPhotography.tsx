import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import { categories, categoriesKeys } from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  addPhotographyApi,
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

export default function EditPhotography() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    experience: "",
    website: "",
  });
  const { token } = useAuth();
  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    if (profile.categories && profile.categories[categoriesKeys.photography]) {
      setState((s) => {
        return {
          ...s,
          ...profile?.categories[categoriesKeys.photography],
        };
      });
    }
  }, [profile]);

  const onSave = async () => {
    try {
      let photoSite = false;

      if (state.website.length > 0) {
        if (!validateHttps(state.website)) {
          photoSite = true;
        }
        if (photoSite) {
          toast.error("Website link is invalid, Please check");
        }
      }

      setLoading(true);
      const res = await addPhotographyApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              // "talentnum": "11706683",
              experience: state.experience,
              website: state.website,
              experience_text: "",
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
              [categoriesKeys.photography]: {
                ...s.categories[categoriesKeys.photography],
                ...state,
              },
            },
          };
        });

        if (!photoSite) {
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
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Edit Photography</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* experience */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Photography experience</h3>
            <Select
              value={state.experience}
              onChange={(e) => {
                setState((s) => ({ ...s, experience: e.target.value }));
              }}
            >
              <option value="">No Photography Experience</option>
              {categories.photography.experience.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          <div className="mb-5">
            <h3 className="font-semibold mb-1">Photography website</h3>
            <Input
              type="text"
              placeholder="https://"
              value={state.website}
              onChange={(e) =>
                setState((s) => ({ ...s, website: e.target.value }))
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
