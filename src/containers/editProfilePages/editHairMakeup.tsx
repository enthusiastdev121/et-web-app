import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import { categories, categoriesKeys } from "@/utils/constants/profile";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  addHairMakeupApi,
  updateProfileDetailApi,
} from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";

export default function EditHairMakeup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    fashionAbility: "",
    hairAbility: "",
    makeupAbility: "",
  });
  const { profile, setProfile } = useProfileStore();
  const { token } = useAuth();

  useEffect(() => {
    if (profile.categories && profile.categories[categoriesKeys.hairMakeup]) {
      setState((s) => {
        return {
          ...s,
          ...profile?.categories[categoriesKeys.hairMakeup],
        };
      });
    }
  }, [profile]);

  const onSave = async () => {
    try {
      setLoading(true);
      const res = await addHairMakeupApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              fashion_styling: state.fashionAbility,
              hair_styling: state.hairAbility,
              makeup_artist: state.makeupAbility,
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
              [categoriesKeys.hairMakeup]: {
                ...s.categories[categoriesKeys.hairMakeup],
                ...state,
              },
            },
          };
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
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">
            Edit Hair, Makeup & Styling
          </h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* Fashion Styling Ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Fashion Styling Ability</h3>
            <Select
              value={state.fashionAbility}
              onChange={(e) => {
                setState((s) => ({ ...s, fashionAbility: e.target.value }));
              }}
            >
              <option value="">No Fashion Styling Ability</option>
              {categories.hairMakeup.fashion_styling.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Hair Styling Ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Hair Styling Ability</h3>
            <Select
              value={state.hairAbility}
              onChange={(e) => {
                setState((s) => ({ ...s, hairAbility: e.target.value }));
              }}
            >
              <option value="">No Hair Styling Ability</option>
              {categories.hairMakeup.fashion_styling.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Makeup Artist Ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Makeup Artist Ability</h3>
            <Select
              value={state.makeupAbility}
              onChange={(e) => {
                setState((s) => ({ ...s, makeupAbility: e.target.value }));
              }}
            >
              <option value="">No Makeup Artist Ability</option>
              {categories.hairMakeup.fashion_styling.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
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
