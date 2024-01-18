import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { updateTalentInterestApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, InterestContainer, ParentContainer } from "./styles";
import { apiParams } from "@/utils/apiHelper";
import { IoChevronDown } from "react-icons/io5";
import Checkbox from "components/Checkbox";
import { interest } from "@/utils/constants/profile";
import Button from "components/Button";
import styled from "styled-components";
import { rgba } from "polished";

function ListItem({
  sub = [],
  id,
  selected = false,
  label,
  onChange,
}: {
  sub: any;
  selected: boolean;
  id: number;
  label: string;
  onChange: (d: { id: number; parentId?: number }) => any;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <Item className="flex gap-2 w-full items-center transition-all py-2 px-2 rounded-md cursor-pointer">
        <div className="flex gap-2 items-center">
          <div id="check">
            <Checkbox
              size={36}
              onChange={() => {
                onChange({ id: id });
              }}
              checked={selected}
            />
          </div>
        </div>
        <div
          className="flex justify-between flex-1"
          onClick={(e) => {
            if (sub.length > 0) {
              setShow((s) => !s);
            }
          }}
        >
          <div className="font-semibold">{label}</div>

          {sub.length > 0 && (
            <div
              className={`text-gray-400 transition-all`}
              style={{ transform: show ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <IoChevronDown size={26} />
            </div>
          )}
        </div>
      </Item>

      {show && (
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 py-3  pr-2 pl-4">
          {sub.map((i: any) => {
            return (
              <div key={i.id} className="flex items-center gap-2">
                <div>
                  <Checkbox
                    green
                    size={28}
                    onChange={() => {
                      onChange({ id: i.id, parentId: id });
                    }}
                    checked={i.selected}
                  />
                </div>
                <div className="text-sm">{i.label}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function EditInterests() {
  const router = useRouter();
  const { profile, replaceInterest } = useProfileStore();
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [changed, setChanged] = useState([]);

  useEffect(() => {
    const nn = Object.keys(interest).map((i) => {
      return {
        label: interest[i]?.label,
        id: interest[i]?.id,
        selected: profile.interest?.some((i4) => i4.id === interest[i]?.id)
          ? true
          : false,
        sub: interest[i]?.sub.map((i2: any) => {
          let sl = profile.interest
            ?.filter((i5) => i5.id === interest[i]?.id)[0]
            ?.sub.some((ii) => ii.id === i2.id);
          return {
            selected: sl || false,
            label: i2.label,
            id: i2.id,
          };
        }),
      };
    });

    setList(nn);
  }, [profile.interest]);

  useEffect(() => {
    console.log("SSS", list, profile.interest);
  }, [list]);

  const onClick = ({ parentId, id }: { parentId: number; id: number }) => {
    if (parentId) {
      setList((s) => {
        const nn = s.map((i) => {
          if (i.id === parentId) {
            return {
              ...i,
              selected: true,
              sub: i.sub.map((i2: any) => {
                if (i2.id === id) {
                  return {
                    ...i2,
                    selected: !i2.selected,
                  };
                } else {
                  return i2;
                }
              }),
            };
          } else {
            return i;
          }
        });

        return nn;
      });
    } else if (id) {
      setList((s) => {
        return s.map((i) => {
          if (i.id === id) {
            return {
              ...i,
              selected: !i.selected,
              sub: i.sub.map((i2: any) => {
                return {
                  ...i2,
                  selected: !i.selected ? true : false,
                };
              }),
            };
          } else {
            return i;
          }
        });
      });
    }
  };

  const onSave = async () => {
    try {
      setLoading(true);
      console.log("II", changed);
      const res = await updateTalentInterestApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              interests: changed.map((i) => ({
                category_id: i.id,
                subcategory_id: i.sub.map((i2) => i2.id),
              })),
            },
          })
        )
      );
      setLoading(false);
      replaceInterest(changed);
      router.back();
    } catch (err) {
      console.log("EWRR", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setChanged(
      list
        .filter((i) => i.selected)
        .map((i) => {
          return {
            ...i,
            sub: i.sub.filter((i2) => i2.selected),
          };
        })
    );
  }, [list]);

  return (
    <ParentContainer className="padding-small">
      <div
        className="padding-x"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <HeaderContainer className="flex justify-between">
          <BsArrowLeftShort
            className="text-3xl arrow"
            onClick={() => router.back()}
          />
          <h1 className="text-xl lg:text-2xl font-bold">Edit Interests</h1>
          <Button loading={loading} primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>


        <InterestContainer className="mb-10 flex items-center justify-center flex-wrap gap-5">
          <div
            style={{ maxWidth: 700, margin: "auto", width: "100%" }}
            className="flex flex-col"
          >
            {list.map((i) => {
              return <ListItem key={i.id} {...i} onChange={onClick} />;
            })}
          </div>
        </InterestContainer>
      </div>
    </ParentContainer>
  );
}


const Item = styled.div`
  &:hover {
    background-color: ${(p: any) => rgba(p.theme.pure, 0.8)};
  }
`