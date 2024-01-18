import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { updateProfileDetailApi } from "network/apis/ownProfile";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer } from "./styles";

export default function EditName() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { user, token } = useAuth();
  const { setProfile, profile } = useProfileStore();
  const [fname, setFName] = useState(profile?.fname);
  const [lname, setLName] = useState(profile?.lname);
  const [companyName, setCompanyName] = useState(profile?.companyName);
  const [displayName, setDisplayName] = useState(profile?.displayName || "");

  const onSave = async () => {
    if (!lname?.trim() || !fname?.trim()) {
      return;
    }
    try {
      setLoading(true);
      const res = await updateProfileDetailApi({
        token,
        talentnum: user?.talentnum,
        raw: {
          fname,
          lname,
          display_name: displayName,
          company_name: companyName,
        },
      });
      setLoading(false);
      setProfile((s) => ({
        ...s,
        fname,
        lname,
        name: fname + " " + lname,
        displayName,
        companyName,
      }));
      router.back();
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  };

  return (
    <ParentContainer className="padding-small">
      <div
        className="padding-x"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between items-center">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Edit Name</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div>
          <div className="mb-5">
            <label htmlFor="fname" className="font-semibold mb-1 block">

              First Name
            </label>
            <Input
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="lname" className="font-semibold mb-1 block">
              Last Name
            </label>
            <Input
              type="text"
              id="lname"
              value={lname}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="companyName" className="font-semibold mb-1 block">
              Company Name
            </label>
            <Input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <h2 className="font-semibold block mb-1">Display Name</h2>
            <small className="text-sm mb-3 block dim-text">
              Choose your public profile name
            </small>
            {fname && (
              <div>
                <input
                  type="radio"
                  name="display-name"
                  id="1"
                  checked={displayName === `${fname}`}
                  onChange={() => setDisplayName(fname)}
                />
                <label htmlFor="1" className="font-semibold ml-3">
                  {fname}
                </label>
              </div>
            )}
            {fname && lname && (
              <div>
                <input
                  type="radio"
                  name="display-name"
                  id="2"
                  onChange={() => setDisplayName(fname + " " + lname)}
                  checked={displayName === `${fname} ${lname}`}
                />
                <label className="font-semibold ml-3" htmlFor="2">
                  {fname} {lname}
                </label>
              </div>
            )}
            {fname && lname && (
              <div>
                <input
                  type="radio"
                  name="display-name"
                  id="3"
                  onChange={() =>
                    setDisplayName(`${fname} ${lname.charAt(0)}.`)
                  }
                  checked={displayName === `${fname} ${lname.charAt(0)}.`}
                />
                <label className="font-semibold ml-3" htmlFor="3">
                  {fname} {lname.charAt(0)}.
                </label>
              </div>
            )}
            <div style={{ marginTop: 10 }}>
              <small className="text-sm mb-3 block dim-text">
                Type yourself...
              </small>

              <Input
                type="text"
                id="lname"
                placeholder="Sandman"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
          </div>

          <hr />

          <div className="mt-5 mb-10">
            <h2 className="font-semibold mb-1 block">
              Your Explore Talent URL website
            </h2>
            {/* <small className="text-sm mb-3 block dim-text">
              Customise your profile page web address
            </small> */}
            {/* <div className="flex items-center">
              <span>https://www.exploretalent.com/</span>
              <Input
                type="text"
                value={user.talentlogin}
                placeholder="adamsndman"
                style={{ backgroundColor: "transparent" }}
              /> */}
            <Link href={`https://www.exploretalent.com/${user.talentlogin}`}>
              <a target="_blank" className="txt-link text-sm md:text-base"   >
                https://www.exploretalent.com/
                <strong>{user.talentlogin}</strong>
              </a>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-5">
            <Button primary outlined onClick={() => router.back()}>
              Cancel
            </Button>
            <Button loading={loading} size="large" primary onClick={onSave}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </ParentContainer>
  );
}
