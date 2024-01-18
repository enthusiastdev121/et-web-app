import { useAuth } from "context/AuthContext";
import { useMessagingV2 } from "context/MessagingContextV2";
// import { useMessaging } from "context/MessagingContext";
import { sortBy } from "lodash";
import { formatNotificationRes } from "network/apiFormatter/notifications";
import { getNotificationApi, getUnreadNotificationsCountApi, readAllNotificationsApi, updateNotificationStatusApi } from "network/apis/notifications";
import { padding, rgba } from "polished";
import { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsCheck2 } from "react-icons/bs";
import styled from "styled-components";
import EarlierNotifications from "./EarlierNotifications";
import MatchJobs from "./MatchJobs";
import NewNotifications from "./NewNotifications";
import NotificationCard from "./NotificationCard";

export default function NotificationDropdown({ setToggleNotification, toggleNotification }: any) {
  const [activeAll, setActiveAll] = useState(true);
  const [activeUnread, setActiveUnread] = useState(false);
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [allRead, setAllRead] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0)
  const [statusUpdate, setStatusUpdate] = useState(false);
  // const { notificationCount } = useMessaging();
  const { notificationCount, setNotificationCount } = useMessagingV2();
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const getNotifications = async () => {
      try {
        !isOpen && setLoading(true);
        const res = await getNotificationApi({ token, sortBy: activeUnread ? 'unread' : '' });
        const data = res?.data?.map((item: any) => formatNotificationRes(item))
        const res2 = await getUnreadNotificationsCountApi(token);
        setUnreadCount(res2?.total_unread_count)
        setNotifications(data);
        setLoading(false);
        setIsOpen(true);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getNotifications();
  }, [token, allRead, statusUpdate, activeUnread, notificationCount]);

  const UpdateStatus = async (id: number) => {
    try {
      const raw = {
        status: 1
      }
      const res = await updateNotificationStatusApi({ token, raw, id })
      setStatusUpdate(true)
    } catch (err) {
      console.log(err);
    }
  }

  const readAllNotifications = async () => {
    try {
      await readAllNotificationsApi({ token });
      setNotificationCount(0);
      setAllRead(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ClickAwayListener onClickAway={() => {
      setToggleNotification(false)
      setIsOpen(false)
    }}>
      <DropdownMessage className="no-scroll">

        <div className="message-row">
          <div className="flex items-center justify-between relative">
            <h3>Notifications</h3>
            <BiDotsHorizontalRounded className="cursor-pointer" onClick={() => setShowOptions(!showOptions)} />

            {
              showOptions &&
              (
                <ClickAwayListener onClickAway={() => setShowOptions(false)}>
                  <Options>
                    <Option onClick={readAllNotifications}>
                      <BsCheck2 className="inline text-lg" /> Mark all as read
                    </Option>
                  </Options>
                </ClickAwayListener>
              )
            }
          </div>

          <div className="flex item-center gap-1">
            <Button active={activeAll} onClick={() => {
              setActiveAll(true);
              setActiveUnread(false);
            }}>All</Button>
            <Button active={activeUnread} onClick={() => {
              setActiveAll(false);
              setActiveUnread(true);
            }}>Unread</Button>
          </div>
        </div>

        {/* <h3 style={{ fontSize: 14, fontWeight: 600, padding: '0 15px' }}>
          New
        </h3> */}



        {/* {!loading && unreadCount > 0 && <NotificationCard pic="/images/item.png" message={`You have ${unreadCount} Unread messages, check out your messages now`} time={'2 mins ago'} link="#" />
        } */}



        {/* <NewNotifications notifications={activeUnread ? notifications.filter(notification => notification.status === 0) : notifications} loading={loading} UpdateStatus={UpdateStatus} /> */}
        <NewNotifications notifications={notifications} loading={loading} UpdateStatus={UpdateStatus} setNotifications={setNotifications} />

        <MatchJobs />

        {/* <h3 style={{ fontSize: 14, fontWeight: 600, padding: '0 15px', marginTop: 15 }}>
          Earlier
        </h3>
        <EarlierNotifications /> */}

      </DropdownMessage>
    </ClickAwayListener>
  )
}

const DropdownMessage = styled.div`
  position: absolute;
  z-index: 1;
  top: 62px;
  right: 120px;
  background-color: ${(p: any) => p.theme.pure};
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  width: 390px;
  max-width: 100vw;
  height: calc(100vh - 62px);
  overflow-y: auto;

  .fixed-layer-messages {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, #ffffff 51.16%);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    height: calc(100vh - 62px);
    width: 100%;
    max-width: 400px;
    position: fixed;
    z-index: 99;
    top: 62px;
    padding: 200px 33px 0 33px;

    img {
      margin: 0 auto;
    }

    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
       color: ${p => p.theme.base};
      max-width: 230px;
      margin: 0 auto;
      font-family: "Montserrat-Regular" !important;
      text-align: center;
      margin-top: 19px;
    }

    h5 {
      text-align: center;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
       color: ${p => p.theme.base};
      margin-top: 10px;

      span {
        font-weight: 700;
      }
    }

    button {
      background: #ffffff;
      border: 1px solid #2c8bed;
      border-radius: 4px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: ${p => p.theme.primary};
      width: 100%;
      padding: 10px 0;
      margin-top: 13px;
    }
  }

  @media (max-width: 500px) {
    position: absolute;
    right: 0;
    min-width: 90%;
    max-height: 100vh;
    height: calc(100vh - 100px);
  }

  @media (min-width: 500px) and (max-width: 1440px) {
    right: 0;
  }

  .message-row {
    padding: 20px 15px 17px 15px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    img {
      cursor: pointer;
    }
  }

  .tabs-messages {
    padding: 0 15px 12.5px 15px;

    button {
      margin-right: 10px;
      height: 33px;
      ling-height: 33px;
    }

    .de-active {
      padding: 0px 15px;
      border-radius: 200px;
      border: 1px solid #e5e7eb;
      background: ${p => p.theme.pure};
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
       color: ${p => p.theme.base};
    }

    .active {
      padding: 0px 15px;
      border-radius: 200px;
      border: 1px solid #e5e7eb;
      background: ${p => p.theme.primary};
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: #ffffff;
    }
  }
`;

const Button = styled.button<{ active: boolean }>`
  font-size: 12px;
  border-radius: 30px;
  padding: 3px 15px;
  color: ${p => p.active ? '#fff' : p.theme.base};
  border: 1px solid ${p => p.active ? p.theme.primary : rgba(p.theme.base, 0.5)};
  background-color: ${p => p.active ? p.theme.primary : 'transparent'};
`

const Options = styled.div`
  background: ${p => p.theme.pure};
  border: 1px solid ${p => p.theme.border};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 20px;
  right: 0;
`
const Option = styled.div`
font-weight: 500;
color: ${p => p.theme.primary};
padding: 10px;
cursor: pointer;
font-size: 14px;

&:hover {
  background: ${p => rgba(p.theme.border, 0.1)};
}
`