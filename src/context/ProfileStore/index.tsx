import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAuth } from "../AuthContext";
import {
  getProfilePlaceholderApi,
} from "network/apis/app";
import { getProfileDetailService } from "../../network/services/profile";

import { ProfileStoreInterface } from "./types";
import { UserProfileOwnD } from "types/profile";
import { getCdProfileDetailApi } from "network/apis/cd/profile";
import { formatCdUserProfile } from "network/apiFormatter/cd/profile";
import { UserCdProfileOwnD } from "types/cd/profile";

const store = createContext<ProfileStoreInterface>({
  profile: {} as UserProfileOwnD,
  placeHolder: {},
  categoryPlaceholder: {},
  replaceInterest: {},
} as ProfileStoreInterface);

const { Provider } = store;

const ProfileStoreProvider = ({ children }: any) => {
  const [placeHolder, setPlaceHolder] = useState({
    loading: false,
    data: {},
  });
  const [categoryPlaceholder, setCategoryPlaceholder] = useState({
    loading: false,
    data: {},
  });
  const [profile, setProfile] = useState<UserProfileOwnD>(
    {} as UserProfileOwnD
  );
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const { token, user, userType }: any = useAuth();

  /**
   * CD PROFILE
   */
  // const [cdProfile, setCdProfile] = useState<UserCdProfileOwnD>(
  //   {} as UserCdProfileOwnD
  // );
  /**
   * 
   */
  console.log(userType, "===");



  // SELF
  useEffect(() => {
    const fetchPlaceholder = async () => {
      try {
        const res = await getProfilePlaceholderApi();
        if (typeof res === "object") {
          setPlaceHolder((s) => ({
            loading: false,
            data: res,
          }));
        }
      } catch (err) {
        setPlaceHolder((s) => ({ ...s, loading: false }));
        console.log("Err", err);
      }
    };
    fetchPlaceholder();
  }, []);

  // useEffect(() => {
  //   const fetchLocal = async () => {
  //     try {
  //       const res = await getProfileCategoryPlaceholderApi(
  //         JSON.stringify({
  //           category_name: ["Presenter", "Photography", "Hair, Makeup, & Styling", "Film & Stage Crew", "Acting", "Extras", "Modelling"],
  //         })
  //       );
  //       if (typeof res === "object") {
  //         setCategoryPlaceholder((s) => ({ ...s, loading: false, data: res }));
  //       }
  //     } catch (err) {
  //       console.log("Err", err);
  //     }
  //   };
  //   // fetchLocal();
  // }, [profile]);

  const fetchProfile = useCallback(
    async (refresh: boolean = false) => {
      try {
        if (!token || userType !== 'talent') {
          console.log(userType, "rannnn user_typetalent");
          return;
        }

        // if (!token) {
        //   return
        // }

        if (refresh) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }
        const res = await getProfileDetailService({
          token,
        });
        console.log(res,"12345");
        
        setProfile((s) => ({ ...s, ...res }));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setRefreshing(false);
        console.log("Error", err);
      }
    },
    [token, userType]
  );

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const replaceInterest = (ne: any) => {
    setProfile((s) => ({
      ...s,
      interest: ne.map((i: any) => ({
        id: i.id,
        label: i.label,
        sub: i.sub?.map((i2: any) => ({ label: i2.label, id: i2.id })),
      })),
    }));
  };


  /**
   * CD
   */


  // const fetchCdProfile = useCallback(
  //   async (refresh: boolean = false) => {
  //     try {
  //       if (!token || userType !== 'cd') {
  //         return;
  //       }
  //       if (refresh) {
  //         setRefreshing(true);
  //       }
  //       const res = await getCdProfileDetailApi({ token });
  //       // console.log("CD OWN PROFLE RES ----------", res);
  //       const formateRes = formatCdUserProfile(res);
  //       setCdProfile((s) => ({ ...s, ...formateRes }));
  //     }
  //     catch (err) {
  //       setRefreshing(false);
  //       // console.log("Err------------------", err);
  //     }
  //   },
  //   [token, userType]
  // );
  // useEffect(() => {
  //   fetchCdProfile();
  // }, [fetchCdProfile]);


  return (
    <Provider
      value={{
        profile,
        setProfile,
        // cdProfile,
        // setCdProfile,
        fetchProfile,
        // fetchCdProfile,
        refreshProfile: () => fetchProfile(true),
        placeHolder,
        categoryPlaceholder,
        replaceInterest,
        loading,
        refreshing
      }}
    >
      {children}
    </Provider>
  );
};

export { store, ProfileStoreProvider };

export function useProfileStore(): ProfileStoreInterface {
  const context = useContext<ProfileStoreInterface>(store);
  if (context === undefined) {
    throw new Error(
      "useProfileStore must be used within a ProfileStoreContext"
    );
  }
  return context;
}




