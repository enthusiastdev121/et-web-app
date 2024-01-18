import TranslatedText from "components/TranslatedText";
import { useProfileStore } from "context/ProfileStore";
import Link from "next/link";
import { HiPencil } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { UserProfileD } from "types/profile";
import { AppearanceContainer } from "./styles";

export default function Appearance(props: Props) {
  const { profile } = useProfileStore();
  const { own, edit, other, otherProfile } = props;
  const box_shadow = edit ? "edit-profile-shadow" : "profile-shadow";

  const formatHeight = (num: number) => {
    const height = num?.toString().split(".");
    const output = `${height[0]}'${parseInt(height[1]?.slice(0, 1)) + 1}''`;
    // const output = `${height[0]}'${(parseInt(height[1]))}''`;
    return output;
  };

  return (
    <div id="target14">
      <AppearanceContainer
        className={`py-10 px-5 md:px-10 ${box_shadow}`}
        id="appearance"
      >
        <div className="flex items-center justify-between mb-5 lg:mb-10">
          <h2 className="edit-profile-heading">
            <IoPersonOutline className="text-3xl" /><TranslatedText> Appearance</TranslatedText>
          </h2>
          {edit && (
            <Link href="/profile/edit/appearance">
              <a className="edit-btn-2">
                <HiPencil style={{ display: "inline" }} /><TranslatedText> Edit</TranslatedText>
              </a>
            </Link>
          )}
        </div>

        <div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 ">
            {/* GENDER */}
            {other
              ? otherProfile?.gender !== null && (
                <li className="font-semibold">
                  <div><TranslatedText>Gender</TranslatedText></div>
                  <div className="blue">{otherProfile?.gender}</div>
                </li>
              )
              :
              profile?.sex !== null && profile?.sex !== undefined ? (
                <li className="font-semibold">
                  <div><TranslatedText>Gender</TranslatedText></div>
                  <div className="blue">{profile?.sex}</div>
                </li>
              )
                :
                profile?.gender !== null && (
                  <li className="font-semibold">
                    <div><TranslatedText>Gender</TranslatedText></div>
                    <div className="blue">{profile?.gender}</div>
                  </li>
                )
            }
            {/* AGE */}
            {other
              ? otherProfile?.age !== null &&
              otherProfile?.age?.toString() !== "" && (
                <li className="font-semibold">
                  <div><TranslatedText>Age</TranslatedText></div>
                  <div className="blue">{otherProfile?.age} yrs old</div>
                </li>
              )
              : profile?.age !== null && profile?.age !== "" &&
              otherProfile?.age?.toString() !== "" && (
                <li className="font-semibold">
                  <div><TranslatedText>Age</TranslatedText></div>
                  <div className="blue">{profile?.age} yrs old</div>
                </li>
              )}

            {/* EYECOLOR */}
            {other
              ? otherProfile?.eyecolor && (
                <li className="font-semibold">
                  <div><TranslatedText>Eye Color</TranslatedText></div>
                  <div className="blue">{otherProfile?.eyecolor}</div>
                </li>
              )
              : profile?.eyecolor && (
                <li className="font-semibold">
                  <div><TranslatedText>Eye Color</TranslatedText></div>
                  <div className="blue">{profile?.eyecolor}</div>
                </li>
              )}

            {/* HEIGHT */}
            {/* {other
              ? otherProfile?.heightinches !== 0 && (
                <li className="font-semibold">
                  <div>Height</div>
                  <div className="blue">
                    {formatHeight(otherProfile?.heightinches * 0.0833333)} feet /{" "}
                    {(otherProfile?.heightinches * 2.54).toString().slice(0, 3)}
                    cm
                  </div>
                </li>
              )
              : profile?.heightinches !== 0 && (
                <li className="font-semibold">
                  <div>Height</div>
                  <div className="blue">
                    {formatHeight(profile?.heightinches * 0.0833333)} feet /{" "}
                    {(profile?.heightinches * 2.54).toString().slice(0, 3)}cm
                  </div>
                </li>
              )} */}

            {other
              ? otherProfile?.heightinches !== 0 && (
                <li className="font-semibold">
                  <div><TranslatedText>Height</TranslatedText></div>
                  <div className="blue">
                    {Math.trunc(otherProfile?.heightinches * 0.0833333)}{(otherProfile?.heightinches - (Math.trunc(otherProfile?.heightinches * 0.0833333) * 12)) > 0 ? "'" + (otherProfile?.heightinches - (Math.trunc(otherProfile?.heightinches * 0.0833333) * 12)) + "''" : " feet"} /{" "}
                    {Math.ceil(otherProfile?.heightinches * 2.54)} cm
                  </div>
                </li>
              )
              : profile?.heightinches !== 0 && (
                <li className="font-semibold">
                  <div><TranslatedText>Height</TranslatedText></div>
                  <div className="blue">
                    {Math.trunc(profile?.heightinches * 0.0833333)}{(profile?.heightinches - (Math.trunc(profile?.heightinches * 0.0833333) * 12)) > 0 ? "'" + (profile?.heightinches - (Math.trunc(profile?.heightinches * 0.0833333) * 12)) + "''" : " feet"} /{" "}
                    {Math.ceil(profile?.heightinches * 2.54)} cm
                  </div>
                </li>
              )}

            {/* {other
              ? otherProfile?.heightfeet !== 0 && (
                <li className="font-semibold">
                  <div>Height</div>
                  <div className="blue">
                    {otherProfile?.heightfeet} feet /{" "}
                    {(otherProfile?.heightfeet * 30.48).toString().slice(0, 3)}
                    cm
                  </div>
                </li>
              )
              : profile?.heightfeet !== 0 && (
                <li className="font-semibold">
                  <div>Height</div>
                  <div className="blue">
                    {profile?.heightfeet} feet /{" "}
                    {(profile?.heightfeet * 30.48).toString().slice(0, 3)} cm
                  </div>
                </li>
              )} */}

            {/* WEIGHT */}
            {other
              ? (
                otherProfile?.weightkilos !== null ||
                otherProfile?.weightpounds !== null) &&
              (otherProfile?.weightkilos !== 0 ||
                otherProfile?.weightpounds !== 0) && (
                <li className="font-semibold">
                  <div><TranslatedText>Weight</TranslatedText></div>
                  <div className="blue">
                    {
                      otherProfile?.weightpounds > 0 ? (
                        <>
                          {otherProfile?.weightpounds} lbs
                        </>
                      ) : otherProfile?.weightkilos > 0 ? (
                        <>
                          {otherProfile?.weightkilos} kg
                        </>
                      ) : ""
                    }
                  </div>
                </li>


              )
              : (profile?.weightkilos !== null ||
                profile?.weightpounds !== null) &&
              (profile?.weightkilos !== 0 || profile?.weightpounds !== 0) && (
                <li className="font-semibold">
                  <div><TranslatedText>Weight</TranslatedText></div>
                  <div className="blue">
                    {profile?.weightkilos} kg / {(profile?.weightkilos * 2.205).toString().slice(0, 3)} lbs
                  </div>
                </li>
              )}

            {/* <li className="font-semibold">
            <div>Chest</div>
            <div className="blue">91 cm / 36 in</div>
          </li> */}

            {/* WAIST */}
            {other
              ? otherProfile?.waist !== null &&
              !isNaN(profile?.waist) &&
              otherProfile?.waist !== 0 && (
                <li className="font-semibold">
                  <div><TranslatedText>Waist</TranslatedText></div>
                  <div className="blue">{otherProfile?.waist}</div>
                </li>
              )
              : profile?.waist !== null &&
              profile?.waist !== 0 &&
              !isNaN(profile?.waist) && (
                <li className="font-semibold">
                  <div><TranslatedText>Waist</TranslatedText></div>
                  <div className="blue">{profile?.waist}</div>
                </li>
              )}

            {/* HIPS */}
            {other
              ? otherProfile?.hips !== null &&
              otherProfile?.hips !== 0 && (
                <li className="font-semibold">
                  <div><TranslatedText>Hips</TranslatedText></div>
                  <div className="blue">{otherProfile?.hips}</div>
                </li>
              )
              : profile?.hips !== null &&
              profile?.hips !== 0 && !isNaN(profile?.hips) && (
                <li className="font-semibold">
                  <div><TranslatedText>Hips</TranslatedText></div>
                  <div className="blue">{profile?.hips}</div>
                </li>
              )}

            {/* SHIRT */}
            {other
              ? otherProfile?.shirt !== null &&
              otherProfile?.shirt !== 0 && !isNaN(profile?.shirt) && (
                <li className="font-semibold">
                  <div><TranslatedText>Shirt</TranslatedText></div>
                  <div className="blue">{otherProfile?.shirt}</div>
                </li>
              )
              : profile?.shirt !== null &&
              profile?.shirt !== 0 && !isNaN(profile?.shirt) && (
                <li className="font-semibold">
                  <div><TranslatedText>Shirt</TranslatedText></div>
                  <div className="blue">{profile?.shirt}</div>
                </li>
              )}

            {/* BODY TYPE */}
            {/* {other
              ? otherProfile?.bodyType && (
                <li className="font-semibold">
                  <div>Body type</div>
                  <div className="blue">{otherProfile?.bodyType}</div>
                </li>
              )
              : profile?.bodyType && (
                <li className="font-semibold">
                  <div>Body type</div>
                  <div className="blue">{profile?.bodyType}</div>
                </li>
              )} */}

            {/* HAIR STYLE */}
            {other
              ? otherProfile?.hairstyle && (
                <li className="font-semibold">
                  <div><TranslatedText>Hair style</TranslatedText></div>
                  <div className="blue">{otherProfile?.hairstyle}</div>
                </li>
              )
              : profile?.hairstyle && (
                <li className="font-semibold">
                  <div><TranslatedText>Hair style</TranslatedText></div>
                  <div className="blue">{profile?.hairstyle}</div>
                </li>
              )}

            {/* HAIR COLOR */}
            {other
              ? otherProfile?.haircolor !== null && (
                <li className="font-semibold">
                  <div><TranslatedText>Hair color</TranslatedText></div>
                  <div className="blue">{otherProfile?.haircolor}</div>
                </li>
              )
              : profile?.haircolor !== null && (
                <li className="font-semibold">
                  <div><TranslatedText>Hair color</TranslatedText></div>
                  <div className="blue">{profile?.haircolor}</div>
                </li>
              )}

            {/* ETHNICITY */}
            {other
              ? otherProfile?.ethnicity !== "" && (
                <li className="font-semibold">
                  <div><TranslatedText>Ethnicity</TranslatedText></div>
                  <div className="blue">{otherProfile?.ethnicity}</div>
                </li>
              )
              : profile?.ethnicity !== "" && (
                <li className="font-semibold">
                  <div><TranslatedText>Ethnicity</TranslatedText></div>
                  <div className="blue">{profile?.ethnicity}</div>
                </li>
              )}

            {/* BODY TYPE */}
            {other
              ? otherProfile?.bodyType !== null && profile?.bodyType !== undefined && (
                <li className="font-semibold">
                  <div><TranslatedText>Body Type</TranslatedText></div>
                  <div className="blue">{otherProfile?.bodyType}</div>
                </li>
              )
              : profile?.bodyType !== null && profile?.bodyType !== undefined && (
                <li className="font-semibold">
                  <div><TranslatedText>Body Type</TranslatedText></div>
                  <div className="blue">{profile?.bodyType}</div>
                </li>
              )}

            {/* <li className="font-semibold">
            <div>Chest</div>
            <div className="blue">91 cm / 36 in</div>
          </li> */}
          </ul>
        </div>
      </AppearanceContainer>
    </div>
  );
}

type Props = {
  own: boolean;
  edit?: boolean;
  other?: boolean;
  otherProfile?: UserProfileD;
};
