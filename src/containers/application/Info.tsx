import Image from "next/image";
import { InfoContainer } from "./Applications.styled";

export default function Info() {
  return (
    <InfoContainer className="boxShadow rounded-xl p-10 grid lg:grid-cols-3 justify-items-center lg:justify-items-start gap-5">
      <div>
        <div className="flex items-center">
          <div className="mr-5">
            <Image src="/svg/invite.svg" alt="" height={60} width={60} />
          </div>
          <span className="text-xl 2xl:text-3xl font-bold">Invites</span>
        </div>
        <div className="text-base 2xl:text-xl mt-2">
          <span className="new">2 New Invites</span>
          <span className="mx-5">0 Pending</span>
        </div>
      </div>

      <div className="lg:border-x-2 lg:px-10 my-10 lg:my-0 marginY">
        <div className="flex items-center ">
          <div className="mr-5">
            <Image
              src="/svg/in-person-audition.svg"
              alt=""
              height={60}
              width={60}
            />
          </div>
          <span className="text-xl 2xl:text-3xl font-bold">
            In-Person Auditions
          </span>
        </div>
        <div className="text-base 2xl:text-xl mt-2">
          <span className="new">2 New Invites</span>
          <span className="mx-5">0 Pending</span>
          <span className="reschedule">2 Reschedule</span>
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <div className="mr-5">
            <Image
              src="/svg/self-tape-audition.svg"
              alt=""
              height={60}
              width={60}
            />
          </div>
          <span className="text-xl 2xl:text-3xl font-bold">
            Self-Tape Auditions
          </span>
        </div>
        <div className="text-base 2xl:text-xl mt-2">
          <span className="new">2 New Invites</span>
          <span className="mx-5">0 Pending</span>
        </div>
      </div>
    </InfoContainer>
  );
}
