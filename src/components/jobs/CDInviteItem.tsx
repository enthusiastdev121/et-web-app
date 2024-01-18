import { formatAudtionDetailSlug, formatDate } from "@/utils/helper";
import Button from "components/Button";
import { useProfileStore } from "context/ProfileStore";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { CDInviteItemD } from "types/jobs";
import InviteActivateModal from "./InviteActivateModal";

export default function CDInviteItem(props: CDInviteItemD) {
  const [blockOpen, setBlockOpen] = useState(false);
  const { profile } = useProfileStore();
  const router = useRouter();

  return (
    <div className={`shadow-md bg-white py-3 px-4 rounded-md ${props.vip ? "border-2 border-green-600 " : ""} `}>
      <div className="mb-2">
        <Link href={`/auditions/${formatAudtionDetailSlug(props.job.title + " " + props.job.location + " " + props.job.zip, props.job.id)}`}>
          <a>
            <div className="text-xl mb-1 font-semibold">{props.job.title}</div>

            <div className="text-lg font-semibold text-blue-500">Role : {props.role?.name}</div>
          </a>
        </Link>
      </div>

      {props.vip && (
        <div className="inline-flex gap-2 bg-green-500 text-white items-center rounded-full py-2 px-4 font-semibold mb-2">
          <BsShieldFillCheck className="text-xl text-white" />
          <div>VIP Invitation</div>
        </div>
      )}

      {/* <div className="text-blue-400 flex gap-2 font-medium mb-2 text-base items-center">
        <IoLocationSharp className="text-xl" />
        <div>{props.job.location}</div>
      </div> */}






      <div className="flex text-sm text-gray-500 mb-3">
        {props.invitedAt &&
          <div>Message Received: {format(new Date(props.invitedAt), 'MMM dd, yyyy')}</div>}
      </div>
      <div className={`flex text-sm mb-3 ${new Date(Number(props.role.expirationT) * 1000) < new Date() ? 'text-red-500' : 'text-green-500'} `}>
        {props.role?.expirationT &&
          <div>Deadline to Respond: {format(new Date(Number(props.role.expirationT) * 1000), 'MMM dd, yyyy')}</div>}
      </div>



      <div className="">
        <Button
          primary
          onClick={() => {
            if (props.vip || profile.joinStatus === 5) {
              router.push({
                pathname: "/auditions/cd-invite/" + props.id,
              });
            } else {
              setBlockOpen(true);
            }
          }}
        >
          Open Invitation
        </Button>
      </div>

      <InviteActivateModal open={blockOpen} onClose={() => setBlockOpen(false)} invite={props} />
    </div>
  );
}
