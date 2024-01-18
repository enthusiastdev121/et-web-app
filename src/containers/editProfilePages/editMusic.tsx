import {
  PrimaryBtn,
  PrimaryBtnOutline,
  PrimaryBtnSingle,
} from "@/styles/Btn.styled";
import { apiParams } from "@/utils/apiHelper";
import SimpleList from "components/profile/edit/SimpleList";
import { categories, categoriesKeys } from "@/utils/constants/profile";
import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { addMusicApi, updateProfileDetailApi } from "network/apis/ownProfile";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { HeaderContainer, Input, ParentContainer, Select } from "./styles";
import Button from "components/Button";

export default function EditMusic() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { categoryPlaceholder } = useProfileStore();
  const [state, setState] = useState({
    genre: [],
    experience: "",
    singing: {
      ability: "",
      style: [],
      range: [],
    },
    guitar: {
      ability: "",
      bassAbility: "",
    },
    drumming: {
      ability: "",
    },
    keyboard: {
      ability: "",
    },
    rapping: {
      ability: "",
    },
    composer: {
      ability: "",
    },
    dJ: {
      ability: "",
    },
    producer: {
      ability: "",
    },
    favArtist: "",
  });
  const { profile, setProfile } = useProfileStore();
  const { token } = useAuth();

  useEffect(() => {
    if (profile.categories && profile.categories[categoriesKeys.music]) {
      setState((s) => {
        return {
          ...s,
          ...profile?.categories[categoriesKeys.music],
          genre: categories[categoriesKeys.music]?.genre?.options?.map((i) => {
            return {
              id: i,
              label: i,
              value: i,
              selected:
                profile?.categories[categoriesKeys.music]?.genre?.includes(i),
            };
          }),
          singing: {
            ...s.singing,
            ...profile?.categories[categoriesKeys.music]?.singing,
            style: categories[
              categoriesKeys.music
            ]?.singingAbility?.options?.map((i) => {
              return {
                id: i,
                label: i,
                value: i,
                selected:
                  profile?.categories[
                    categoriesKeys.music
                  ]?.singing?.style?.includes(i),
              };
            }),
            range: categories[categoriesKeys.music]?.singingRange?.options?.map(
              (i) => {
                return {
                  id: i,
                  label: i,
                  value: i,
                  selected:
                    profile?.categories[
                      categoriesKeys.music
                    ]?.singing?.range?.includes(i),
                };
              }
            ),
          },
        };
      });
    }
  }, [profile]);

  const onSave = async () => {
    try {
      setLoading(true);
      const res = await addMusicApi(
        token,
        JSON.stringify(
          apiParams({
            type: "",
            raw: {
              singing_ability: state.singing.ability || "",
              guitar_ability: state.guitar.ability,
              bass_guitar_ability: state.guitar.bassAbility,
              drumming_ability: state.drumming.ability,
              keyboard_ability: state.keyboard.ability,
              rapping_ability: state.rapping.ability,
              composer_ability: state.composer.ability,
              dj_ability: state.dJ.ability,
              producer_ability: state.producer.ability,
              favorite_bands: state.favArtist,
              music_experience: state.experience,
              job_genres: state.genre
                .filter((i: any) => i.selected)
                .map((i: any) => i.label),
              job_singing_styles: state.singing.style
                .filter((i: any) => i.selected)
                .map((i: any) => i.label),
              job_singing_ranges: state.singing.range
                .filter((i: any) => i.selected)
                .map((i: any) => i.label),
            },
          })
        )
      );

      setLoading(false);
      if (res) {
        setProfile((s) => {
          return {
            ...s,
            categories: {
              ...s.categories,
              [categoriesKeys.music]: {
                ...s?.categories[categoriesKeys.music],
                ...state,
                genre: state.genre
                  .filter((i: any) => i.selected)
                  .map((i: any) => i.label),
                singing: {
                  ...s?.categories[categories.music],
                  ...state.singing,
                  style: state.singing.style
                    .filter((i: any) => i.selected)
                    .map((i: any) => i.label),
                  range: state.singing.range
                    .filter((i: any) => i.selected)
                    .map((i: any) => i.label),
                },
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
          <h1 className="text-xl lg:text-2xl font-bold">Edit Music</h1>
          <Button loading={loading} size="small" primary link onClick={onSave}>
            Save
          </Button>
        </HeaderContainer>

        <div className="mb-5">
          {/* Favorite genres */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Favorite genres</h3>
            <SimpleList
              items={state.genre}
              onChange={(id: any) =>
                setState((s: any) => ({
                  ...s,
                  genre: s.genre.map((i: any) =>
                    i.id === id ? { ...i, selected: !i.selected } : i
                  ),
                }))
              }
            />
          </div>

          {/* Singing styles */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Singing styles</h3>
            <SimpleList
              items={state.singing.style}
              onChange={(id: any) => {
                setState((s: any) => ({
                  ...s,
                  singing: {
                    ...s.singing,
                    style: s.singing?.style?.map((i: any) => {
                      return i.id === id ? { ...i, selected: !i.selected } : i;
                    }),
                  },
                }));
              }}
            />
          </div>

          {/* Singing range */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Singing range</h3>
            <SimpleList
              items={state.singing.range}
              onChange={(id: any) =>
                setState((s: any) => ({
                  ...s,
                  singing: {
                    ...s.singing,
                    range: s.singing?.range.map((i: any) =>
                      i.id === id ? { ...i, selected: !i.selected } : i
                    ),
                  },
                }))
              }
            />
          </div>

          {/* Singing ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Singing Ability</h3>
            <Select
              value={state.singing.ability}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  singing: { ...s.singing, ability: e.target.value },
                }));
              }}
            >
              <option value="">No Singing Ability</option>
              {categories.music.singingAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Guitar ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Guitar Ability</h3>
            <Select
              value={state.guitar.ability}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  guitar: { ...s.guitar, ability: e.target.value },
                }));
              }}
            >
              <option value="">No Guitar Ability</option>
              {categories.music.guitarAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Bass Guitar ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Bass Guitar Ability</h3>
            <Select
              value={state.guitar.bassAbility}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  guitar: { ...s.guitar, bassAbility: e.target.value },
                }));
              }}
            >
              <option value="">No Bass Guitar Ability</option>
              {categories.music.bassGuitarAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Drumming ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Drumming Ability</h3>
            <Select
              value={state.drumming.ability}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  drumming: { ...s.drumming, ability: e.target.value },
                }));
              }}
            >
              <option value="">No Drumming Ability</option>
              {categories.music.drummingAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Keyboard ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Keyboard Ability</h3>
            <Select
              value={state.keyboard.ability}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  keyboard: { ...s.keyboard, ability: e.target.value },
                }));
              }}
            >
              <option value="">No Keyboard Ability</option>
              {categories.music.keyboardAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Rapping ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Rapping Ability</h3>
            <Select
              value={state.rapping.ability}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  rapping: { ...s.rapping, ability: e.target.value },
                }));
              }}
            >
              <option value="">No Rapping Ability</option>
              {categories.music.rappingAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Composer ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Composer Ability</h3>
            <Select
              value={state.composer.ability}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  composer: { ...s.composer, ability: e.target.value },
                }));
              }}
            >
              <option value="">No Composer Ability</option>
              {categories.music.composerAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* D.J. ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">D.J. Ability</h3>
            <Select
              value={state.dJ.ability}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  dJ: { ...s.dJ, ability: e.target.value },
                }));
              }}
            >
              <option value="">No D.J. Ability</option>
              {categories.music.djAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* Producer ability */}
          <div className="mb-5">
            <h3 className="font-semibold mb-1">Producer Ability</h3>
            <Select
              value={state.producer.ability}
              onChange={(e) => {
                setState((s) => ({
                  ...s,
                  producer: { ...s.producer, ability: e.target.value },
                }));
              }}
            >
              <option value="">No Producer Ability</option>
              {categories.music.producerAbility.options.map(
                (item: any, index: number) => (
                  <option key={index}>{item}</option>
                )
              )}
            </Select>
          </div>

          {/* TODO: favArtist ?? */}
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
