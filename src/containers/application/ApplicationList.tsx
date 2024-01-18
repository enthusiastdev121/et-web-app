import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

import { ApplicationListContainer } from "./Applications.styled";
import { Invites } from "../../../dummyData/ApplicationData";

export default function ApplicationList() {
  return (
    <ApplicationListContainer className="p-10 rounded-xl">
      <ul>
        {Invites.map((message) => (
          <li key={message.id} className="flex items-start my-10">
            <div className="mr-5">
              <Image
                src={`/images/${message.image}`}
                alt="user"
                height={70}
                width={70}
              />
            </div>

            <div className="border-b-2 pb-5 flex flex-col md:flex-row md:items-center w-full">
              <div className="mr-auto">
                <div className="flex items-center mb-3">
                  <h4 className="font-semibold mr-3">{message?.name}</h4>
                  <small>{message.time}</small>
                </div>
                <p className="production-name mb-2">{message.body}</p>
                <small className="production-name mb-2 deadline">
                  {message.deadline}
                </small>
              </div>

              {message.invited && (
                <div className="flex items-center">
                  <div className="btn invited font-semibold text-xs flex items-center mr-2">
                    <Image
                      src="/svg/invitation.svg"
                      alt="Invitation"
                      height={15}
                      width={20}
                    />
                    <span className="ml-2">invited</span>
                  </div>
                  <BsThreeDotsVertical />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </ApplicationListContainer>
  );
}
