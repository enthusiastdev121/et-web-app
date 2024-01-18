import Button from "components/Button";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { CDInviteItemD } from "types/jobs";

export default function InviteActivateModal(props: Props) {
  return (
    <ModalAnimated open={props.open} onClose={props.onClose}>
      <Paper className="bg-white px-5 py-5 rounded-lg">
        <div className="text-lg font-semibold">
          {props.invite?.job?.title} (#{props.invite?.job?.id})
        </div>
        <div className="text-blue-500 text-base font-semibold mb-2">Role : {props.invite?.role?.name}</div>

        <div className=" text-gray-500 mb-3">In order to read your CD Invitations you must activate your account:</div>

        <div className="text-center">
          <div className="bg-gray-200 mb-4 rounded-lg text-center text-black font-semibold text-2xl px-2 py-3">(702) 553-2722</div>

          <div className="text-center text-gray-500 mb-2">
            Please call Member Support during business hours: <br />
            8am - 7pm PST
          </div>

          <div className="text-gray-500">Or</div>

          <div className="mt-4 flex gap-2 justify-center">
            <Link href='/upgrade-to-pro'>
              <a>
                <Button primary>Upgrade to Pro</Button>
              </a>
            </Link>
            <Button onClick={props.onClose}>Close</Button>
          </div>
        </div >
      </Paper >
    </ModalAnimated >
  );
}

const Paper = styled(ModalPaper)`
  max-width: 600px;
  width: 96%;
`;

type Props = {
  invite: CDInviteItemD;
  open: boolean;
  onClose: () => any;
};
