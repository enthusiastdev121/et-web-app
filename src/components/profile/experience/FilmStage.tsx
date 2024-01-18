import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { ExperienceCardContainer } from "./styles";

export default function FilmStageExperience({ data, own, edit }: Props) {
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";

  let empty = !data?.artCostumeDesign && !data?.cameraCrew && !data?.directingWriting && !data?.lighting && !data?.postProdEditing && !data?.soundCrew && !data?.runnerAssistant && !data?.experienceText;

  if (empty && !edit) {
    return null;
  }

  return (
    <ExperienceCardContainer className={`py-10 px-5 md:px-10 ${box_shadow}`} id="filmStage">
      <div className="flex items-center justify-between mb-3 md:mb-7">
        <h2 className="profile-heading">Film, Stage & Crew</h2>

        {edit && (
          <Link href="/profile/edit/film-stage" passHref>
            <button className="edit-btn-2">
              <HiPencil style={{ display: "inline" }} /> Edit
            </button>
          </Link>
        )}
      </div>

      <div className="lg:text-lg grid gap-5">
        <div>
          {data?.artCostumeDesign && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Art & Costume Design Ability</h3>

              <div className="flex items-center gap-2">{data?.artCostumeDesign}</div>
            </div>
          )}

          {data?.cameraCrew && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Camera Crew Ability</h3>

              <div className="flex items-center gap-2">{data?.cameraCrew}</div>
            </div>
          )}

          {data?.directingWriting && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Directing & Writing Ability</h3>

              <div className="flex items-center gap-2">{data?.directingWriting}</div>
            </div>
          )}

          {data?.lighting && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Lighting Ability</h3>

              <div className="flex items-center gap-2">{data?.lighting}</div>
            </div>
          )}

          {data?.postProductionEditing && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Post Production & Editing Ability</h3>

              <div className="flex items-center gap-2">{data?.postProductionEditing}</div>
            </div>
          )}

          {data?.productionManagement && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Produnction & Management Ability</h3>

              <div className="flex items-center gap-2">{data?.productionManagement}</div>
            </div>
          )}

          {data?.soundCrew && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Sound Crew Ability</h3>

              <div className="flex items-center gap-2">{data?.soundCrew}</div>
            </div>
          )}

          {data?.runnerAssistant && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Runner or Assistant Ability</h3>

              <div className="flex items-center gap-2">{data?.runnerAssistant}</div>
            </div>
          )}
        </div>
      </div>
    </ExperienceCardContainer>
  );
}

type Props = {
  data: any;
  own: boolean;
  edit?: boolean;
};
