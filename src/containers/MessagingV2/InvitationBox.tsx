import { formatDate } from "@/utils/helper"
import Button from "components/Button"
import { useMessagingV2 } from "context/MessagingContextV2"
import { Location, Star1 } from "iconsax-react"
import Link from "next/link"
import { BsShieldFillCheck } from "react-icons/bs"
import { TiLocation } from "react-icons/ti"
import styled from "styled-components"
import ChatboxActions from "./messagingV2Components/ChatBoxActions"
import ChatHeader from "./messagingV2Components/ChatHeader"

export default function InvitationBox({ ongoingCall }: { ongoingCall: boolean }) {

  const { activeInvite } = useMessagingV2();

  console.log("ACTIVE INVITE", activeInvite)


  if (!activeInvite.bam_role) {
    return <></>
  }

  return (
    <Root>
      {/* 
{activeInvite?.item?.vip && (
  <div className="inline-flex gap-2 bg-green-500 text-white items-center rounded-full py-2 px-4 font-semibold mb-3">
    <BsShieldFillCheck className="text-xl text-white" />
    <div>VIP Invitation</div>
  </div>
)}
 */}

      <div className="title-invitation flex items-center">
        <h4 className='mt-0 mr-2'>{activeInvite?.bam_role?.bam_casting?.name}</h4>
        {activeInvite?.vip === '1' && (
          <div className="inline-flex gap-2 bg-green-500 text-white items-center rounded-full py-1 px-2 font-semibold ">
            <BsShieldFillCheck className="text-sm text-white" />
            <h6 className='text-xs text-white'>VIP Invitation</h6>
          </div>
        )}
      </div>
      <div className="location-invitation flex items-center">
        <TiLocation />
        <p>{activeInvite?.bam_role?.bam_casting?.location} </p>
      </div>


      {/* 
        <div className='vip-tag'>
          <img src="/images/shield-white.png" alt="" />
          <h6>VIP Invitation</h6>
        </div> 
      */}

      {activeInvite?.bam_role?.bam_casting?.date_created &&
        <div className="invitation-date">
          <p>Release date</p>
          <h5>{formatDate(activeInvite?.bam_role?.bam_casting?.date_created)}</h5>
        </div>}

      <div className="extra-information">
        {/* <button>Extras</button>
                <h6>Description</h6> */}
        <p>{activeInvite?.bam_role?.bam_casting?.des}</p>
      </div>


      {activeInvite?.item?.message && (
        <div className="bg-green-100 whitespace-pre-wrap text-green-500 font-medium text-md py-3 px-4 rounded-md mt-5">
          <div>{activeInvite?.item?.message}</div>
        </div>
      )}
      <div className="invitation-role">
        <div className="role-info">
          <h5>Role: {activeInvite?.bam_role?.name} <span>({activeInvite?.bam_role?.role_id})</span></h5>
          <p>{activeInvite?.bam_role?.des}
          </p>
        </div>
        <div className="talent-space">
          <h4>Talent specs:</h4>
          <div className="role-basicInfo">
            <div className="single-info">
              <h5>Gender</h5>
              <h6>{activeInvite?.bam_role?.gender_female === 1 ? "Female" : activeInvite?.bam_role?.gender_male === 1 ? 'Male' : 'Any'}</h6>
            </div>
            {/* <div className="single-info">
                            <h5>Ethnicity</h5>
                            <h6> {activeInvite?.item?.role?.ethnicity} </h6>
                        </div> */}
            <div className="single-info">
              <h5>Age</h5>
              <h6> {activeInvite?.bam_role?.age_min} - {activeInvite?.bam_role?.age_max} </h6>
            </div>
          </div>
        </div>
        <div className="expire-invitation">
          <h6>Expiration date</h6>
          {activeInvite?.bam_role?.expiration_timestamp &&
            <h5>{formatDate(activeInvite?.bam_role?.expiration_timestamp)}</h5>}

          <Link href={`/auditions/apply?roleId=${activeInvite?.item?.role?.id}&jobId=${activeInvite?.item?.role?.jobId}`}>
            <a>
              <button>Apply for this role</button>
            </a>
          </Link>
        </div>
      </div>
    </Root>
  )
}

const Root = styled.div`
  padding: 2rem;

  .title-invitation {
    h4 {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: ${(p) => p.theme.base};
      // margin-top:20px;
      margin-right: 10px;
      font-family: "Montserrat-Regular" !important;
    }
  }

  .location-invitation {
    img {
      margin-right: 10px;
    }
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      color: ${(p) => p.theme.primary};
      margin-top: 8px;
      font-family: "Montserrat-Regular" !important;
    }
  }

  .vip-tag {
    display: flex;
    align-items: center;
    background: red;
    padding: 10px 15px;
    border-radius: 40px;
    width: max-content;

    img {
      width: 20px;
    }
  }

  .invitation-date {
    margin-top: 15px;

    p {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: rgba(60, 60, 67, 0.6);
      font-family: "Montserrat-Regular" !important;
    }
    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      margin-top: 3px;
      font-family: "Montserrat-Regular" !important;
    }
  }

  .extra-information {
    margin-top: 15px;

    button {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 200px;
      color: ${(p) => p.theme.base}
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      padding: 9px 15px;
      font-family: "Montserrat-Regular" !important;
    }

    h6 {
      color: rgba(60, 60, 67, 0.6);
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      margin-top: 15px;
      font-family: "Montserrat-Regular" !important;
    }

    p {
      margin-top: 3px;
      line-height: 18px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: ${(p) => p.theme.base}
      font-family: "Montserrat-Regular" !important;
    }
  }

  .invitation-role {
    padding: 20px 20px 25px 20px;
    background: #fff;
    margin-top: 20px;

    .role-info {
      h5 {
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: ${(p) => p.theme.base}
        font-family: "Montserrat-Regular" !important;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: ${(p) => p.theme.base}
        line-height: 15px;
        margin-top: 7px;
        font-family: "Montserrat-Regular" !important;
      }
    }

    .talent-space {
      margin-top: 20px;

      h4 {
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: ${(p) => p.theme.base}
        font-family: "Montserrat-Regular" !important;
      }

      .role-basicInfo {
        .single-info {
          margin-top: 12px;
          display: flex;
          align-items: center;

          h5 {
            width: 60px;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            color: ${(p) => p.theme.base}
            font-family: "Montserrat-Regular" !important;
          }

          h6 {
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            color: ${(p) => p.theme.primary};
            margin-left: 36px;
            font-family: "Montserrat-Regular" !important;
          }
        }
      }
    }

    .expire-invitation {
      margin-top: 20px;

      h6 {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        color: rgba(60, 60, 67, 0.6);
        font-family: "Montserrat-Regular" !important;
      }

      h5 {
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        margin-top: 3px;
        color: ${(p) => p.theme.base}
        font-family: "Montserrat-Regular" !important;
      }

      button {
        margin-top: 25px;
        background: ${(p) => p.theme.primary};
        border-radius: 4px;
        padding: 10px 24px;
        color: #ffffff;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        font-family: "Montserrat-Regular" !important;
      }
    }
  }

`
const Tag = styled.div`
    background: ${p => p.theme.pure};
    border: 1px solid ${p => p.theme.border};
    border-radius: 200px;
    width: fit-content;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
`
const Card = styled.div`
    background: ${p => p.theme.pure};
    border-radius: 5px;
    padding: 20px;

    h3 {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
    }
`