import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { ExperienceCardContainer } from "./styles";

export default function InfluencerExperience({ data = [], own, edit }: Props) {
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";
  return (
    <ExperienceCardContainer
      className={`py-10 px-5 md:px-10 ${box_shadow}`}
      id="influencer"
    >
      <div className="flex items-center justify-between mb-3 md:mb-7">
        <h2 className="profile-heading">Influencer</h2>

        {edit && (
          <Link href="/profile/edit/influencer" passHref>
            <button className="edit-btn-2">
              <HiPencil style={{ display: "inline" }} /> Edit
            </button>
          </Link>
        )}
      </div>

      <div className="lg:text-lg grid gap-5">
        <div>
          <div className="mb-5">
            <h3 className="lg:text-2xl font-semibold">Influencer Details</h3>
            <p>{data?.txt}</p>
          </div>
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
