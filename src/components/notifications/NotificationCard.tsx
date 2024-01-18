import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useMessagingV2 } from "context/MessagingContextV2";
// import { useMessaging } from "context/MessagingContext";
import { updateNotificationStatusApi } from "network/apis/notifications";
import { acceptFriendRequestApi, declineFriendRequestApi } from "network/apis/talent";
import Link from "next/link";
import { useRouter } from "next/router";
import { rgba } from "polished";
import { useState } from "react";
import toast from "react-hot-toast";
import { GoPrimitiveDot } from "react-icons/go";
import styled from "styled-components"
import { NotificationItemD } from "types/notifications";

export default function NotificationCard({ pic, name, message, setNotifications, notifications, time, talentnum, status, link, type, id, UpdateStatus }: NotificationItemD) {
    const router = useRouter();
    // const { setNotificationCount } = useMessaging();
    const { setNotificationCount } = useMessagingV2();
    const {
        auth: { authenticated },
        token
    } = useAuth();

    const UpdateStatusDelete = async (id: number) => {
        try {
            const raw = {
                status: 2
            }
            const res = await updateNotificationStatusApi({ token, raw, id })
        } catch (err) {
            console.log(err);
        }
    }

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
            UpdateStatusDelete(id)
            setNotifications(notifications.filter(n => n.id !== id))
            toast.success("Friend added successfully!")
            setLoadingAccept(false)
        } catch (err) {
            console.log(err);
            setNotifications(notifications.filter(n => n.id !== id))
            UpdateStatusDelete(id)
            setLoadingAccept(false)
        }
    }

    const DeclineRequest = async () => {
        try {
            setLoadingDecline(true)
            const res = await declineFriendRequestApi({
                token, talentnum
            })
            UpdateStatusDelete(id)
            setNotifications(notifications.filter(n => n.id !== id))
            toast.success("Declined!")
            setLoadingDecline(false)
        } catch (err) {
            console.log(err);
            setNotifications(notifications.filter(n => n.id !== id))
            UpdateStatusDelete(id)
            setLoadingDecline(false)
        }
    }

    return (
        <>
            <Root onClick={() => {
                router.push(link);
                link !== '#' && setNotificationCount((count: any) => --count);
                link !== '#' && UpdateStatus(id);
            }}>
                <ImgContainer>
                    <img src={pic} alt="" />
                </ImgContainer>

                <TextContainer>
                    <p>
                        <span className="font-semibold">{name}</span> {message}
                    </p>
                    <small>{time}</small>
                </TextContainer>


                {status === 0 && <div className="txt-primary justify-self-end ml-auto">
                    <GoPrimitiveDot />
                </div>}
            </Root>


            {
                type === 2 && (
                    <div className="flex items-center gap-3 justify-center mb-3 mt-2">
                        <Button primary loading={loadingAccept} onClick={AcceptRequest}>
                            Accept
                        </Button>
                        <Button primary outlined loading={loadingDecline} onClick={DeclineRequest}>
                            Decline
                        </Button>
                    </div>
                )
            }
        </>
    )
}

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    color: ${p => p.theme.base};
    font-weight: 400;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        background-color: ${p => rgba(p.theme.border, 0.5)};
        transition: all 0.3s ease;
        border-radius: 5px;
    }
`
const ImgContainer = styled.div`
    justify-self: start;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
`
const TextContainer = styled.div`
    width: 70%;

    p {
    }

    small {
        color: rgba(60, 60, 67, 0.6);
    }
`