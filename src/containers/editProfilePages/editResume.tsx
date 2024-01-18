import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  updateProfileDetailApi,
  updateProfileInfoApi,
} from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, ParentContainer, TextArea } from "./styles";

export default function EditResume() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user, token } = useAuth();
  const { setProfile, profile } = useProfileStore();
  const [resume, setShortResume] = useState(profile?.shortResume);
  const [charLeft, setCharLeft] = useState(900);

  useEffect(() => {
    setCharLeft(900 - (resume?.length || 0));
  }, [setCharLeft, resume]);

  const onSave = async () => {
    if (!resume.trim()) {
      return;
    }

    try {
      setLoading(true);
      const res = await updateProfileInfoApi({
        token,
        raw: {
          experience: resume,
        },
      });
      setLoading(false);
      setProfile((s) => ({ ...s, shortResume: resume }));
      router.back();
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
          <h1 className="text-xl lg:text-2xl font-bold">Short Resume</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5 ">
          <TextArea
            maxLength={900}
            placeholder="short resume "
            value={resume}
            onChange={(e: any) => {
              setShortResume(e.target.value);
            }}
          ></TextArea>
          <small className="block text-right dim-text ">
            <strong>{charLeft}</strong> Characters left
          </small>
        </div>

        <div className="mb-10">
          <ul
            className="text-sm dim-text list-disc ml-5"
            style={{ listStyleType: "disc" }}
          >
            <li className="mb-3">
              Keep it short and snappy — a couple of lines is perfect
            </li>
            <li>Be professional — double check spelling and punctuation</li>
          </ul>
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
