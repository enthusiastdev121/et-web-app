import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { ExperienceCardContainer } from "./styles";

export default function ActingExperience({ data = [], own, edit }: Props) {
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";

  return (
    <ExperienceCardContainer
      className={`py-10 px-5 md:px-10 txt-base ${box_shadow}`}
      id="acting"
    >
      <div className="flex items-center justify-between mb-3 md:mb-7">
        <h2 className="profile-heading">Acting</h2>

        {edit && (
          <Link href="/profile/edit/acting" passHref>
            <button className="edit-btn-2">
              <HiPencil style={{ display: "inline" }} /> Edit
            </button>
          </Link>
        )}
      </div>

      <div className="lg:text-lg grid gap-5">
        {/* acting experience */}
        <div>
          <h3 className="lg:text-2xl font-semibold">Acting Experience</h3>

          <div className="flex items-center gap-2">{data?.experience}</div>
        </div>

        {/* Languages */}
        {data?.language !== [] && <div>
          <h3 className="lg:text-2xl font-semibold">Languages</h3>
          <ul className="grid grid-cols-2">
            {data?.language?.map((i: any, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="blue">
                  <TiTick />
                </span>{" "}
                {i}
              </li>
            ))}
          </ul>
        </div>}

        {/* accents */}
        <div>
          <h3 className="lg:text-2xl font-semibold">Accents</h3>
          <ul className="grid grid-cols-2">
            {data?.accent?.map((i: any, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="blue">
                  <TiTick />
                </span>{" "}
                {i}
              </li>
            ))}
          </ul>
        </div>

        {/* agent status */}
        {data?.agentType === "I have an agent" && (
          <>
            <div>
              <h3 className="lg:text-2xl font-semibold">Agent Name</h3>
              <div className="flex items-center gap-2">{data?.agentName}</div>
            </div>
            <div>
              <h3 className="lg:text-2xl font-semibold">Agent Website</h3>
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

        {data?.union && (
          <div>
            <h3 className="lg:text-2xl font-semibold">Union membership</h3>
            <ul className="grid grid-cols-2">
              {data?.union?.map((i: any, index: number) => (
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

        {data?.info && (
          <div>
            <h3 className="lg:text-2xl font-semibold">Relevant acting info</h3>
            <p>
              I’m familiar with many techniques and approaches to acting,
              techniques that actors swear by and treat with religious
              reverence. Yet these same actors still struggle with confidence,
              clarity in their work, and nerves in their auditions. When I ask
              these actors about their approach and why they’ve chosen this
              particular path to follow, their short obvious response is, “It
              makes me a better actor.” But I never leave it at that; I always
              follow up with clarifying questions:
            </p>
          </div>
        )}
      </div>
    </ExperienceCardContainer>
  );
}

type Props = {
  data: any;
  own: boolean;
  edit?: boolean;
};
