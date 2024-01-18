import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { ExperienceCardContainer } from "./styles";

export default function TvRealityExperience({ jobs = [], own, edit }: Props) {
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";

  let empty = jobs.length == 0;
  if (empty && !edit) {
    return null;
  }

  return (
    <ExperienceCardContainer className={`py-10 px-5 md:px-10 ${box_shadow}`} id="tvReality">
      <div className="flex items-center justify-between mb-3 md:mb-7">
        <h2 className="profile-heading">TV & Reality</h2>

        {edit && (
          <Link href="/profile/edit/tvReality" passHref>
            <button className="edit-btn-2">
              <HiPencil style={{ display: "inline" }} /> Edit
            </button>
          </Link>
        )}
      </div>

      <div className="lg:text-lg grid gap-5">
        <div>
          <h3 className="font-semibold">Auditions & Jobs I&apos;m interested in</h3>
          {jobs.length > 0 ? (
            <ul>
              {jobs.map((i) => (
                <li className="mb-1" key={i}>
                  <span className="txt-link mr-2">
                    <TiTick style={{ display: "inline-block" }} />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          ) : (
            "No info"
          )}
        </div>
      </div>
    </ExperienceCardContainer>
  );
}

type Props = {
  jobs: any[];
  own: boolean;
  edit?: boolean;
};
