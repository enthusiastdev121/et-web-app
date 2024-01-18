import Header from "./Header";
import MyProfile from "./MyProfile";
import { Main } from "./Dashboard.styled";
import MediaLocker from "./MediaLocker";
import RecentlyViewed from "./RecentlyViewed";
import MessageInbox from "./MessageInbox";
import Applications from "./Applications";
import { useAuth } from "../../context/AuthContext";
import CreateAccountBox from "../../components/CreateAccountBox";

export default function DashboardPage() {
  const {
    auth: { authenticated },
  } = useAuth();

  return (
    <>
      {authenticated ? (
        <>
          <Header />

          <Main className="py-10 lg:py-16 px-10v 2xl:px-20v grid lg:grid-cols-12 gap-5 bg-paper">
            <div className="profile lg:col-span-3">
              <MyProfile />
            </div>

            <div className="applications lg:col-span-6 boxShadow" style={{}}>
              <Applications />
            </div>

            <div className="recentlyViewed lg:col-span-3 boxShado">
              <RecentlyViewed />
            </div>

            <div className="mediaLocker lg:col-span-3">
              <MediaLocker />
            </div>

            <div className="messageInbox lg:col-span-9 boxShadow">
              <MessageInbox />
            </div>
          </Main>
        </>
      ) : (
        <CreateAccountBox />
      )}
    </>
  );
}
