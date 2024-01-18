import styled from "styled-components"
import { NotificationItemD } from "types/notifications";
import NotificationCard from "./NotificationCard"
import Skel from "./Skel";

export default function NewNotifications({ loading, UpdateStatus, notifications, setNotifications }: {
    notifications: NotificationItemD[];
    loading: boolean;
    updateStatus: any;
}) {
    return (
        <Container>
            {
                loading ? <Skel /> :
                    notifications.map((notification: NotificationItemD) => (
                        <NotificationCard
                            key={notification?.id}
                            id={notification?.id}
                            pic={notification?.pic}
                            name={notification?.name}
                            message={notification?.message}
                            time={notification?.time}
                            status={notification?.status}
                            link={notification?.link}
                            UpdateStatus={UpdateStatus}
                            type={notification?.type}
                            talentnum={notification?.talentnum}
                            setNotifications={setNotifications}
                            notifications={notifications}
                        />
                    ))
            }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`