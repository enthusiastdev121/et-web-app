import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import { categoriesKeys } from "@/utils/constants/profile";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  addInfluencerApi,
  updateProfileDetailApi,
} from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, TextArea } from "./styles";

export default function EditInfluencer() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const { profile, setProfile } = useProfileStore();
  const [txt, setTxt] = useState("");

  useEffect(() => {
    if (profile?.categories && profile?.categories[categoriesKeys.influencer]) {
      setTxt(profile?.categories[categoriesKeys.influencer]?.txt || "");
    }
  }, [profile?.categories]);

  const onSave = async () => {
    try {
      setLoading(true);
      const res = await addInfluencerApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              influencer_experience_text: txt,
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
              [categoriesKeys.influencer]: {
                ...s?.categories[categoriesKeys.influencer],
                txt: txt,
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
          <h1 className="text-xl lg:text-2xl font-bold">Edit Influencer</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          <h3 className="font-semibold mb-2 txt-secondary">Give Overview</h3>
          <TextArea
            placeholder="Write..."
            value={txt}
            onChange={(e: any) => {
              setTxt(e.target.value);
            }}
          ></TextArea>
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
