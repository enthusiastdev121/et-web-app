import { useProfileStore } from "context/ProfileStore";
import Link from "next/link";
import { HiOutlineBriefcase, HiPencil } from "react-icons/hi";
import { CreditsSkel } from "./Skel";
import { CreditContainer } from "./styles";
import { useRouter } from "next/router";
import { useState } from "react";
import DeleteCreditExperienceModal from "components/profile/modals/DeleteCreditExperienceModal";
import {
  deleteCreditApi,
  updateCreditExperienceApi,
} from "network/apis/ownProfile";
import { useAuth } from "context/AuthContext";
import { UserProfileD } from "types/profile";
import { formatDate } from "@/utils/helper";
import { format } from "date-fns";
import TranslatedText from "components/TranslatedText";

export default function Credits(props: Props) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState({ id: "" });
  const router = useRouter();
  const { own, edit, other, otherProfile } = props;
  const { profile, setProfile } = useProfileStore();
  const { token } = useAuth();
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";

  const items = other
    ? otherProfile?.creditExperience || []
    : profile?.creditExperience || [];

  const obj1 = items?.reduce(function (r: any, a: any) {
    r[a.year] = r[a.year] || [];
    r[a.year].push(a);
    return r;
  }, Object.create(null));

  const arr = Object.keys(obj1)
    .map((i) => ({ year: i, id: i, items: obj1[i] }))
    .sort((a, b) => Number(b.year) - Number(a.year));

  let empty = items?.length === 0;

  const [deleting, setDeleting] = useState(false);

  const deteleExp = async (id: number) => {
    if (!id) {
      return;
    }

    setProfile((s) => ({
      ...s,
      creditExperience: s.creditExperience?.filter((i) => i.id !== id),
    }));
    try {
      await deleteCreditApi(token, id);
    } catch (err) {
      console.log("Err", err);
    }
  };

  return (
    <CreditContainer
      className={`py-10 px-5 md:px-10 ${box_shadow}`}
      id="credits"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="edit-profile-heading">
          <HiOutlineBriefcase className="text-3xl lg:text-4xl" /> <TranslatedText>Credits &
            Experience</TranslatedText>
        </h2>

        {edit && (
          <Link href="/profile/edit/creditExperience" passHref>
            <button className="edit-btn-2 flex items-center gap-1">
              <span className="text-xl font-semibold">+</span> <TranslatedText>Add</TranslatedText>
            </button>
          </Link>
        )}
      </div>


      <ul>
        {!empty ? (

          arr.map((item1: any) => (
            <li key={item1?.id} className="mb-10">
              <h3 className="text-2xl">{item1?.year}</h3>

              <ul className="inner-list">
                {item1.items.map((item2: any, index: number) => (
                  <li key={index}>
                    <div className="flex items-center gap-3">
                      <div className="font-semibold">{item2?.production}</div>
                      {edit && (
                        <div>
                          <span
                            className="txt-link cursor-pointer"
                            onClick={() => {
                              router.push(
                                {
                                  pathname: "/profile/edit/creditExperience",
                                  query: {
                                    id: item2.id,
                                    production: item2.production,
                                    role: item2.role,
                                    year: item2.year,
                                    start: item2.startMonth,
                                    startYear: item2.startYear,
                                    end: item2.endMonth,
                                    endYear: item2.endYear,
                                  },
                                },
                                "/profile/edit/creditExperience"
                              );
                            }}
                          >
                            Edit
                          </span>{" "}
                          <span className="txt-disabled mx-1">/</span>
                          <span
                            className="txt-danger cursor-pointer"
                            onClick={() => {
                              setDeleteOpen(true);
                              setDeleteItem(item2);
                              console.log("item2: ", item2)
                            }}
                          >
                            <TranslatedText>Delete</TranslatedText>
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex gap-2">
                        <div className="flex gap-1">

                          {/* {console.log("item2: ", item2)} */}

                          {/* <div>{item2?.start !== null && format(new Date(item2?.start), "MMM yyyy")}</div> */}
                          <div>{item2?.start}</div>
                        </div><span>to</span>
                        <div className="flex gap-1">
                          {/* <div>{item2?.start !== null && format(new Date(item2?.end), "MMM yyyy")}</div> */}
                          <div>{item2?.end}</div>
                        </div>
                      </div>
                      <div>{item2?.production_company}</div>
                      <div>{item2?.production_type}</div>
                      <div className="flex gap-3">
                        <div>{item2?.location}</div>
                        <div>{item2?.director}</div>
                      </div>


                      <div>{item2?.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <CreditsSkel />
        )}
      </ul>
      {edit && (
        <DeleteCreditExperienceModal
          open={deleteOpen}
          onClose={() => setDeleteOpen(false)}
          {...{ id: deleteItem.id, item: deleteItem }}
          onDelete={(id: number) => {
            deteleExp(id);
            setDeleteOpen(false);
          }}
        />
      )}
    </CreditContainer>
  );
}

type Props = {
  own: boolean;
  edit?: boolean;
  other?: boolean;
  otherProfile?: UserProfileD;
};
