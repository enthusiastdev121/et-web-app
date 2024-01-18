import { apiParams } from "@/utils/apiHelper";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  updateGuardianProfileDetailApi,
  updatePhysicalAttrsApi,
  updateProfileDetailApi,
  updateProfileInfoApi,
  updateSocialLinksApi,
  updateTalentInterestApi,
} from "network/apis/ownProfile";
import React, { useEffect, useState } from "react";
import Age from "./Age";
import Appearance from "./Appearance";
import CompletionSlide from "./CompletionSlide";
import Email from "./Email";
import Ethnicity from "./Ethnicity";
import Gender from "./Gender";
import HeadShot from "./HeadShot";
import Height from "./Height";
import Interest from "./Interest";
import Location from "./Locaion";
import Name from "./Name";
import Phone from "./Phone";
import SocialAccounts from "./SocialAccounts";
import Router from 'next/router'
import Dob from "./Dob";

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState<StepD>("gender");
  const [allData, setAllData] = useState<any>({});
  const { token, user, logout } = useAuth();
  const { setProfile, profile, replaceInterest, placeHolder } =
    useProfileStore();
  const [loading, setLoading] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(true);
  const [isChild, setIsChild] = useState(false);

  useEffect(() => {
    console.log("AllData: ", allData);
  }, [allData]);

  const submitOne = async () => {
    console.log("DATA", allData);
    console.log("isChild: ", isChild);

    try {
      setLoading(true);
      let dat = allData.code ? allData.code === "1" ? {
        cell: allData.phone
      } : {
        cell: allData.code + " " + allData.phone
      } : '';

      // name, phone, zip, country
      const infoRes = await updateProfileDetailApi({
        token,
        talentnum: user?.talentnum,
        raw: {
          fname: allData.fName,
          lname: allData.lName,
          dat,
          cell: dat.cell,
          address1: allData.address,
          zip: allData.zip,
          country: allData.country,
          state: allData.state,
          city: allData.city,
        },
      });
      console.log("INFO RES", infoRes);
      setProfile((s: any) => ({
        ...s,
        fname: allData.fName,
        lname: allData.lName,
        name: allData.fName + " " + allData.lName,
        phone: dat.cell || "",
        zip: allData.zip,
        country: allData.countryCode,
      }));

      // Social Links
      const socialRes = await updateSocialLinksApi({
        raw: {
          facebook: allData?.socialLinks?.facebook || "",
          youtube: allData?.socialLinks?.youtube || "",
          twitter: allData?.socialLinks?.twitter || "",
          tiktok: allData?.socialLinks?.tiktok || "",
          instagram: allData?.socialLinks?.instagram || "",
          external: allData?.socialLinks?.external || "",
        },
        token,
      });
      setProfile((s: any) => ({
        ...s,
        socialLinks: { ...s.socialLinks, ...allData.socialLinks },
      }));

      // Interests
      const interestRes = await updateTalentInterestApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              interests: allData.interest
                ?.filter((i) => i.selected)
                ?.map((i) => ({
                  category_id: i.id,
                  subcategory_id: i.sub
                    ?.filter((i3) => i3.selected)
                    ?.map((i2) => i2.id),
                })),
            },
          })
        )
      );
      replaceInterest(allData.interest?.filter((i: any) => i.selected));

      // sex, age_range
      let kkk = {
        // ethnicity: allData.ethnicity || "",
        sex: allData.gender || "",
        age_range: allData.ageRange || "",
        dobyyyy: allData.dob?.year,
        dobmm: allData.dob?.month,
        dobdd: allData.dob?.date,
      };
      const res = await updatePhysicalAttrsApi(
        token,
        JSON.stringify({ ...kkk })
      );

      if (typeof res === "object") {
        setProfile((s: any) => ({
          ...s,
          ...{ ...kkk },
        }));
      }

      // ethnicity
      const ethnicityRes = await updateProfileInfoApi({
        token: token,
        raw: {
          ethnicity: allData.ethnicity || "",
        }
      })

      if (typeof ethnicityRes === "object") {
        setProfile((s: any) => ({
          ...s,
          ...{ ethnicity: allData.ethnicity || "" },
        }));
      }

      // Guardian Details
      if (isChild) {
        console.log("ran yay!")

        const guardianRes = await updateGuardianProfileDetailApi({
          token,
          raw: {
            gzip: allData.zip,
            gaddress1: allData.address,
            gcountry: allData.countryCode,
            gstate: allData.state,
            gcity: allData.city,
            gphone1: dat.cell,
            gfname: allData.gfname,
            glname: allData.glname,
            gemail: profile.email,
          },
        });
        console.log("GUARDIAN RES", guardianRes);

        logout();

        Router.push({ pathname: '/login/coppa' })

      }

      setLoading(false);
      setApiLoaded(false);
    } catch (err) {
      console.log("ERR", err);
      setLoading(false);
      setApiLoaded(false);
    }
  };

  // sex, age, phone
  const joinTwo = async ({code, phone}:{code: string, phone: string}) => {
    try {
      let kkk = {
        sex: allData.gender || "",
        age_range: allData.ageRange || "",
      };
      let dat = code ? code === "1" ? {
        cell: phone
      } : {
        cell: code + " " + phone
      } : '';

      await updatePhysicalAttrsApi(
        token,
        JSON.stringify({ ...kkk })
      );

      await updateProfileDetailApi({
        token,
        talentnum: user?.talentnum,
        raw: {
          dat,
          cell: dat.cell,
          join_status: 2,
        },
      });

      setProfile((s: any) => ({
        ...s,
        phone: dat.cell || ""
      }));

    } catch (err) {
      console.log("ERR", err);
    }
  }

  //dob
  const joinThree = async ({date, month, year} : {date: number, month: number, year: number}) => {
    try {
    let kkk = {
      // ethnicity: allData.ethnicity || "",
      dobyyyy: year,
      dobmm: month,
      dobdd: date,
    };
    const res = await updatePhysicalAttrsApi(
      token,
      JSON.stringify({ ...kkk })
    );

    await updateProfileDetailApi({
      token,
      talentnum: user?.talentnum,
      raw: { 
        join_status: 3,
      },
    });

    if (typeof res === "object") {
      setProfile((s: any) => ({
        ...s,
        ...{ ...kkk },
      }));
    }

  } catch (err) {
    console.log("ERR", err);
  }

  }


  //ethnicity, location, name, interest, social, headshot
  const joinFour = async () => {
    // ethnicity
    const ethnicityRes = await updateProfileInfoApi({
      token: token,
      raw: {
        ethnicity: allData.ethnicity || "",
      }
    })

    if (typeof ethnicityRes === "object") {
      setProfile((s: any) => ({
        ...s,
        ...{ ethnicity: allData.ethnicity || "" },
      }));
    }

    // state, city, zip, country
    const infoRes = await updateProfileDetailApi({
      token,
      talentnum: user?.talentnum,
      raw: {
        fname: allData.fName,
        lname: allData.lName,
        address1: allData.address,
        zip: allData.zip,
        country: allData.country,
        state: allData.state,
        city: allData.city,
        join_status: 4,
      },
    });

    setProfile((s: any) => ({
      ...s,
      fname: allData.fName,
      lname: allData.lName,
      name: allData.fName + " " + allData.lName,
      zip: allData.zip,
      country: allData.countryCode,
      state: allData.state,
      city: allData.city,
    }));

      // Interests
      const interestRes = await updateTalentInterestApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              interests: allData.interest
                ?.filter((i) => i.selected)
                ?.map((i) => ({
                  category_id: i.id,
                  subcategory_id: i.sub
                    ?.filter((i3) => i3.selected)
                    ?.map((i2) => i2.id),
                })),
            },
          })
        )
      );
      replaceInterest(allData.interest?.filter((i: any) => i.selected));

       // Social Links
       const socialRes = await updateSocialLinksApi({
        raw: {
          facebook: allData?.socialLinks?.facebook || "",
          youtube: allData?.socialLinks?.youtube || "",
          twitter: allData?.socialLinks?.twitter || "",
          tiktok: allData?.socialLinks?.tiktok || "",
          instagram: allData?.socialLinks?.instagram || "",
          external: allData?.socialLinks?.external || "",
        },
        token,
      });
      setProfile((s: any) => ({
        ...s,
        socialLinks: { ...s.socialLinks, ...allData.socialLinks },
      }));

  }

  return (
    <div>
      {currentSlide === "gender" ? (
        <Gender
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide=""
          nextSlide="age"
          setCurrentSlide={setCurrentSlide}
        />
      ) : currentSlide === "age" ? (
        <Age
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="gender"
          nextSlide="phone"
          setCurrentSlide={setCurrentSlide}
          setIsChild={setIsChild}
        />
      ) : currentSlide === "phone" ? (
        <Phone
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="age"
          nextSlide="dob"
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
          onNext={joinTwo} //TODO:
        />
      ) : currentSlide === "dob" ? (
        <Dob
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="age"
          nextSlide="ethinicity"
          setCurrentSlide={setCurrentSlide}
          setIsChild={setIsChild}
          onNext={joinThree} //TODO:
        />
      ) : currentSlide === "ethinicity" ? (
        <Ethnicity
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="dob"
          nextSlide="location"
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
        />
      ) : currentSlide === "location" ? (
        <Location
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="ethinicity"
          nextSlide="name"
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
        />
      ) : currentSlide === "name" ? (
        <Name
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="location"
          nextSlide="interest"
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
        />
      ) : currentSlide === "interest" ? (
        <Interest
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="name"
          nextSlide="social"
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
        />
      ) : currentSlide === "social" ? (
        <SocialAccounts
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="interest"
          nextSlide="headshot"
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
          // onNext={joinFour}
        />
      ) : currentSlide === "headshot" ? (
        <HeadShot
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="social"
          nextSlide="completed"
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
          loading={loading}
          apiLoaded={apiLoaded}
          onNext={joinFour} //TODO:
        // onNext={submitOne}
        />
      ) : currentSlide === "completed" ? (
        <CompletionSlide
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="headshot"
          nextSlide=""
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
        />
      ) : currentSlide === "appearance" ? (
        <Appearance
          value={allData}
          onUpdate={(d: any) => setAllData((s: any) => ({ ...s, ...d }))}
          prevSlide="completed"
          nextSlide=""
          setCurrentSlide={setCurrentSlide}
          isChild={isChild}
        />
      ) : (
        ""
      )}
    </div>
  );
}

type StepD =
  | "gender"
  | "age"
  | "dob"
  | "height"
  | "ethinicity"
  | "location"
  | "name"
  | "email"
  | "phone"
  | "interest"
  | "social"
  | "headshot"
  | "completed"
  | "appearance";

//gender
//age range
//height----
//ethnicity
//country zip
//fname lname
//cell
//inetrest
//social links

// const res = await updatePhysicalAttrsApi(
//   token,
//   JSON.stringify({ ...kk, talentnum: user?.talentnum })
// );

// if (typeof res === "object") {
//   setProfile((s: any) => ({
//     ...s,
//     ...{ ...kk },
//   }));
// }

// let kk = {};
// Object.keys(allData.physicalAttributes).forEach((i) => {
//   placeHolder?.data?.physical_attributes[i]?.options.forEach(
//     (i2: any) => {
//       if (typeof i2 === "string") {
//         kk = {
//           ...kk,
//           [i]:
//             placeHolder?.data?.physical_attributes[i]?.input_type ===
//             "number"
//               ? Number(allData.physicalAttributes[i] || 0)
//               : allData.physicalAttributes[i] || "",
//         };
//       } else {
//         if (i2.label === allData.physicalAttributes[i]) {
//           if (i2.keys) {
//             kk = { ...kk, ...i2.keys };
//           } else {
//             kk = {
//               ...kk,
//               [i]:
//                 placeHolder?.data?.physical_attributes[i]?.input_type ===
//                 "number"
//                   ? Number(i2.label || 0)
//                   : i2.label || "",
//             };
//           }
//         }
//       }
//     }
//   );
// });
