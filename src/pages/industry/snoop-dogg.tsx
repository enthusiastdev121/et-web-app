import { WHITELABEL_NAME } from "@/utils/envProviders";
import Layout from "components/Layout";
import CelebAdvice from "containers/oldJobPages/CelebAdvice";

export default function CelebSnoop() {
    return <Layout title={`Snoop Dogg Exclusive Celebrity Interviews &amp; Advice - Celebrity Video Messages to ${WHITELABEL_NAME} Members - ${WHITELABEL_NAME}`}>
        <CelebAdvice
            name="Snoop Dogg"
            about={
                [
                    `Cordozar Calvin Broadus (born October 20, 1971), is better known by his stage name Snoop Dogg. Snoop Dogg's hit debut album, Over the Counter, was released in 1991 and his second Doggystyle, was released in 1993 under Death Row Records. Doggystyle went quadruple platinum and spawned several Snoop Dogg hit singles, including "What's My Name" and "Gin & Juice."`,
                    `As the embodiment of '90s gangsta rap, Snoop Dogg blurred the lines between reality and fiction. Introduced to the world through Dr. Dre's The Chronic, Snoop quickly became the most famous star in rap, partially because of his drawled, laconic rhyming and partially because the violence that his lyrics implied seemed real, especially after he was arrested on charges of being a murder accomplice. The arrest certainly strengthened his myth, and it helped his debut album, 1993's Doggystyle, become the first debut album to enter the charts at number one, but in the long run, it hurt his career.`,
                    `As the Creative Chairman of EMI's newly reintroduced Priority Records, Snoop oversees a huge catalog that is filled with gangsta rap anthems (NWA, Eazy E, Master P, Ice Cube) that launched from the streets and infiltrated even the highest suites.`,
                    `Snoop's first order of business in his new post is his upcoming 10th solo album, "Malice N Wonderland." He is also releasing "Doggumentary," a full-length solo masterpiece and has three singles available on Itunes: "Gangbang Rookie," "Wet," and "New Year's Eve."`
                ]
            }
            quotes={[
                `"When I started to put together this record I had a lot of malice in my heart—just focusing on making hardcore gangsta music," explains Snoop. But what's become quite obvious to his adoring global fan base is that while Snoop stays steeped in the hood realities of his native Eastside Long Beach, he's continued to evolve.`,
                `And after delving further into this opus, Snoop knew that he also wanted to make songs that embodied more than just his gangsta. "My mood lightened and I wanted to make some music that just felt good…to me and to the ladies."`,
                `"Sometimes, if you're lucky, someone comes into your life who'll take up a place in your heart that no one else can fill, someone who's tighter than a twin, more with you than your own shadow, who gets deeper under your skin than your own blood and bones." -Snoop Dogg`
            ]}

            otherCelebs={[
                {
                    link: "/industry/jamie-foxx",
                    title: "Jamie Foxx"
                },
                {
                    link: "/industry/gabrielle-union",
                    title: "Gabrielle Union"
                },
                {
                    link: "/industry/tyler-perry",
                    title: "Tyler Perry"
                },
            ]}

            photos={[
                "/images/snoop-1.jpg",
                "/images/snoop-2.jpg",
                "/images/snoop-3.jpg",
                "/images/snoop-4.jpg",
                "/images/snoop-5.jpg",
            ]}

            videos={
                [
                    {
                        id: 1,
                        name: "snoop dogg interview",
                        uri: "ZYCvbChdbPE",
                    },
                    {
                        id: 2,
                        name: "snoop dogg interview",
                        uri: "KRkW-vSh-2c",
                    },
                ]
            }

            mainPhotos={
                [
                    "/images/snoop-main.jpg",
                ]
            }
        />
    </Layout>
}