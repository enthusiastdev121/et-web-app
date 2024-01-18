import {
  agentType,
  categoriesKeys,
  ETHNICITY_KEY_VALUES,
} from "@/utils/constants/profile";
import { UserProfileD } from "types/profile";
import {
  AudioItemD,
  DocumentItemD,
  PhotoItemD,
  PhotoItemOwnD,
  VideoItemD,
} from "../../types/profile";

export const formatUserProfile = (res: any): UserProfileD => {
  const f1 =
    res.bam_talentci?.bam_talent_featured_images?.filter(
      (i: any) => i.type === "image1"
    )[0] || {};
  const f2 =
    res.bam_talentci?.bam_talent_featured_images?.filter(
      (i: any) => i.type === "image2"
    )[0] || {};
  const f3 =
    res.bam_talentci?.bam_talent_featured_images?.filter(
      (i: any) => i.type === "image3"
    )[0] || {};
  const f4 =
    res.bam_talentci?.bam_talent_featured_images?.filter(
      (i: any) => i.type === "image4"
    )[0] || {};

  // console.log("res.id: ", res?.id);

  return {
    id: res?.user?.id || res?.id,
    conversation_id: res.conversation_id,
    age: res?.bam_talentci?.age || "",
    pic: res?.bam_talentci?.profile_picture_path || "",
    name:
      res.bam_talentci?.lname !== null
        ? res.bam_talentci?.fname + " " + res.bam_talentci?.lname
        : res.bam_talentci?.fname,
    fname: res.bam_talentci?.fname,
    lname: res.bam_talentci?.lname,
    bio: res.bam_talentci?.des,
    email: res.email || "",
    address: res.bam_talentci?.address1,
    uid: res.bam_talentci?.firebase_uid,
    talentlogin: res.bam_talentci?.talentlogin,
    city: res.bam_talentci?.city,
    state: res.bam_talentci?.state,
    country: res.bam_talentci?.country,
    zip: res.bam_talentci?.zip,
    gender: res.bam_talentci?.bam_talentinfo1?.sex || "any",
    ageRange: res.bam_talentci?.bam_talentinfo1?.age_range,
    ageRangeText:
      res.bam_talentci?.bam_talentinfo1?.age_range == 0
        ? ""
        : res.bam_talentci?.bam_talentinfo1?.age_range_text,
    weightkilos: Number(res.bam_talentci?.bam_talentinfo1?.weightkilos || 0),
    weightpounds: Number(res.bam_talentci?.bam_talentinfo1?.weightpounds || 0),
    heightfeet: Number(res.bam_talentci?.bam_talentinfo1?.heightfeet || 0),
    heightinches: Number(res.bam_talentci?.bam_talentinfo1?.heightinches || 0),
    heightsm: Number(res.bam_talentci?.bam_talentinfo1?.heightsm || 0),
    ethnicity: res.bam_talentci?.ethnicity_field
      ? ETHNICITY_KEY_VALUES[res.bam_talentci.ethnicity_field] || ""
      : "",
    waist: Number(res.bam_talentci?.bam_talentinfo1?.waist),
    eyecolor: res.bam_talentci?.bam_talentinfo1?.eyecolor,
    haircolor: res.bam_talentci?.bam_talentinfo1?.haircolor,
    hairstyle: res.bam_talentci?.bam_talentinfo1?.hairstyle,
    dress: Number(res.bam_talentci?.bam_talentinfo1?.dress),
    shirt: Number(res.bam_talentci?.bam_talentinfo1?.shirt),
    hips: Number(res.bam_talentci?.bam_talentinfo1?.hips),
    bodyType: res.bam_talentci?.bam_talentinfo1?.body_type,
    // dob: new Date(Number(res.bam_talentci?.bam_talentinfo1?.dobyyyy), Number(res.bam_talentci?.bam_talentinfo1?.dobmm), Number(res.bam_talentci?.bam_talentinfo1?.dobdd)).toString(),
    dob: {
      year: Number(res.bam_talentci?.bam_talentinfo1?.dobyyyy || 0),
      month: Number(res.bam_talentci?.bam_talentinfo1?.dobmm || 0),
      day: Number(res.bam_talentci?.bam_talentinfo1?.dobdd || 0),
    },
    interest: res?.bam_talentci?.bam_talent_interest?.map((i: any) => {
      return {
        id: i?.categories?.id,
        label: i?.categories?.name,
        sub: i?.categories?.subcategory?.map((i2: any) => {
          const ff = JSON.parse(JSON.stringify(i2));
          return {
            label: ff?.subcategories?.name,
            id: ff?.subcategories?.id,
          };
        }),
      };
    }),
    creditExperience:
      res.bam_talentci?.bam_talent_credit_experiences?.map((i: any) => {
        return {
          id: i.id,
          role: i.role,
          production: i.production,
          year: i.year,
          end: i.end,
          start: i.start,
        };
      }) || [],

    categories: {
      [categoriesKeys.acting]: {
        experience:
          res?.bam_talentci?.bam_job_experience_actors?.acting_experience || "",
        agentType:
          typeof res?.bam_talentci?.bam_job_experience_actors?.acting_agent !==
          "undefined"
            ? agentType.filter(
                (i3) =>
                  Number(i3.id) ===
                  Number(
                    res?.bam_talentci?.bam_job_experience_actors?.acting_agent
                  )
              )[0]?.label
            : "",
        agentName:
          res?.bam_talentci?.bam_job_experience_actors?.agency_name || "",
        agentWebsite:
          res?.bam_talentci?.bam_job_experience_actors?.agency_website || "",
        language:
          res?.bam_talentci?.bam_job_experience_actors?.job_languages?.map(
            (i: any) => i?.language
          ) || [],
        accent:
          res?.bam_talentci?.bam_job_experience_actors?.job_accents?.map(
            (i: any) => i?.accent
          ) || [],
      },
      [categoriesKeys.extras]: {
        experience:
          res.bam_talentci?.bam_job_experience_extras?.extras_experience || "",
        agentName:
          res.bam_talentci?.bam_job_experience_extras?.agency_name || "",
        agentWebsite:
          res.bam_talentci?.bam_job_experience_extras?.agency_website || "",
        agentType:
          typeof res?.bam_talentci?.bam_job_experience_extras?.extras_agent !==
          "undefined"
            ? agentType.filter(
                (i3) =>
                  Number(i3.id) ===
                  Number(
                    res?.bam_talentci?.bam_job_experience_extras?.extras_agent
                  )
              )[0]?.label
            : "",
      },
      [categoriesKeys.modeling]: {
        experience:
          res?.bam_talentci?.bam_job_experience_models?.modeling_experience ||
          "",
        website:
          res?.bam_talentci?.bam_job_experience_models?.modeling_website || "",
        agentName:
          res?.bam_talentci?.bam_job_experience_models?.agency_name || "",
        agentWebsite:
          res?.bam_talentci?.bam_job_experience_models?.agency_website || "",
        agentType:
          typeof res?.bam_talentci?.bam_job_experience_models
            ?.modeling_agent !== "undefined"
            ? agentType.filter(
                (i3) =>
                  Number(i3.id) ===
                  Number(
                    res?.bam_talentci?.bam_job_experience_models?.modeling_agent
                  )
              )[0]?.label
            : "",
      },
      [categoriesKeys.influencer]: {
        txt:
          res.bam_talentci?.bam_job_experience_influencer
            ?.influencer_experience_text || "",
      },
      [categoriesKeys.presenter]: {
        tvExperience:
          res.bam_talentci?.bam_job_experience_presenters?.tv_presenter || "",
        radioExperience:
          res.bam_talentci?.bam_job_experience_presenters?.radio_presenter ||
          "",
        agentName:
          res.bam_talentci?.bam_job_experience_presenters?.agency_name || "",
        agentWebsite:
          res.bam_talentci?.bam_job_experience_presenters?.agency_website || "",
        agentType:
          typeof res?.bam_talentci?.bam_job_experience_presenters?.agent !==
          "undefined"
            ? agentType.filter(
                (i3) =>
                  Number(i3.id) ===
                  Number(
                    res?.bam_talentci?.bam_job_experience_presenters?.agent
                  )
              )[0]?.label
            : "",
        language:
          res?.bam_talentci?.bam_job_experience_presenters?.job_languages?.map(
            (i: any) => i?.language
          ) || [],
        accent:
          res?.bam_talentci?.bam_job_experience_presenters?.job_accents?.map(
            (i: any) => i?.accent
          ) || [],
      },
      [categoriesKeys.music]: {
        genre:
          res.bam_talentci?.bam_job_experience_musicians?.job_genres?.map(
            (i: any) => i.genre
          ) || [],
        singing: {
          style:
            res.bam_talentci?.bam_job_experience_musicians?.job_singing_styles?.map(
              (i: any) => i.style
            ) || [],
          range:
            res.bam_talentci?.bam_job_experience_musicians?.job_singing_ranges?.map(
              (i: any) => i.range
            ) || [],
          ability:
            res.bam_talentci?.bam_job_experience_musicians?.singing_ability ||
            "",
        },
        guitar: {
          ability:
            res.bam_talentci?.bam_job_experience_musicians?.guitar_ability ||
            "",
          bassAbility:
            res.bam_talentci?.bam_job_experience_musicians
              ?.bass_guitar_ability || "",
        },
        drumming: {
          ability:
            res.bam_talentci?.bam_job_experience_musicians?.drumming_ability ||
            "",
        },
        keyboard: {
          ability:
            res.bam_talentci?.bam_job_experience_musicians?.keyboard_ability ||
            "",
        },
        rapping: {
          ability:
            res.bam_talentci?.bam_job_experience_musicians?.rapping_ability ||
            "",
        },
        composer: {
          ability:
            res.bam_talentci?.bam_job_experience_musicians?.composer_ability ||
            "",
        },
        dJ: {
          ability:
            res.bam_talentci?.bam_job_experience_musicians?.dj_ability || "",
        },
        producer: {
          ability:
            res.bam_talentci?.bam_job_experience_musicians?.producer_ability ||
            "",
        },
        favArtist:
          res.bam_talentci?.bam_job_experience_musicians?.favorite_bands || "",
      },
      [categoriesKeys.dance]: {
        style:
          res.bam_talentci?.bam_job_experience_dancer_teachers?.job_dancing_styles?.map(
            (i: any) => i.style
          ) || [],
        teachingAbility:
          res.bam_talentci?.bam_job_experience_dancer_teachers
            ?.teaching_ability || "",
        danceAbility:
          res.bam_talentci?.bam_job_experience_dancer_teachers?.dance_ability ||
          "",
        schoolName:
          res.bam_talentci?.bam_job_experience_dancer_teachers?.school_name ||
          "",
        courseName:
          res.bam_talentci?.bam_job_experience_dancer_teachers?.course_name ||
          "",
        schoolYear:
          res.bam_talentci?.bam_job_experience_dancer_teachers?.course_year ||
          "",
        agentName:
          res.bam_talentci?.bam_job_experience_dancer_teachers?.agency_name ||
          "",
        agentWebsite:
          res.bam_talentci?.bam_job_experience_dancer_teachers
            ?.agency_website || "",
        agentType:
          typeof res?.bam_talentci?.bam_job_experience_dancer_teachers
            ?.agent !== "undefined"
            ? agentType.filter(
                (i3) =>
                  Number(i3.id) ===
                  Number(
                    res?.bam_talentci?.bam_job_experience_dancer_teachers
                      ?.dancing_agent
                  )
              )[0]?.label
            : "",
      },
      [categoriesKeys.hairMakeup]: {
        fashionAbility:
          res.bam_talentci?.bam_job_experience_makeup_hair?.fashion_styling ||
          "",
        hairAbility:
          res.bam_talentci?.bam_job_experience_makeup_hair?.hair_styling || "",
        makeupAbility:
          res.bam_talentci?.bam_job_experience_makeup_hair?.makeup_artist || "",
      },
      [categoriesKeys.photography]: {
        experience:
          res.bam_talentci?.bam_job_experience_photographers?.experience || "",
        website:
          res.bam_talentci?.bam_job_experience_photographers?.website || "",
      },
      [categoriesKeys.filmStage]: {
        artCostumeDesign:
          res.bam_talentci?.bam_job_experience_film_stages
            ?.art_costume_design || "",
        cameraCrew:
          res.bam_talentci?.bam_job_experience_film_stages?.camera_crew || "",
        directingWriting:
          res.bam_talentci?.bam_job_experience_film_stages?.directing_writing ||
          "",
        lighting:
          res.bam_talentci?.bam_job_experience_film_stages?.lighting || "",
        postProductionEditing:
          res.bam_talentci?.bam_job_experience_film_stages?.post_prod_editing ||
          "",
        productionManagement:
          res.bam_talentci?.bam_job_experience_film_stages?.prod_mgmt || "",
        runnerAssistant:
          res.bam_talentci?.bam_job_experience_film_stages?.runner_assistant ||
          "",
        soundCrew:
          res.bam_talentci?.bam_job_experience_film_stages?.sound_crew || "",
      },
      [categoriesKeys.tvReality]: {
        audience:
          res?.bam_talentci?.bam_job_experience_tv_show?.talent_interests[0]
            ?.categories?.subcategory[0]?.subcategories?.name || "",
        documentaries:
          res.bam_talentci?.bam_job_experience_tv_show?.talent_interests[0]
            ?.categories?.subcategory[1]?.subcategories?.name || "",
        gameShow:
          res.bam_talentci?.bam_job_experience_tv_show?.talent_interests[0]
            ?.categories?.subcategory[2]?.subcategories?.name || "",
        realityTv:
          res.bam_talentci?.bam_job_experience_tv_show?.talent_interests[0]
            ?.categories?.subcategory[3]?.subcategories?.name || "",
      },
    },
    pro: res.bam_talentci?.is_pro,
    // pro: false,
    featured: res.bam_talentci?.is_featured,
    vip: res.bam_talentci?.is_vip,
    // joinStatus: 1,
    joinStatus: Number(res.bam_talentci?.join_status),
    aboutMe: res.bam_talentci?.bam_talentinfo2?.special_skills,
    shortResume: res.bam_talentci?.bam_talentinfo2?.experience,
    introVideo: {
      id: res?.bam_talentci?.bam_talent_intro_video?.video_id || 0,
      uri: res?.bam_talentci?.bam_talent_intro_video?.path_video || "",
      duration:
        Number(res?.bam_talentci?.bam_talent_intro_video?.duration || 0) || 0,
      size:
        Number(res?.bam_talentci?.bam_talent_intro_video?.file_size || 0) || 0,
      thumb: res?.bam_talentci?.bam_talent_intro_video?.path_image || "",
    },
    featuredImages: {
      image1: {
        id: f1?.featured_image_id || 0,
        uri: f1?.bam_media_path_full || "",
        type: f1?.type || "",
        key: f1?.type || "",
      },
      image2: {
        id: f2?.featured_image_id || 0,
        uri: f2?.bam_media_path_full || "",
        type: f2?.type || "",
        key: f2?.type || "",
      },
      image3: {
        id: f3?.featured_image_id || 0,
        uri: f3?.bam_media_path_full || "",
        type: f3?.type || "",
        key: f3?.type || "",
      },
      image4: {
        id: f4?.featured_image_id || 0,
        uri: f4?.bam_media_path_full || "",
        type: f4?.type || "",
        key: f4?.type || "",
      },
    },
    socialLinks: {
      facebook: res.bam_talentci?.social_media_link?.facebook || "",
      external: res.bam_talentci?.social_media_link?.external || "",
      imdb: res.bam_talentci?.social_media_link?.imdb || "",
      instagram: res.bam_talentci?.social_media_link?.instagram || "",
      tiktok: res.bam_talentci?.social_media_link?.tiktok || "",
      twitter: res.bam_talentci?.social_media_link?.twitter || "",
      youtube: res.bam_talentci?.social_media_link?.youtube || "",
    },
    phone: res.bam_talentci?.cell || "",
    phone2: res.bam_talentci?.ephone || "",
    phone3: res.bam_talentci?.dphone || "",
    companyName: res.bam_talentci?.company_name || "",
    displayName: res.bam_talentci?.display_name || "",
    connects: res.bam_talentci?.connects_count || 0,
    followers: res.bam_talentci?.followers_count || 0,
    following: res.bam_talentci?.following_count || 0,
    friendStatus: res.bam_talentci?.friend_status || null,
    isFollower: res.bam_talentci?.is_follower,
    isFollowing: res.bam_talentci?.is_following,
    talentnum: Number(res.bam_talentci?.talentnum),
    documentCount: res.bam_talentci?.document_count || 0,
    photoCount: res.bam_talentci?.photo_count || 0,
    videoCount: res.bam_talentci?.video_count || 0,
    songCount: res.bam_talentci?.song_count || 0,
    market1: res.bam_talentci?.bam_talentinfo2?.market1?.market,
    market1p: res.bam_talentci?.bam_talentinfo2?.market1p,
    market2: res.bam_talentci?.bam_talentinfo2?.market2?.market,
    market2p: res.bam_talentci?.bam_talentinfo2?.market2p,
    market3: res.bam_talentci?.bam_talentinfo2?.market3?.market,
    market3p: res.bam_talentci?.bam_talentinfo2?.market3p,
    claim: res.bam_talentci?.has_bam_cd_claim_sale === 1,
    createdAt: res.created_at,
    start_date_ts: res?.bam_talentci?.bam_talentrecurring?.start_date_ts,
    bam_talentrecurring: res?.bam_talentci?.bam_talentrecurring,
  };
};

export const formatAudioNodeOwn = (n: any): AudioItemD => {
  return {
    id: n?.song_id,
    desc: n?.des,
    title: n?.title,
    uri: n?.path_audio,
    duration: Number(n?.duration || 0),
    createdAt: n?.date_created,
    hidden: n.hide === 1,
    primary: false,
  };
};

export const formatPhotoNodeOwn = (i: any): PhotoItemOwnD => {
  return {
    id: i.id,
    hidden: i.hide === 1,
    name: i.media_path,
    primary: false,
    uri: i.bam_media_path_full,
    size: 0,
    createdAt: i.date_created,
    caption: i.caption || "",
  };
};

export const formatVideoNodeOwn = (i: any): VideoItemD => {
  const vi = i.path_video?.split(".");

  vi.pop();

  return {
    id: i.video_id,
    hidden: i.hide === 1,
    title: i.title,
    desc: i.des,
    primary: false,
    uri: i.path_video,
    thumb: i.path_image,
    duration: Number(i.duration || 0),
    createdAt: i.date_created,
  };
};

export const formatDocumentNodeOwn = (i: any): DocumentItemD => {
  return {
    id: i.document_id,
    hidden: i.hide === 1,
    name: i.title,
    primary: false,
    uri: i.bam_media_path_full,
    createdAt: i.date_created || 0,
    size: i.file_size || 0,
  };
};
