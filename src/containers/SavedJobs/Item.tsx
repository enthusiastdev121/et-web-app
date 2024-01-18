import { formatAudtionDetailSlug } from "@/utils/helper";
import Button from "components/Button";
import OverlayLoader from "components/OverlayLoader";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { removeJobCartItemApi, submitRoleApi } from "network/apis/jobs";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { JobCartItemD } from "types/jobs";

export default function Item(props: Props) {
  const [deleting, setDeleting] = useState(false);
  const { token } = useAuth();
  const [applying, setApplying] = useState(false);
  const { profile } = useProfileStore();

  const removeItem = async () => {
    try {
      setDeleting(true);
      const res = await removeJobCartItemApi({ token, id: Number(props.id) });
      toast.success("Job/Role removed successfully", { position: "top-center" });
      setDeleting(false);
      props.onDelete(props.role.id);
    } catch (err) {
      setDeleting(false);
    }
  };

  const applyJob = async () => {
    try {
      setApplying(true);

      const res = await submitRoleApi({
        token,
        raw: {
          casting_id: props.job.id,
          role_id: props.role.id,
          c_type: 0,
        },
      });
      setApplying(false);
      if (res) {
        toast.success("Job role submitted successfully", {
          position: "top-center",
        });
        props.onApply(props.role.id);
      }
    } catch (err) {
      setApplying(false);
      console.log("Appply Err", err);
    }
  };

  return (
    <div className="flex flex-col shadow-md bg-pure p-4 rounded-md relative">
      {deleting && <OverlayLoader />}
      <div className="flex mb-4 ">
        <div className="grow">
          <Link href={`/auditions/${formatAudtionDetailSlug(props.job.title + " " + props.job?.location + " " + props?.job.zip, props.job?.id)}`}>
            <a>
              <div className="text-xl font-semibold txt-base mb-1"> {props.job.title}</div>
              <div className="mb-2 txt-primary font-semibold ">Role : {props.role?.name}</div>
            </a>
          </Link>
          <div className="flex flex-col gap-1 text-sm txt-base">
            <div>Added : {props.job.createdAt}</div>
            <div>Expires : {props.job.expiration}</div>
          </div>
        </div>

        <div>
          <div className=" text-white cursor-pointer bg-red-500 aspect-square h-10 flex items-center justify-center rounded-full text-2xl" onClick={removeItem}>
            <MdDelete />
          </div>
        </div>
      </div>

      {profile.joinStatus !== 5 && <div className=" bg-red-50 text-red-500 py-1 px-3 text-sm font-medium mb-2 inline-flex self-start rounded-md">Free users cant submit application , Please upgrade to pro</div>}

      <div className="flex gap-2 flex-wrap">
        {profile.joinStatus === 5 ? (
          <Button primary loading={applying} onClick={applyJob}>
            Submit Applciation
          </Button>
        ) : (
          <Link href='/upgrade-to-pro' passHref>
            <Button primary>Upgrade to Pro</Button>
          </Link>
        )}
        <Link href={`/auditions/apply?jobId=${props.job.id}&roleId=${props.role.id}&id=${props.id}`}>
          <a>
            <Button outlined primary>
              Edit Application
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}

type Props = {
  last?: boolean;
  onDelete: (id: number) => any;
  onApply: (id: number) => any;
} & JobCartItemD;
