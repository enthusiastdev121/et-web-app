import SimpleList from "components/profile/edit/SimpleList";
import { useProfileStore } from "context/ProfileStore";
import { useEffect, useState } from "react";

export default function InterestSubCatModal({ sub }: any) {
  const [state, setState] = useState({
    style: [],
  });
  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    setState((s) => {
      return {
        ...s,
        style: sub?.map((i: any, ind: number) => {
          return {
            label: i.label,
            id: i.id,
            selected: profile?.interest[ind].sub.includes(i),
          };
        }),
      };
    });
  }, [profile, sub]);

  console.log("the state is : ", state);
  console.log("sub is : ", sub);

  return (
    <div>
      {/* <SimpleList
        items={state.style}
        onChange={(id: any) => {
          setState((s: any) => {
            return {
              ...s,
              style: s.style.map((i: any) =>
                i.id === id ? { ...i, selected: !i.selected } : i
              ),
            };
          });
        }}
      /> */}
    </div>
  );
}
