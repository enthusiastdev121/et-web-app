import SingleNav from "components/Layout/Header/SingleNav";
import EditCredits from "containers/editProfilePages/editCredits";
import { useRouter } from "next/router";
import { withRouter } from "next/router";
import { useEffect, useState } from "react";

function EditCreditExperiencePage(props: any) {
  const [route, setRoute] = useState([]);
  useEffect(() => {
    setRoute(props.router.query);
  }, [props.router.query]);

  console.log(props.router.query);

  return (
    <>
      <SingleNav />
      <EditCredits route={route} />
    </>
  );
}

export default withRouter(EditCreditExperiencePage);
