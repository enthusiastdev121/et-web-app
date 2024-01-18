import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { ExperienceCardContainer } from "./styles";

export default function DancingExperience({ data = [], own, edit }: Props) {
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";

  return (
    <ExperienceCardContainer
      className={`py-10 px-5 md:px-10 ${box_shadow}`}
      id="dance"
    >
      <div className="flex items-center justify-between mb-3 md:mb-7">
        <h2 className="profile-heading">Dancing</h2>

        {edit && (
          <Link href="/profile/edit/dance" passHref>
            <button className="edit-btn-2">
              <HiPencil style={{ display: "inline" }} /> Edit
            </button>
          </Link>
        )}
      </div>

      <div className="lg:text-lg grid gap-5">
        <div>
          {data?.style?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Styles of dancing</h3>

              <ul className="grid grid-cols-2">
                {data?.style.map((i: any, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="blue">
                      <TiTick />
                    </span>{" "}
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data?.danceAbility?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Dance Ability</h3>

              <div className="flex items-center gap-2">
                <span className="blue">
                  <TiTick />
                </span>{" "}
                {data?.danceAbility}
              </div>
            </div>
          )}

          {data?.teachingAbility?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Teaching Ability</h3>

              <div className="flex items-center gap-2">
                <span className="blue">
                  <TiTick />
                </span>{" "}
                {data?.teachingAbility}
              </div>
            </div>
          )}

          {data?.schoolName?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Dance School</h3>

              <div className="flex items-center gap-2">
                <span className="blue">
                  <TiTick />
                </span>{" "}
                {data?.courseName} - {data?.schoolName} ( {data?.schoolYear} )
              </div>
            </div>
          )}

          {/* agent status */}
          {data?.agentType === "I have an agent" && (
            <>
              <div>
                <h3 className="lg:text-2xl font-semibold">Agent Name</h3>
                <div className="flex items-center gap-2">{data?.agentName}</div>
              </div>
              <div>
                <h3 className="lg:text-2xl font-semibold mt-5">
                  Agent Website
                </h3>
                <div className="flex items-center gap-2">
                  {data?.agentWebsite}
                </div>
              </div>
            </>
          )}

          {data?.agentType === "I don't have an agent" && (
            <>
              <div>
                <h3 className="lg:text-2xl font-semibold">Agent Status</h3>
                <div className="flex items-center gap-2">{data?.agentType}</div>
              </div>
            </>
          )}

          {data?.agentType === "I want an agent" && (
            <>
              <div>
                <h3 className="lg:text-2xl font-semibold">Agent Status</h3>
                <div className="flex items-center gap-2">{data?.agentType}</div>
              </div>
            </>
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
