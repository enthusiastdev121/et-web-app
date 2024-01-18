import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { ExperienceCardContainer } from "./styles";

export default function MusicExperience({ data = [], own, edit }: Props) {
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";
  return (
    <ExperienceCardContainer
      className={`py-10 px-5 md:px-10 ${box_shadow}`}
      id="music"
    >
      <div className="flex items-center justify-between mb-3 md:mb-7">
        <h2 className="profile-heading">Music</h2>

        {edit && (
          <Link href="/profile/edit/music" passHref>
            <button className="edit-btn-2">
              <HiPencil style={{ display: "inline" }} /> Edit
            </button>
          </Link>
        )}
      </div>

      <div className="lg:text-lg grid gap-5">
        <div>
          {data?.genre?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Favorite genres</h3>

              <ul className="flex items-center gap-2 flex-wrap">
                {data?.genre?.map((i: any, index: number) => (
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

          {data?.singing?.style?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Singing styles</h3>

              <ul className="flex items-center gap-2 flex-wrap">
                {data?.singing?.style?.map((i: any, index: number) => (
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

          {data?.singing?.range?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Singing range</h3>

              <ul className="flex items-center gap-2 flex-wrap">
                {data?.singing?.range?.map((i: any, index: number) => (
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

          {data?.singing?.ability?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Singing Ability</h3>

              <div>{data?.singing?.ability}</div>
            </div>
          )}

          {data?.guitar?.ability?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Guitar Ability</h3>
              <div>{data?.guitar?.ability}</div>
            </div>
          )}

          {data?.guitar?.bassAbility?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Bass Guitar Ability</h3>
              <div>{data?.guitar?.bassAbility}</div>
            </div>
          )}

          {data?.drumming?.ability?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Drumming Ability</h3>
              <div>{data?.drumming?.ability}</div>
            </div>
          )}

          {data?.rapping?.ability?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Rapping Ability</h3>
              <div>{data?.rapping?.ability}</div>
            </div>
          )}

          {data?.keyboard?.ability?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Keyboard Ability</h3>
              <div>{data?.keyboard?.ability}</div>
            </div>
          )}

          {data?.composer?.ability?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Composer Ability</h3>
              <div>{data?.composer?.ability}</div>
            </div>
          )}

          {data?.dJ?.ability?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">D.J. Ability</h3>
              <div>{data?.dJ?.ability}</div>
            </div>
          )}

          {data?.producer?.ability?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">Producer Ability</h3>
              <div>{data?.producer?.ability}</div>
            </div>
          )}

          {data?.favArtist?.length > 0 && (
            <div className="mb-5">
              <h3 className="lg:text-2xl font-semibold">
                Favorite Bands / Artists
              </h3>
              <div>{data?.favArtist}</div>
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
