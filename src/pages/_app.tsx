import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CustomThemeProvider from "../theme/CustomThemeProvider";
import { ProfileStoreProvider } from "../context/ProfileStore";
import AuthProvider from "../context/AuthContext";
import RootProvider from "../context/RootContext";
import HostProvider from "../context/HostContext";
import MessagingProviderV2 from "../context/MessagingContextV2";
import { GlobalStyle } from "../styles/Global";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "rc-pagination/assets/index.css";
import { Toaster } from "react-hot-toast";
import App from "next/app";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import ServerDown from "../components/ServerDown";
import { GTM_ID, WHITELABEL } from "../utils/envProviders";
import Script from "next/script";
import MessagePop from "containers/MessagePop";
import GlobalComponents from "containers/GlobalComponents";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import GlobalRegister from "containers/GlobalRegister";
import { Translator } from 'react-auto-translate';
import { GOOGLE_CLOUD_API_KEY } from "@/utils/constants/config";
import { WHITELABELS } from "@/utils/whitelabelConfig";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from "@/utils/envProviders";


NProgress.configure({ showSpinner: false });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

config.autoAddCss = true;


function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const isSignupOrLogin = router.pathname === '/join/talentb' || router.pathname === '/account/login';
  // return <ServerDown />;
  return (
    <>

      <RootProvider>

        <Toaster />


        <AuthProvider>
          <ProfileStoreProvider>
            <HMSRoomProvider>
              <MessagingProviderV2>
                <HostProvider>
                  <CustomThemeProvider>
                    <Translator
                      // cacheProvider={cacheProvider}
                      from='en'
                      to={WHITELABEL === WHITELABELS.talento ? 'es' : 'en'}
                      googleApiKey={GOOGLE_CLOUD_API_KEY}
                    >
                      <GlobalStyle />
                      {/* Conditionally include GoogleReCaptchaProvider */}
                      {isSignupOrLogin && (
                        <GoogleReCaptchaProvider
                          reCaptchaKey={RECAPTCHA_SITE_KEY}
                          scriptProps={{
                            async: false,
                            defer: false,
                            appendTo: "head",
                            nonce: undefined,
                          }}
                        >
                          <Component {...pageProps} />
                        </GoogleReCaptchaProvider>
                      )}

                      {!isSignupOrLogin && <Component {...pageProps} />}
                      {/* ADD GLOBAL REGISTRATION IN THIS COMPONENT  */}
                      <GlobalRegister />
                      {/* GLOBAL END   */}
                      <GlobalComponents />
                    </Translator>

                  </CustomThemeProvider>
                </HostProvider>
              </MessagingProviderV2>
            </HMSRoomProvider>
          </ProfileStoreProvider>
        </AuthProvider>
      </RootProvider>
      {/* ADDSENSE */}

      <Script
        id="Adsense-id"
        data-ad-client="ca-pub-3440052600880388"
        async
        // strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        onError={(e) => {
          console.error("AdSens failed to load", e);
        }}
      />

      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3440052600880388" crossorigin="anonymous" /> */}
    </>
  );
}

export default MyApp;
