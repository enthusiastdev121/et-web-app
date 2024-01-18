import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { getSuccessStoriesApi } from "network/apis/successStories";
import { H3, Container } from "./SuccessStories.styled";
import Card from "./Card";
import { formatSuccessStoryRes } from "network/apiFormatter/successStories";
import Skel from "./Skel";
import { PrimaryBtn } from "@/styles/Btn.styled";
import Link from "next/link";
import { useAuth } from "context/AuthContext";
import TranslatedText from "components/TranslatedText";

export default function SuccessStories() {
  const [story, setStory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { auth: { authenticated } } = useAuth()

  useEffect(() => {
    const getStory = async () => {
      const res = await getSuccessStoriesApi(1, 15);
      setStory(res.data);
      setLoading(false);
    };

    getStory();
  }, []);

  return (
    <Container className="rounded p-5">
      <h3 className="font-semibold text-2xl mb-5"><TranslatedText>Success Stories</TranslatedText></h3>
      {loading ? (
        <Skel />
      ) : (
        <ul className="overflow-y-scroll no-scroll" style={{ height: "800px" }}>
          {story.map((s: any) => {
            const res = formatSuccessStoryRes(s);
            return (
              <li key={res?.id}>
                <Card
                  name={res?.name}
                  image={res?.profile_picture}
                  text={res?.desc?.slice(0, 100)}
                  id={res?.id}
                />
              </li>
            );
          })}
        </ul>
      )}
      <div className="flex flex-col">
        <Link href={authenticated ? "/upgrade-to-pro" : "/join/talentb"} passHref>
          <PrimaryBtn className="btn mt-10 mb-5 text-sm" style={{ fontWeight: "400" }}>
            <TranslatedText>Become the next success Story</TranslatedText>
          </PrimaryBtn>
        </Link>
      </div>
    </Container>
  );
}
