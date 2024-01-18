import { useContext, createContext, useState, useEffect } from "react";
import { getConfig } from "../network/apis";

const RootContext = createContext({
  config: {},
});

export function useConfig() {
  const context = useContext(RootContext);
  if (context === undefined) {
    throw new Error("useConfig must be used within a RootContext");
  }
  return context?.config;
}

export default function RootProvider({ children }: { children: any }) {
  const [config, setConfig] = useState({
    loading: false,
    fetching: false,
  });

  useEffect(() => {
    const fetchNew = async () => {
      setConfig((s) => ({ ...s, fetching: true }));
      try {
        const res = await getConfig();
        // console.log("RRRRRR- ", res)
        if (res.oauth_client.secret) {
          const rr = {
            fetching: false,
            clientId: res.oauth_client.id,
            clientSecret: res.oauth_client.secret,
            userType: "bam_talentci",
            jobInterest: res.job_interest,
          };
          setConfig((s) => ({
            ...s,
            ...rr,
          }));
          localStorage.setItem("config", JSON.stringify(rr));
        }
      } catch (err) {
        console.log("Err", err);
        setConfig((s) => ({ ...s, fetching: false }));
      }
    };
    const setup = () => {
      setConfig((s) => ({ ...s, loading: true }));
      const local = localStorage.getItem("config");
      setConfig((s) => ({ ...s, loading: false }));

      if (local) {
        setConfig((s) => ({ ...s, ...JSON.parse(local), loading: false }));
        fetchNew();
      } else {
        fetchNew();
      }
    };
    setup();
  }, []);

  return (
    <RootContext.Provider
      value={{
        config: config,
      }}
    >
      {children}
    </RootContext.Provider>
  );
}
