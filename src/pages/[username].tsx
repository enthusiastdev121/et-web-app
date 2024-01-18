import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import OtherUserProfile from "containers/otherUserProfile";
import UserProfile from "containers/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { formatUserProfile } from "network/apiFormatter/profile";
import {
  checkOtherUserExistsApi,
  getOtherUserProfileApi,
} from "network/apis/otherUser";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { UserProfileD } from "types/profile";

export default function OtherProfile(props: any) {
  const { userNode, username } = props;
  const { token } = useAuth()
  const { profile } = useProfileStore();
  const [ownScreen, setOwnScreen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!profile.talentlogin || !profile?.talentnum) return;

    if (username == profile?.talentlogin || username == profile?.talentnum) {
      setOwnScreen(true)
      setShowContent(true)
    } else {
      setOwnScreen(false)
      setShowContent(true)
    }
  }, [profile?.talentlogin, profile?.talentnum, username])

  return (
    <>
      <Layout title={`${WHITELABEL_NAME} | Profile`}>
        {
          !token ? <OtherUserProfile {...props} /> :
            showContent ?
              !ownScreen ?
                <OtherUserProfile {...props} />
                :
                <UserProfile />
              : <></>
        }
      </Layout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const username = context.params.username;

  try {
    const res = await getOtherUserProfileApi({
      username: username,
    });

    const userNode = formatUserProfile({ ...res, bam_talentci: { ...res } });

    return {
      props: {
        username,
        userNode: JSON.parse(JSON.stringify(userNode)),
      },
    };
  } catch (err) {
    console.log("Err", err);
    return {
      props: {
        username: username,
        userNode: {} as UserProfileD,
      },
    };
  }
}