import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import SimpleList from "components/profile/edit/SimpleList";
import { categoriesKeys, interest } from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import {
  addTvRealityApi,
  updateProfileDetailApi,
} from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer } from "./styles";
import Button from "components/Button";

export default function EditTvReality() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [subs, setSubs] = useState([]);
  const [state, setState] = useState({});
  const { profile, setProfile } = useProfileStore();
  const { token } = useAuth();

  useEffect(() => {
    let has: any = [];
    if (profile.interest) {
      if (profile.interest?.length > 0) {
        has = profile.interest?.filter(
          (i) => i.id === interest[categoriesKeys.tvReality]?.id
        );
        if (has.length > 0) {
          has = has[0]?.sub?.map((i: any) => i.label);
        }
      }
      setSubs([
        ...interest[categoriesKeys.tvReality]?.sub.map((i) => {
          return {
            ...i,
            selected: has?.includes(i.label) ? true : false,
          };
        }),
      ]);
    }
  }, [profile]);

  const onSave = async () => {
    try {
      setLoading(true);
      const res = await addTvRealityApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              experience_text: "",
              talent_interests: [
                {
                  category_id: interest[categoriesKeys.tvReality].id,
                  subcategory_id: subs
                    .filter((i: any) => i.selected)
                    .map((i: any) => i.id),
                },
              ],
            },
          })
        )
      );
      setLoading(false);
      if (res) {
        setProfile((s) => {
          return {
            ...s,
            interest: s.interest.map((i) => {
              if (i.id === interest[categoriesKeys.tvReality]?.id) {
                return {
                  ...i,

                  sub: subs
                    .filter((i: any) => i.selected)
                    .map((i3: any) => ({
                      label: i3.label,
                      categoryId: i3.categoryId,
                      id: i3.id,
                    })),
                };
              } else {
                return i;
              }
            }),
          };
        });
      }
      if (res) {
        setProfile((s) => {
          return {
            ...s,
            categories: {
              ...s.categories,
              [categoriesKeys.tvReality]: {
                ...s.categories[categoriesKeys.tvReality],
                ...state,
              },
            },
          };
        });

        router.back();
      }
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
        <HeaderContainer className="flex justify-between ">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Edit Tv & Reality</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          <div className="mb-5">
            <h3 className="font-semibold mb-1">
              Auditions & Jobs I&apos;m interested in *
            </h3>
            <SimpleList
              items={subs}
              onChange={(id: any) => {
                setSubs((s: any) =>
                  s.map((i: any) =>
                    i.id === id ? { ...i, selected: !i.selected } : i
                  )
                );
              }}
            />
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
      </div>
    </ParentContainer>
  );
}
