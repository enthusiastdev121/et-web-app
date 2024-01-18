import { MessageInboxContainer } from "./Dashboard.styled";
import Image from "next/image";

export default function MessageInbox() {
  return (
    <MessageInboxContainer className="boxShadow py-5 rounded-lg h-full txt-base">
      <div className="pb-3 border-b-2 px-5">
        <h2 className="text-lg font-semibold">Message Inbox</h2>
      </div>

      <ul className="mb-5 text-xs flex flex-col justify-between">
        <li className="flex items-start my-5 px-5 gap-4 unread">
          <div className="mr-4">
            <Image
              src="/images/message-box-1.png"
              alt="user"
              height={60}
              width={60}
            />
          </div>
          <div className="w-4/5">
            <div className="border-b-2 pb-5">
              <div className="flex items-center mb-3">
                <h4 className="font-semibold mr-3">Mike Jones </h4>
                <small>3:11 PM</small>
              </div>
              <p className="production-name mb-2">
                Talent has invited you to apply for the role of
                &lsquo;Dater&rsquo; in the production &lsquo;Dating Disasters
                Comedic Web Series (Scripted)&rsquo;!
              </p>
              <p>
                Get Job Alerts today, and be one of the first to hear about the
                newest job openings.
              </p>
            </div>
          </div>
        </li>

        <li className="flex items-start my-5 px-5 gap-4">
          <div className="mr-4">
            <Image
              src="/images/message-box-2.png"
              alt="user"
              height={60}
              width={60}
            />
          </div>
          <div className="w-4/5">
            <div className="border-b-2 pb-5">
              <div className="flex items-center mb-3">
                <h4 className="font-semibold mr-3">Sunny D&apos;cuz</h4>
                <small>Yesterday</small>
              </div>
              <p className="production-name mb-2">
                Found your profile relevant for the Scaler Academy Program
              </p>
              <p>
                With over 600 mentors, 80+ instructors and teaching assistants,
                500+ place...
              </p>
            </div>
          </div>
        </li>
      </ul>
    </MessageInboxContainer>
  );
}
