import { useState, useEffect } from "react";
import { useAuth } from "context/AuthContext";
import Link from "next/link";

import { GreenBtn } from "../../components/ProductPage/AuditionJobPage/AsideRight/AsideRight.styled";
import { Container, PhotoItem, TextItem } from "./CommunityBuzz.styled";
import { getCommunityBuzzApi, postCommunityBuzzApi } from "network/apis/community";
import { formatCommunityBuzzRes } from "network/apiFormatter/communityBuzz";
import Skel from "./Skel";
import { communityBuzzItemD } from "types/audition-job";
import { useProfileStore } from "context/ProfileStore";
import { formatTime } from "@/utils/helper";
import { BROKEN_IMAGE_FALLBACK } from "@/utils/constants/resources";
import styled from "styled-components";
import { HiQuestionMarkCircle } from "react-icons/hi";
import Button from "components/Button";
import TranslatedText from "components/TranslatedText";

export default function CommunityBuzz() {
  const [data, setData] = useState<communityBuzzItemD[]>([]);
  const [loading, setLoading] = useState(true);
  const {
    auth: { authenticated },
    token
  } = useAuth();
  const [messageText, setMessageText] = useState('');
  const { profile } = useProfileStore();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCommunityBuzzApi();
        const data = res.data.map((i: any) => formatCommunityBuzzRes(i));
        setData(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const onSend = async () => {
    if (messageText.trim().length === 0) return

    try {
      const res = await postCommunityBuzzApi({ message: messageText, token });
      console.log('RES', res);
      setMessageText('');
      setData(s => [{
        time: formatTime(res.created_at),
        message: res.message,
        name: profile?.name,
        profile_picture: profile.pic,
        id: res.id,
        user_id: res.user_id,
      }, ...s])
    } catch (err) {
      console.log('Err', err);
    }
  };

  return (
    <Container className="rounded p-5 h-fit text-sm">
      <div className="border-b-2 mb-5 flex justify-between items-center" style={{ paddingBottom: "1rem" }}>
        <h2 className="font-semibold text-2xl"><TranslatedText>Community Buzz</TranslatedText></h2>
        <HiQuestionMarkCircle className="txt-primary text-2xl" />
      </div>
      {loading ? <Skel /> :
        <div>
          <ul
            className="overflow-y-scroll no-scroll h-96"
            style={{ height: "24rem" }}
          >
            {data.map((res: any) => {
              return (
                <Item className="flex" key={res?.id}>
                  <Link href={`/${res.talentlogin}`}>
                    <a>
                      <PhotoItem>
                        {res?.profile_picture !== null && (
                          <img src={res.profile_picture} alt="profile" />
                        )}
                      </PhotoItem>
                    </a>
                  </Link>

                  <TextItem className="w-3/4">
                    <MessageHeader>
                      <Link href={`/${res.talentlogin}`}>
                        <Name>
                          {res?.name}
                        </Name>
                      </Link>
                      <Time>{res?.time}</Time>

                    </MessageHeader>
                    <p>{res?.message}</p>
                  </TextItem>
                </Item>
              );
            })}
          </ul>
        </div>
      }

      {authenticated ? (
        <Form
          className="flex flex-col gap-2 mt-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            value={messageText}
            onChange={e => setMessageText(e.target.value)}
            type="text"
            placeholder="Send a message..."
            style={{ padding: ".5em" }}
          />
          <SendBtn type="submit" onClick={onSend}>
            <TranslatedText>Send</TranslatedText>
          </SendBtn>
        </Form>
      ) : (
        <div className="mt-3">
          <Link href="/account/login" passHref>
            <Button primary size="large" fullWidth>
              <TranslatedText>Sign In to Post</TranslatedText>
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
}

const Item = styled.li`
  border-bottom: 1px solid ${p => p.theme.border};
  padding-bottom: 10px;
  margin-bottom: 10px;
`

const Form = styled.div`
  border: 1px solid ${p => p.theme.border};
  border-radius: 5px;
  padding: 4px;
  display: flex;
  align-items: stretch;
  flex-direction: row;
`
const Input = styled.input`
  flex: 1;
  /* background-color: pink; */
`
const SendBtn = styled.button`
  width: 20%;
  min-width: 50px;
  background-color: ${p => p.theme.primary};
  border-radius: 5px;
  color: #fff; 
`

const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`
const Name = styled.a`
  color: ${p => p.theme.primary};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`
const Time = styled.div`
  font-size: 13px;
  opacity: 0.6;
`