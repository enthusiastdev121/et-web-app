import { THEME } from "@/utils/constants/theme";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { acceptFriendRequestApi, declineFriendRequestApi } from "network/apis/talent";
import { useState } from "react";
import styled from "styled-components";
import { FriendRequestD } from "types/talents";
import toast from "react-hot-toast";
import Link from "next/link";

export default function ConnectionCard({
    profile_picture_path,
    name,
    talentnum,
    setConnections,
    talentlogin
}: any) {
    const {
        auth: { authenticated },
        token
    } = useAuth();

    const [loadingAccept, setLoadingAccept] = useState(false)
    const [loadingDecline, setLoadingDecline] = useState(false)

    const AcceptRequest = async () => {
        try {
            setLoadingAccept(true)
            const res = await acceptFriendRequestApi({
                token, raw: {
                    talentnum1: talentnum
                }
            })
            setConnections((prevArr: FriendRequestD[]) => prevArr.filter(item => item?.talentnum !== talentnum))
            toast.success("Friend added successfully!")
            setLoadingAccept(false)
        } catch (err) {
            console.log(err);
            toast.error("An error occurred!")
            setLoadingAccept(false)
        }
    }

    const DeclineRequest = async () => {
        try {
            setLoadingDecline(true)
            const res = await declineFriendRequestApi({
                token, talentnum
            })
            setConnections((prevArr: FriendRequestD[]) => prevArr.filter(item => item?.talentnum !== talentnum))
            toast.success("Declined!")
            setLoadingDecline(false)
        } catch (err) {
            console.log(err);
            toast.error("An error occurred!")
            setLoadingDecline(false)
        }
    }

    return (
        <CardContainer className="mb-5 rounded text-sm relative md:w-auto w-full">
            {/* HEADING */}
            {profile_picture_path != null &&
                <Link href={`/${talentlogin}`} passHref>
                    <img
                        src={profile_picture_path}
                        alt="Profile"
                        className="rounded cursor-pointer"
                    />
                </Link>
            }
            {profile_picture_path == null &&
                <Link href={`/${talentlogin}`} passHref>
                    <img
                        src="/images/user_profile.png"
                        alt="Profile"
                        className="rounded cursor-pointer"
                    />
                </Link>
            }

            <div className="flex items-center gap-3 justify-center">
                <Link href={`/${talentlogin}`} passHref>
                    <a>
                        <div className="title mt-5">
                            {name}
                        </div>
                    </a>
                </Link>
            </div>

            <div className="flex items-center gap-3 justify-center mb-3 mt-2">
                <Button primary loading={loadingAccept} onClick={AcceptRequest}>
                    Accept
                </Button>
                <Button primary outlined loading={loadingDecline} onClick={DeclineRequest}>
                    Decline
                </Button>
            </div>


        </CardContainer>
    )
}


export const CardContainer = styled.div`
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 0px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  // margin-right:20px;
  // @media (max-width: 767px) {
  //   margin-right:0 !important;
  // }
  h2 {
    color: ${(p: any) => p.theme.text};

    a:hover {
      color: ${(p: any) => p.theme.primary};
      transition: all 0.3s ease;
    }
  }

  .play-icon {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 5px;
    bottom: 90px;
    background: white;
    border-radius: 50%;
    color: #000;
  }

  img {
    max-width: 100%;
    width: 100%;
    aspect-ratio: ${THEME.profilePicRatio};
    object-fit: cover;

    @media (max-width: 767px) {
      width: 100%;
      height: 600px;
    }

    @media (max-width: 499px) {
      width: 100%;
      height: 500px;
    }
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: ${(p) => p.theme.base}
    padding-top: 13px;
  }
  .sub_title {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: rgba(60, 60, 67, 0.6);
    padding-top: 2px;
  }

  .follow-btn {
    margin-top: 10px;
    width: 152px;
    height: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    background: ${(p) => p.theme.paper};
    border: 1px solid #a1a1aa;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;
