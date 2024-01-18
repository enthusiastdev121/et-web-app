import { categoriesKeys, interest } from "@/utils/constants/profile";
import AddExperience from "components/profile/edit/AddExperience";
import ActingExperience from "components/profile/experience/Acting";
import DancingExperience from "components/profile/experience/Dancing";
import ExtrasExperience from "components/profile/experience/Extras";
import FilmStageExperience from "components/profile/experience/FilmStage";
import HairMakeupExperience from "components/profile/experience/HairMakeup";
import InfluencerExperience from "components/profile/experience/Influencer";
import ModelingExperience from "components/profile/experience/Modeling";
import MusicExperience from "components/profile/experience/Music";
import PhotographyExperience from "components/profile/experience/Photography";
import PresenterExperience from "components/profile/experience/Presenter";
import TvRealityExperience from "components/profile/experience/TvReality";
import { UserProfileD } from "types/profile";

export default function DynamicSection({ profile, own, edit }: { profile: UserProfileD, own: boolean, edit: boolean }) {

    const acting = {
        experience: profile?.categories?.acting?.experience || '',
        agentName: profile?.categories?.acting?.agentName || '',
        agentWebsite: profile?.categories?.acting?.agentWebsite || '',
        language: profile?.categories?.acting?.language || [],
        accent: profile?.categories?.acting?.accent || []
    }

    const modeling = {
        experience: profile.categories?.modeling?.experience,
        agentName: profile.categories?.modeling?.agentName,
        agentWebsite: profile.categories?.modeling?.agentWebsite,
    }

    const filmStage = {
        artCostumeDesign: profile.categories?.filmStage?.art_costume_design?.label || '',
        cameraCrew: profile.categories?.filmStage?.camera_crew?.label || '',
        directingWriting: profile.categories?.filmStage?.directing_writing?.label || '',
        lighting: profile.categories?.filmStage?.lighting?.label || '',
        postProdEditing: profile.categories?.filmStage?.post_prod_editing?.label || '',
        productionManagement: profile.categories?.filmStage?.prod_mgmt?.label || '',
        soundCrew: profile.categories?.filmStage?.sound_crew?.label || '',
        runnerAssistant: profile.categories?.filmStage?.runner_assistant?.label || '',
    }

    const photography = {
        experience: profile?.categories?.photography?.experience || ''
    }

    const presenting = {
        tvExperience: profile?.categories?.presenter?.tvExperience || '',
        radioExperience: profile?.categories?.presenter?.radioExperience || '',
        language: profile?.categories?.presenter?.language || [],
        accent: profile?.categories?.presenter?.accent || [],
    }

    const music = {
        genre: profile?.categories?.music?.genre || [],
        singingAbility:
            profile?.categories?.music?.singing?.ability ||
            ''
        ,
        singingStyle:
            profile?.categories?.music?.singing?.style ||
            []
        ,
        singingRange:
            profile?.categories?.music?.singing?.range ||
            []
        ,
        guitarAbility:
            profile?.categories?.music?.guitar?.ability ||
            ''
        ,
        bassGuitarAbility:
            profile?.categories?.music?.guitar
                ?.bassAbility || ''
        ,
        drummingAbility:
            profile?.categories?.music?.drumming
                ?.ability || ''
        ,
        rappingAbility:
            profile?.categories?.music?.rapping?.ability ||
            ''
        ,
        keyboardAbility:
            profile?.categories?.music?.keyboard
                ?.ability || ''
        ,
        composerAbility:
            profile?.categories?.music?.composer
                ?.ability || ''
        ,
        dJAbility:
            profile?.categories?.music?.dJ?.ability || ''
        ,
        producerAbility:
            profile?.categories?.music?.producer
                ?.ability || ''
        ,
        favArtist:
            profile?.categories?.music?.favArtist || ''
        ,
    }

    const tvReality = {
        jobs: profile?.interest?.filter(
            i3 => i3.id === interest?.tvReality?.id,
        )[0]
            ?.sub.map(i => i.label)
    }

    const dance = {
        danceStyle:
            profile?.categories?.dance?.style || []
        ,
        danceAbility:
            profile?.categories?.dance?.danceAbility || ''
        ,
        agentName:
            profile?.categories?.dance?.agentName || ''
        ,
        agentWebsite:
            profile?.categories?.dance?.agentWebsite || ''
        ,
        teachingAbility:
            profile?.categories?.dance?.teachingAbility ||
            ''
        ,
        school: {
            name:
                profile?.categories?.dance?.schoolName || '',
            year:
                profile?.categories?.dance?.schoolYear || '',
            course:
                profile?.categories?.dance?.courseName || '',
        }
    }

    const hairMakeup = {
        fashionAbility:
            profile?.categories?.hairMakeup
                ?.fashionAbility || ''
        ,
        hairAbility:
            profile?.categories?.hairMakeup?.hairAbility ||
            ''
        ,
        makeupAbility:
            profile?.categories?.hairMakeup
                ?.makeupAbility || ''
        ,
    }

    const extras = {
        experience: profile?.categories?.extras?.experience || "",
        agentName: profile?.categories?.extras?.agentName || "",
        agentWebsite: profile?.categories?.extras?.agentWebsite || "",
        // jobs: profile?.interest?.filter(i3 => i3.id === interest?.extras.id)[0]
        //     ?.sub.map(i => i.label),
    }

    const influencer = {
        txt: profile?.categories?.influencer?.txt
    }

    let isActingEmpty = acting.language.length === 0 && acting.accent.length === 0 && !acting.agentName && !acting.experience;
    let isModelingEmpty = !modeling.experience && !modeling.agentName && !modeling.agentWebsite;
    let isFilmStageEmpty = !filmStage.artCostumeDesign && !filmStage.cameraCrew && !filmStage.directingWriting && !filmStage.lighting && !filmStage.postProdEditing && !filmStage.soundCrew && !filmStage.runnerAssistant;
    let isPhotographyEmpty = !photography.experience;
    let isPresentingEmpty = !presenting.tvExperience && !presenting.radioExperience && presenting.language.length == 0 && presenting.accent.length === 0;
    let isMusicEmpty = music.genre.length == 0 && !music.singingAbility && music.singingStyle.length == 0 && music.singingRange.length === 0 && !music.guitarAbility && !music.bassGuitarAbility && !music.drummingAbility && !music.rappingAbility && !music.keyboardAbility && !music.composerAbility && !music.dJAbility && !music.producerAbility && !music.favArtist;
    let isTvRealityEmpty = tvReality.jobs?.length == 0;
    let isDanceEmpty = dance.danceStyle.length === 0 && !dance.teachingAbility && !dance.danceAbility && !dance.agentWebsite && !dance.agentName;
    let isHairMakeupEmpty = !hairMakeup.fashionAbility && !hairMakeup.hairAbility && !hairMakeup.makeupAbility;
    // let isExtrasEmpty = extras.experience === "" && extras.jobs?.length == 0 && extras.agentName === "";
    let isExtrasEmpty = extras.experience === "" && extras.agentName === "";
    let isInfluencerEmpty = !influencer.txt;

    console.log("isExtrasEmpty: ", isExtrasEmpty)
    console.log("extras: ", extras)

    return (
        <>
            {profile?.interest
                ?.map((i: any) => i.label === "Acting")
                .includes(true)
                ? !isActingEmpty ? (
                    <div className="w-full mb-5">
                        <ActingExperience data={profile?.categories?.acting} own={own} edit={edit} />
                    </div>
                ) : edit && (
                    <div id="target16">
                        <AddExperience
                            title="Acting experience"
                            text="The detailed your credits & experience, the higher the chances you will be choosen."
                            link="/profile/edit/acting"
                            imagesSource="/images/desktop.svg"
                            buttonText="acting experience"
                        />
                    </div>
                )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Photography")
                .includes(true)
                ? !isPhotographyEmpty ? (
                    <div className="w-full mb-5">
                        <PhotographyExperience
                            data={profile?.categories?.photography}
                            own={own} edit={edit}
                        />
                    </div>
                ) : edit && (
                    <AddExperience
                        title="Photography"
                        text="Do you have photography experience? List it all right here."
                        link="/profile/edit/photography"
                    />
                )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Hair, Makeup, & Styling")
                .includes(true)
                ? !isHairMakeupEmpty ? (
                    <div className="w-full mb-5">
                        <HairMakeupExperience
                            data={profile?.categories?.hairMakeup}
                            own={own} edit={edit}
                        />
                    </div>
                )
                    : edit && (
                        <AddExperience
                            title="Hair, Makeup, & Styling"
                            text="Do you have Hair, Makeup, & Styling experience? List it all right here and be on the lead to get a part."
                            link="/profile/edit/hairMakeup"
                        />
                    )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Dancing")
                .includes(true)
                ? !isDanceEmpty ? (
                    <div className="w-full mb-5">
                        <DancingExperience data={profile?.categories?.dance} own={own} edit={edit} />
                    </div>
                )
                    : edit && (
                        <div id="target17">
                            <AddExperience
                                title="Modeling experience"
                                text="The detailed your credits & experience, the higher the chances you will be choosen."
                                link="/profile/edit/modeling"
                                imagesSource="/images/preview-modeling.svg"
                                buttonText="modeling experience"
                            />
                        </div>
                    )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Extras")
                .includes(true)
                ? !isExtrasEmpty ? (
                    <div className="w-full mb-5">
                        <ExtrasExperience data={profile?.categories?.extras} own={own} edit={edit} />
                    </div>
                )
                    : edit && (
                        <AddExperience
                            title="Extras"
                            text="Do you have extras experience? List it all right here."
                            link="/profile/edit/extras"
                        />
                    )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Influencer")
                .includes(true)
                ? !isInfluencerEmpty ? (
                    <div className="w-full mb-5">
                        <InfluencerExperience
                            data={profile?.categories?.influencer}
                            own={own} edit={edit}
                        />
                    </div>
                )
                    : edit && (
                        <AddExperience
                            title="Influencer"
                            text="Do you have influencer experience? List it all right here."
                            link="/profile/edit/influencer"
                        />
                    )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Modeling")
                .includes(true)
                ? !isModelingEmpty ? (
                    <div className="w-full mb-5">
                        <ModelingExperience
                            data={profile?.categories?.modeling}
                            own={own} edit={edit}
                        />
                    </div>
                )
                    : edit && (
                        <div id="target18">
                            <AddExperience
                                title="Modeling experience"
                                text="The details about your modeling experience."
                                link="/profile/edit/modeling"
                                imagesSource="/images/preview-dance.svg"
                                buttonText="dancing experience"
                            />
                        </div>
                    )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Film & Stage Crew")
                .includes(true)
                ? isFilmStageEmpty ? (
                    <div className="w-full mb-5" id="filmStage">
                        <FilmStageExperience
                            data={profile?.categories?.filmStage}
                            own={own} edit={edit}
                        />
                    </div>
                )
                    : edit && (
                        <div id="filmStage">
                            <AddExperience
                                title="Film & Stage Crew"
                                text="Do you have Film & Stage Crew experience? List it all right here."
                                link="/profile/edit/film-stage"
                            />
                        </div>
                    )
                : ""}

            {/* {profile?.interest
                ?.map((i: any) => i.label === "Film & Stage Crew")
                .includes(true)
                 ? (
                    <div className="w-full mb-5">
                        <FilmStageExperience
                  data={profile?.categories?.filmStage}
                  own={own} edit={edit}
                        />
                    </div>
                )
                    : edit && (
                        <AddExperience
                            title="Film & Stage Crew"
                            text="Do you have Film & Stage Crew experience? List it all right here."
                            link="/profile/edit/film-stage"
                        />
                    )
              } */}

            {profile?.interest
                ?.map((i: any) => i.label === "Tv & Reality")
                .includes(true)
                ? !isTvRealityEmpty ? (
                    <div className="w-full mb-5">
                        <TvRealityExperience
                            jobs={profile.interest.filter(
                                (i3) => i3.id === interest[categoriesKeys.tvReality].id
                            )[0]
                                ?.sub.map((i) => i.label)}
                            own={own} edit={edit}
                        />
                    </div>
                )
                    : edit && (
                        <AddExperience
                            title="Tv & Reality"
                            text="Do you have Tv & Reality experience? List it all right here."
                            link="/profile/edit/tvReality"
                        />
                    )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Musician")
                .includes(true)
                ? !isMusicEmpty ? (
                    <div className="w-full mb-5">
                        <MusicExperience data={profile?.categories?.music} own={own} edit={edit} />
                    </div>
                )
                    : edit && (
                        <AddExperience
                            title="Music"
                            text="Do you have music experience? List it all right here."
                            link="/profile/edit/music"
                        />
                    )
                : ""}

            {profile?.interest
                ?.map((i: any) => i.label === "Presenter")
                .includes(true)
                ? !isPresentingEmpty ? (
                    <div className="w-full mb-5">
                        <PresenterExperience
                            data={profile?.categories?.presenter}
                            own={own} edit={edit}
                        />
                    </div>
                )
                    : edit && (
                        <AddExperience
                            title="Presenter"
                            text="Do you have presenter experience? List it all right here."
                            link="/profile/edit/presenting"
                        />
                    )
                : ""}
        </>
    )
}