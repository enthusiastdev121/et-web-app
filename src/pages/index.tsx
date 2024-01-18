import dynamic from 'next/dynamic'


import Layout from "components/Layout";
import HomePage from "../containers/whitelabelHomepage/exploretalent";

// Talento
// import TalentoPage from "containers/talento/TalentoHome";
const TalentoPage = dynamic(() => import('containers/whitelabelHomepage/talento'))



//Adusitions
// import EtauditionPage from "containers/etaudition";
const EtauditionPage = dynamic(() => import('containers/whitelabelHomepage/etaudition'))

//Modeling
import ModelingPage from "containers/whitelabelHomepage/modeling";

//Adorable Kid
import AdorableKids from "containers/whitelabelHomepage/adorableKids";


//Cebu Modeling




import { useHost } from "context/HostContext";

import styled from "styled-components";
import { useProfileStore } from "context/ProfileStore";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from 'components/Spinner';
import { WHITELABELS } from '@/utils/whitelabelConfig';
import CebuModeling from 'containers/whitelabelHomepage/cebuModeling';
import ManilaModeling from 'containers/whitelabelHomepage/manilaModeling';




export default function Home() {
  const router = useRouter()
  const hostname = useHost();
  const { profile } = useProfileStore()

  useEffect(() => {
    if (!profile?.talentlogin) return;
    router.push("/" + profile?.talentlogin)
  }, [profile?.talentlogin]);


  // return (
  //   <Layout feature={false} bg="#F8F9FB">
  //     <HomePage />
  //   </Layout>
  // )



  if (typeof window !== 'undefined' && localStorage && localStorage.getItem('creds') && JSON.parse(localStorage.getItem('creds') || "{}").token) {
    return <>


    </>
  } else {



    return <>
      {
        hostname === WHITELABELS.exploretalent ?
          <Layout feature={false} bg="#F8F9FB" whitelabel={hostname}>
            <HomePage />
          </Layout>

          : hostname === WHITELABELS.talento ?
            <Layout feature={false} bg="#000000" whitelabel={hostname}>
              <TalentoPage />
            </Layout>

            : hostname === WHITELABELS.auditions ?
              <Layout feature={false} bg="#fff" whitelabel={hostname}>
                <EtauditionPage />
              </Layout>

              : hostname === WHITELABELS.adorableKids ?
                <Layout feature={false} bg="#F8F9FB" whitelabel={hostname}>
                  <AdorableKids />
                </Layout>

                : hostname === WHITELABELS.modeling ?
                  <Layout feature={false} bg="#000000" whitelabel={hostname}>
                    <Root>
                      <ModelingPage />
                    </Root>
                  </Layout>
                  : hostname === WHITELABELS.manilaModeling ?
                    <Layout feature={false} bg="#fff" whitelabel={hostname}>
                      <ManilaModeling />
                    </Layout> :
                    hostname === WHITELABELS.cebuModeling ?
                      <Layout feature={false} bg="#fff" whitelabel={hostname}>
                        <CebuModeling />
                      </Layout> : <></>}
    </>
  }
}

const Root = styled.div`
      background-color:#000;
      `;


