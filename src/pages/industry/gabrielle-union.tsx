import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import CelebAdvice from "containers/oldJobPages/CelebAdvice";

export default function CelebGabrielle() {
    return <Layout title={`Gabrielle Union Exclusive Celebrity Interviews &amp; Advice - Celebrity Video Messages to ${WHITELABEL_NAME} Members - ${WHITELABEL_NAME}`}>
        <CelebAdvice
            name="Gabrielle Union"
            about={
                [
                    `Gabrielle Monique Union (born October 29, 1972) is an American actress and former model. Among her notable roles is as the cheerleader opposite Kirsten Dunst in the film Bring it On. Gabrielle Union starred opposite Will Smith and Martin Lawrence in the blockbuster film Bad Boys II and played a medical doctor in the CBS drama series City of Angels. She starred with LL Cool J and Meagan Good in Deliver Us from Eva in 2003. Gabrielle Union was born in Omaha, Nebraska, the daughter of Theresa and Sylvester Union. She was raised Catholic. At the age of eight, her family moved to Pleasanton, California, where she grew up and attended Foothill High School. In high school, Gabrielle Union was an all-star point guard in basketball and a year-round athlete, also playing in soccer and running track. Gabrielle Union attended the University of Nebraska before moving on to Cuesta College. Gabrielle Union eventually transferred to UCLA and earned a degree in sociology. While studying there, she interned at the Judith Fontaine Modeling & Talent Agency to earn extra academic credits. Invited by the agency's owner, Judith Fontaine, Gabrielle Union started working as a model to pay off college loans. Gabrielle Union started her acting career in minor roles. Most were in teen movies such as 10 Things I Hate About You and Love and Basketball. In 1997, Gabrielle Union appeared in a sixth-season episode of Star Trek: Deep Space Nine as the Klingon N'Garen. She also appeared in Sister, Sister as Vanessa, in Smart Guy as Denise, and in five episodes of 7th Heaven as Keesha Hamilton. In 2000, Gabrielle Union landed the role of Isis in the cheerleading movie Bring it On opposite Kirsten Dunst. Bring It On helped push into the mainstream and she began gaining more exposure. This led to Gabrielle Union being cast in the CBS television drama City of Angels as Dr. Courtney Ellis. Gabrielle Union was cast in her first leading role in the 2003 film Deliver Us from Eva with rapper L.L. Cool J.`
                ]
            }
            quotes={[
                `This was her second time working with the rapper since making a cameo in his video "Paradise" in 2002. The film received fair reviews from critics and it showed that Gabrielle Union was a leading lady. Gabrielle Union landed the role of Will Smith's girlfriend Syd in the film Bad Boys II, a box office success grossing over $273 million worldwide. Gabrielle Union starred with Academy Award winner Jamie Foxx in the film Breakin' All the Rules in 2004. Gabrielle Union starred in the short-lived 2005 ABC series Night Stalker. She has also starred in the independent drama films Neo Ned and Constellation, the latter of which was released to theaters. She won an award for Best Actress in Neo Ned at the Palm Beach International Film Festival, and the film received awards at several festivals. She starred in the 2005 remake of The Honeymooners with comedian Cedric The Entertainer. In 2006, she starred as Busta Rhymes' love interest in the music video for Rhymes' "I Love My Chick." Gabrielle Union starred in the 2007 films Daddy's Little Girls by Tyler Perry (released on Valentine's Day) and the Christmas film The Perfect Holiday which opened on December 12. In an interview with Art Nouveau Magazine, Gabrielle Union complained about the lack of roles for black actresses and actors in Hollywood: "There used to be specifically written black, if you knew Denzel was doing a movie you knew his wife, girl or love interest was going to be black but that's not necessarily the case anymore. You're in that room with every amazingly talented actress of every hue, and it's a dogfight, it's hard." In 2008, Union appeared on Ugly Betty for 3 episodes (36-38) as Renee, Wilhelmina Slater's (Vanessa L. Williams) sister and Daniel Meade's (Eric Mabius) love interest. She also made a cameo appearance in the music video for Ne-Yo's "Miss Independent." She joined the cast of the U.S. television series Life on NBC and appeared in four episodes prior to the cancellation of series in May 2009. She appears in the ABC series FlashForward alongside John Cho and Joseph Fiennes which premiered on September 24, 2009.`
            ]}

            otherCelebs={[
                {
                    link: "/industry/piers-morgan",
                    title: "Piers Morgan"
                },
                {
                    link: "/industry/try-songz",
                    title: "Try Songz"
                },
                {
                    link: "/industry/tyler-perry",
                    title: "Tyler Perry"
                },
            ]}

            photos={[
                "/images/gabrielle-1.jpg",
                "/images/gabrielle-2.jpg",
                "/images/gabrielle-3.jpg",
                "/images/gabrielle-4.jpg",
            ]}

            videos={
                [
                    {
                        id: 1,
                        name: "Gabrielle Union interview",
                        uri: "UKrU6lisVvs",
                    },
                ]
            }

            mainPhotos={
                [
                    "/images/gabrielle-main.jpg",
                ]
            }
        />
    </Layout>
}