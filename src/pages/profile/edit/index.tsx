import EditUserProfile from "containers/editProfile";
import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import AgeConfirmation from "components/AgeConfirmation";
import { WHITELABEL_NAME } from "@/utils/envProviders";

export default function EditProfile() {
  const router = useRouter()
  console.log("router.query is: ", router.query);
  const [newUser, setNewUser] = useState(false)


  useEffect(() => {
    if (router.query.keyword === "app-tour") {
      setNewUser(true)
    }
  }, [router.query.keyword])

  return (

    <Layout title={`${WHITELABEL_NAME} | Profile`}>

      <AgeConfirmation />
      <EditUserProfile newUser={newUser} />
    </Layout>
  );
}
