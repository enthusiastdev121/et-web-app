import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { ExperienceCardContainer } from "./styles";

export default function HairMakeupExperience({ data = [], own, edit }: Props) {
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";
  return (
    <ExperienceCardContainer
      className={`py-10 px-5 md:px-10 ${box_shadow}`}
      id="hairMakeup"
    >
      <div className="flex items-center justify-between mb-3 md:mb-7">
        <h2 className="profile-heading">Hair, Makeup & Styling</h2>

        {edit && (
          <Link href="/profile/edit/hairMakeup" passHref>
            <button className="edit-btn-2">
              <HiPencil style={{ display: "inline" }} /> Edit
            </button>
          </Link>
        )}
      </div>

      <div className="lg:text-lg grid gap-5">
        <div>
          {data?.fashionAbility && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">
                Fashion Styling ability
              </h3>

              <div className="flex items-center gap-2">
                {data?.fashionAbility}
              </div>
            </div>
          )}

          {data?.hairAbility && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">
                Hair Styling ability
              </h3>

              <div className="flex items-center gap-2">{data?.hairAbility}</div>
            </div>
          )}

          {data?.makeupAbility && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">
                Makeup Artist ability
              </h3>

              <div className="flex items-center gap-2">
                {data?.makeupAbility}
              </div>
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
