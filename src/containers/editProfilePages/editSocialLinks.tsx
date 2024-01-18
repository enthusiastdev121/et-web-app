import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { updateSocialLinksApi } from "network/apis/ownProfile";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HeaderContainer, Input, ParentContainer } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateHttps } from "@/utils/helper";
import Button from "components/Button";
import { toast } from "react-hot-toast";

export default function EditSocialLinks() {
  const router = useRouter();
  const { profile, setProfile } = useProfileStore();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<SocialLinksD>({
    facebook: "",
    youtube: "",
    twitter: "",
    tiktok: "",
    instagram: "",
    external: "",
  });
  const { token } = useAuth();

  useEffect(() => {
    setState({
      facebook:
        profile?.socialLinks?.facebook?.length > 0
          ? profile?.socialLinks?.facebook
          : "",
      youtube:
        profile?.socialLinks?.youtube?.length > 0
          ? profile?.socialLinks?.youtube
          : "",
      twitter:
        profile?.socialLinks?.twitter?.length > 0
          ? profile?.socialLinks?.twitter
          : "",
      tiktok:
        profile?.socialLinks?.tiktok?.length > 0
          ? profile?.socialLinks?.tiktok
          : "",
      instagram:
        profile?.socialLinks?.instagram?.length > 0
          ? profile?.socialLinks?.instagram
          : "",
      external:
        profile?.socialLinks?.external?.length > 0
          ? profile?.socialLinks?.external
          : "",
    });
  }, [profile]);

  const formatLink = ({ base, text }: { base: string; text: string }) => {

    let endStr = '';

    if (text.includes('@') && !endStr.includes('.com')) {
      endStr = text.replace('@', "")
    } else if (text.includes('.com')) {
      endStr = text.replace(/.*\.com\//, '');
    } else if (text) {
      endStr = text
    } else {
      return ''
    }

    return base + endStr;
  }

  const onSave = async () => {
    try {
      // let someInvalid = false;

      // let mod: any = {};
      // Object.keys(state).forEach((i) => {
      //   if (state[i]) {
      //     mod = { ...mod, [i]: state[i] };
      //   }
      // });

      // let validKeys: any = {};

      // Object.keys(mod).forEach((i) => {
      //   if (validateHttps(mod[i])) {
      //     validKeys = { ...validKeys, [i]: mod[i] };
      //   } else {
      //     someInvalid = true;
      //   }
      // });

      // if (someInvalid) {
      //   toast.error("Some links are invalid, Please check");
      // }
      // console.log("VVV", validKeys);

      // setLoading(true);
      // const res = await updateSocialLinksApi({
      //   token,
      //   raw: {
      //     ...validKeys,
      //   },
      // });
      let mod = {
        facebook: formatLink({ base: 'https://www.facebook.com/', text: state.facebook }),
        youtube: formatLink({ base: 'https://www.youtube.com/', text: state.youtube }),
        twitter: formatLink({ base: 'https://twitter.com/', text: state.twitter }),
        tiktok: formatLink({ base: 'https://www.tiktok.com/', text: state.tiktok }),
        instagram: formatLink({ base: 'https://www.instagram.com/', text: state.instagram }),
        external: state.external,
      };


      console.log(mod)
      setLoading(true);
      const res = await updateSocialLinksApi({
        token,
        raw: {
          ...mod,
        },
      });


      setLoading(false);
      console.log("RES", res);

      toast.success("Social links updated successfully")

      if (res) {
        setProfile((s) => ({
          ...s,
          socialLinks: { ...s.socialLinks, ...mod },
        }));
        // if (!someInvalid) {
        //   router.back();
        // }
      }
      router.back()
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  };

  return (
    <ParentContainer className="padding-small">
      <ToastContainer className="Toastify" />
      <div
        className="padding-x"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">
            Social links & website
          </h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-10">
          {/* instagram */}
          <div className="mb-7">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/Instagram.png"
                height={20}
                width={20}
                alt="instagram"
              />{" "}
              <h2 className="font-semibold">Instagram</h2>
            </div>
            <Input
              type="text"
              placeholder="Username"
              value={state.instagram}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  instagram: e.target.value,
                }))
              }
            />
            {/* <small className="dim-text">
              https://instagram.com/
              <strong>{state.instagram.slice(22) || "username"}</strong>{" "}
              <Link href="/" passHref>
                <FaRegQuestionCircle
                  className="text-base"
                  style={{ display: "inline-block" }}
                />
              </Link>
            </small> */}
          </div>
          {/* facebook */}
          <div className="mb-7">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/Facebook.png"
                height={20}
                width={20}
                alt="facebook"
              />{" "}
              <h2 className="font-semibold">Facebook</h2>
            </div>
            <Input
              type="text"
              placeholder="Username"
              value={state.facebook}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  facebook: e.target.value,
                }))
              }
            />
            {/* <small className="dim-text">
              https://facebook.com/
              <strong>{state.facebook.slice(21) || "username"}</strong>{" "}
              <Link href="/" passHref>
                <FaRegQuestionCircle
                  className="text-base"
                  style={{ display: "inline-block" }}
                />
              </Link>
            </small> */}
          </div>
          {/* twitter */}
          <div className="mb-7">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/Twitter.png"
                height={20}
                width={20}
                alt="twitter"
              />{" "}
              <h2 className="font-semibold">Twitter</h2>
            </div>
            <Input
              type="text"
              placeholder="Username"
              value={state.twitter}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  twitter: e.target.value,
                }))
              }
            />
            {/* <small className="dim-text">
              https://twitter.com/
              <strong>{state.twitter.slice(20) || "username"}</strong>{" "}
              <Link href="/" passHref>
                <FaRegQuestionCircle
                  className="text-base"
                  style={{ display: "inline-block" }}
                />
              </Link>
            </small> */}
          </div>
          {/* youtube */}
          <div className="mb-7">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/YouTube.png"
                height={20}
                width={20}
                alt="youtube"
              />{" "}
              <h2 className="font-semibold">Youtube</h2>
            </div>
            <Input
              type="text"
              placeholder="Username"
              value={state.youtube}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  youtube: e.target.value,
                }))
              }
            />
            {/* <small className="dim-text">
              https://youtube.com/
              <strong>{state.youtube.slice(20) || "username"}</strong>{" "}
              <Link href="/" passHref>
                <FaRegQuestionCircle
                  className="text-base"
                  style={{ display: "inline-block" }}
                />
              </Link>
            </small> */}
          </div>
          {/* tiktok */}
          <div className="mb-7">
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/TikTok.png"
                height={20}
                width={20}
                alt="tiktok"
              />{" "}
              <h2 className="font-semibold">Tiktok</h2>
            </div>
            <Input
              type="text"
              placeholder="Username"
              value={state.tiktok}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  tiktok: e.target.value,
                }))
              }
            />
            {/* <small className="dim-text">
              https://tiktok.com/
              <strong>{state.tiktok.slice(19) || "username"}</strong>{" "}
              <Link href="/" passHref>
                <FaRegQuestionCircle
                  className="text-base"
                  style={{ display: "inline-block" }}
                />
              </Link>
            </small> */}
          </div>
          {/* external */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/external-website.png"
                height={20}
                width={20}
                alt="external"
              />{" "}
              <h2 className="font-semibold">Personal Website</h2>
            </div>
            <Input
              type="text"
              placeholder="http://"
              value={state.external}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  external: e.target.value,
                }))
              }
            />
            <small className="dim-text">
              If you have personal website, you can link it here.{" "}
              <Link href="/" passHref>
                <FaRegQuestionCircle
                  className="text-base"
                  style={{ display: "inline-block" }}
                />
              </Link>
            </small>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <Button primary outlined onClick={() => router.back()}>
          Cancel
        </Button>
        <Button loading={loading} size="large" primary onClick={onSave}>
          Save
        </Button>
      </div>
    </ParentContainer>
  );
}

type SocialLinksD = {
  facebook: string;
  instagram: string;
  youtube: string;
  twitter: string;
  tiktok: string;
  external: string;
};
