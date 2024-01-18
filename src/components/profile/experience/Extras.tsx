import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { ExperienceCardContainer } from "./styles";

export default function ExtrasExperience({ data = [], own, edit }: Props) {
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";
  return (
    <ExperienceCardContainer
      className={`py-10 px-5 md:px-10 ${box_shadow}`}
      id="extras"
    >
      <div className="flex items-center justify-between mb-3 md:mb-7">
        <h2 className="profile-heading">Extras</h2>

        {edit && (
          <Link href="/profile/edit/extras" passHref>
            <button className="edit-btn-2">
              <HiPencil style={{ display: "inline" }} /> Edit
            </button>
          </Link>
        )}
      </div>

      <div className="lg:text-lg grid gap-5">
        <div>
          {data?.experience?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Experience</h3>

              <div>{data?.experience}</div>
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
