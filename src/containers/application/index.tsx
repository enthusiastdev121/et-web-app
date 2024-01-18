import ApplicationList from "./ApplicationList";
import { Main } from "./Applications.styled";
import Header from "./Header";
import Info from "./Info";
import Nav from "./Nav";
import { useAuth } from "../../context/AuthContext";
import CreateAccountBox from "../../components/CreateAccountBox";

export default function Application() {
  const {
    auth: { authenticated },
  } = useAuth();
  return (
    <>
      {authenticated ? (
        <div>
          <Header />
          <Main className="">
            <div className="py-10 px-10v">
              <Info />
            </div>

            <div className="boxShadow">
              <Nav />
            </div>

            <div className="py-10 px-10v">
              <div className="boxShadow">
                <ApplicationList />
              </div>
            </div>
          </Main>
        </div>
      ) : (
        <CreateAccountBox />
      )}
    </>
  );
}
