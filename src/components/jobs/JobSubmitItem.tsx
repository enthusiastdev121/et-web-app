import { formatAudtionDetailSlug, formatDate } from "@/utils/helper";
import Link from "next/link";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { JobSubmissionItemD } from "types/jobs";

export default function JobSubmitItem(props: JobSubmissionItemD) {
  return (
    <div className={`shadow-md bg-pure py-3 px-4 rounded-md `}>
      <div className="mb-2">
        <Link href={`/auditions/${formatAudtionDetailSlug(props?.job?.title + " " + props?.job?.location + " " + props?.job?.zip, props?.job?.id)}`}>
          <a>
            <div className="text-xl mb-1 font-semibold">{props?.job?.title}</div>

            <div className="text-lg font-semibold txt-primary">Role : {props?.role?.name}</div>
          </a>
        </Link>
      </div>

      <div className="txt-primary flex gap-2 font-medium mb-2 text-base items-center">
        <IoLocationSharp className="text-xl" />
        <div>{props?.job?.location}</div>
      </div>

      <div className="flex text-sm txt-disabled mb-3">
        <div>Submiited at : {formatDate(props?.submittedAt)}</div>
      </div>
    </div>
  );
}
