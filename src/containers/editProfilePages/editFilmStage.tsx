import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import {
  categories,
  categoriesKeys,
  interest,
} from "@/utils/constants/profile";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { addFilmStageApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, ParentContainer, Select } from "./styles";

export default function EditFilmStage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    artCostumeDesign: "",
    cameraCrew: "",
    directingWriting: "",
    lighting: "",
    postProductionEditing: "",
    productionManagement: "",
    soundCrew: "",
    runnerAssistant: "",
    experienceText: "",
  });
  const { profile, setProfile } = useProfileStore();
  const [subs, setSubs] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    if (profile.categories && profile.categories[categoriesKeys.filmStage]) {
      setState((s) => ({
        ...s,
        ...profile.categories[categoriesKeys.filmStage],
      }));
    }
  }, [profile]);

  console.log("Film stage crew state: ", state);

  const onSave = async () => {
    try {
      setLoading(true);
      const res = await addFilmStageApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              art_costume_design: state?.artCostumeDesign,
              camera_crew: state?.cameraCrew,
              directing_writing: state?.directingWriting,
              lighting: state?.lighting,
              post_prod_editing: state?.postProductionEditing,
              prod_mgmt: state?.productionManagement,
              sound_crew: state?.soundCrew,
              runner_assistant: state?.runnerAssistant,
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
              [categoriesKeys.filmStage]: {
                ...[categoriesKeys.filmStage],
                ...state,
              },
            },
          };
        });

        router.back();
      }
    } catch (err) {
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
            Edit Film & Stage Crew
          </h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        {/* Art & Costume Design Ability */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold">Art & Costume Design Ability</h3>
          <Select
            value={state.artCostumeDesign}
            onChange={(e) => {
              setState((s) => ({ ...s, artCostumeDesign: e.target.value }));
            }}
          >
            <option value="">No Art & Costume Design Ability</option>
            {categories.filmStage.art_costume_design?.options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </div>

        {/* Camera Crew Ability */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold">Camera Crew Ability</h3>
          <Select
            value={state.cameraCrew}
            onChange={(e) => {
              setState((s) => ({ ...s, cameraCrew: e.target.value }));
            }}
          >
            <option value="">No Camera Crew Ability</option>
            {categories.filmStage.camera_crew?.options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </div>

        {/* Directing & Writing Ability */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold">Directing & Writing Ability</h3>
          <Select
            value={state.directingWriting}
            onChange={(e) => {
              setState((s) => ({ ...s, directingWriting: e.target.value }));
            }}
          >
            <option value="">No Directing & Writing Ability</option>
            {categories.filmStage.directing_writing?.options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </div>

        {/* Lighting Ability */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold">Lighting Ability</h3>
          <Select
            value={state.lighting}
            onChange={(e) => {
              setState((s) => ({ ...s, lighting: e.target.value }));
            }}
          >
            <option value="">No Lighting Ability</option>
            {categories.filmStage.lighting?.options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </div>

        {/* Post Production & Editing Ability */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold">
            Post Production & Editing Ability
          </h3>
          <Select
            value={state.postProductionEditing}
            onChange={(e) => {
              setState((s) => ({
                ...s,
                postProductionEditing: e.target.value,
              }));
            }}
          >
            <option value="">No Post Production & Editing Ability</option>
            {categories.filmStage.post_prod_editing?.options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </div>

        {/* Production & Management Ability */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold">
            Production & Management Ability
          </h3>
          <Select
            value={state.productionManagement}
            onChange={(e) => {
              setState((s) => ({ ...s, productionManagement: e.target.value }));
            }}
          >
            <option value="">No Production & Management Ability</option>
            {categories.filmStage.prod_mgmt?.options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </div>

        {/* Sound Crew Ability */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold">Sound Crew Ability</h3>
          <Select
            value={state.soundCrew}
            onChange={(e) => {
              setState((s) => ({ ...s, soundCrew: e.target.value }));
            }}
          >
            <option value="">No Sound Crew Ability</option>
            {categories.filmStage.sound_crew?.options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </div>

        {/* Runner or Assistant Ability */}
        <div className="mb-5">
          <h3 className="mb-1 font-semibold">Runner or Assistant Ability</h3>
          <Select
            value={state.runnerAssistant}
            onChange={(e) => {
              setState((s) => ({ ...s, runnerAssistant: e.target.value }));
            }}
          >
            <option value="">No Runner or Assistant Ability</option>
            {categories.filmStage.runner_assistant?.options.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
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
