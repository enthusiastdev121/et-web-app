import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import CelebAdvice from "containers/oldJobPages/CelebAdvice";

export default function CelebFoxx() {
    return <Layout title={`Jamie Foxx Exclusive Celebrity Interviews &amp; Advice - Celebrity Video Messages to ${WHITELABEL_NAME} Members - ${WHITELABEL_NAME}`}>
        <CelebAdvice
            name="Jamie Foxx"
            about={
                [
                    `Jamie Foxx is often described as a triple threat for his versatility as an actor, musician and comedian. He was born Eric Bishop and raised by his grandparents in Terrell, Texas. It was his 'Granny' who recognized his gift to perform and introduced him to the piano. When he became 15, Foxx was serving as musical director and choir leader at Terrell's New Hope Baptist Church. Not only was he a gifted musician, but also a star athlete at Terrell High school setting records in football and track. It was music that took Foxx to California when he received a classical piano scholarship to U.S. International University in San Diego.`,
                    `Foxx first came to fame as a comedian. Still as Eric Bishop, he got his start in showbiz in 1989 when he tried his hand at standup on a dare at an open microphone night. After realizing that the women who signed up for open mike nights were always selected, he used different unisex names with hopes of getting stage time. After bringing down the house as 'Foxx', the name Eric Bishop was relegated to the past. After spending time on the comedy circuit, he joined Keenan Ivory Wayans, Jim Carrey, Damon Wayans and Tommy Davidson in the landmark Fox sketch comedy series 'In Living Color,' creating some of the show's funniest and most memorable moments.`,
                    `In 1996, he launched his own series, 'The Jamie Foxx Show,' that became one of the top-rated programs on the WB Network.`,
                ]
            }
            quotes={[
                `During its five-year run. Foxx not only starred on the series but was also the co-creator, executive producer, and director of several episodes. He received critical acclaim for his riveting work in "Any Given Sunday" and as Bundini Brown in 'Ali.' These dramatic breakout roles led to 2004, the Year of the Foxx, when he delivered a trio of powerful performances in Ray, Collateral and Redemption.`,
                `He won an Academy Award for his portrayal of the legendary Ray Charles as well as the Golden Globe, Screen Actors Guild (SAG), AFTRA and NAACP Image Awards. Foxx simultaneously garnered Oscar, Golden Globe, SAG Award, AFTRA Award, and Image Award nominations in the category of Best Supporting Actor for his work in Collateral. And he landed Golden Globe and SAG Award nominations and won an Image Award for his portrayal of condemned gang member-turned-Nobel Peace Prize nominee Stan 'Tookie' Williams in the television movie Redemption.`,
                `That amazing feat marked the first time that a single actor has received three Golden Globe nominations and four SAG Award nominations in the same year. Some of his other films include: Dreamgirls, Miami Vice, Jarhead, The Kingdom, The Soloist, Law Abiding Citizen, and Valentine's Day.`
            ]}

            otherCelebs={[
                {
                    link: "/industry/gabrielle-union",
                    title: "Gabrielle Union"
                },
                {
                    link: "/industry/snoop-dogg",
                    title: "Snoop Dogg"
                },
                {
                    link: "/industry/tyler-perry",
                    title: "Tyler Perry"
                },
            ]}

            photos={[
                "/images/foxx-1.jpg",
                "/images/foxx-2.jpg",
                "/images/foxx-3.jpg",
                "/images/foxx-4.jpg",
                "/images/foxx-5.jpg",
            ]}

            videos={
                [
                    {
                        id: 1,
                        name: "snoop dogg interview",
                        uri: "Al3naELlVVE",
                    }
                ]
            }

            mainPhotos={
                [
                    "/images/foxx-main.jpg",
                ]
            }
        />
    </Layout>
}