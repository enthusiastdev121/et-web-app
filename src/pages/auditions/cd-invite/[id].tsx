import { convertToUnix, formatAudtionDetailSlug } from "@/utils/helper";
import Layout from "components/Layout";
import OverlayLoader from "components/OverlayLoader";
import { useAuth } from "context/AuthContext";
import { format } from "date-fns";
import { formatCDInviteItem } from "network/apiFormatter/jobs";
import { getCdInviteDetailApi, sedCDMessageApi } from "network/apis/jobs";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoLocationSharp, IoSend } from "react-icons/io5";
import { CDInviteItemD } from "types/jobs";

export default function CdInvite(props: any) {
  const router = useRouter();
  const routeId = router.query?.id || 0;
  const { token } = useAuth();
  const [invite, setInvite] = useState<CDInviteItemD | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const scrollRef = useRef<any>(null);

  const fetchInvite = useCallback(async () => {
    try {
      if (!token || !routeId) {
        return;
      }

      setLoading(true);
      const res = await getCdInviteDetailApi({ id: routeId, token });
      const data = formatCDInviteItem(res);
      setLoading(false);
      setInvite((s) => ({ ...s, ...data }));
    } catch (err) {
      setLoading(false);
      console.log("Err", err);
    }
  }, [token, routeId]);

  useEffect(() => {
    fetchInvite();
  }, [fetchInvite]);


  const onMessage = async () => {
    try {
      if (!message.trim()) {
        return;
      }

      const res = await sedCDMessageApi({
        token,
        id: invite?.conversationId || 0,
        raw: {
          body: message,
        },
      });

      if (res.id) {
        setMessage("");
        setInvite((s) => ({
          ...s,
          chat: [
            ...s.chat,
            {
              id: res.id,
              sent: true,
              text: res.body,
              time: convertToUnix(res.created_at),
            },
          ],
        }));
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current?.scrollHeight;
        }
      }
    } catch (err) {
      console.log("Err", err);
    }
  };

  return (
    <Layout>
      <div className="py-6 px-5 max-w-screen-xl mx-auto shadow-lg bg-white rounded-lg mt-6">
        {loading && <OverlayLoader />}

        <div className="text-xl font-semibold text-gray-400 mb-4 text-center"> Casting Director Invite</div>

        {invite?.vip && (
          <div className="inline-flex gap-2 bg-green-500 text-white items-center rounded-full py-2 px-4 font-semibold mb-3">
            <BsShieldFillCheck className="text-xl text-white" />
            <div>VIP Invitation</div>
          </div>
        )}
        <div className="text-xl font-semibold">
          #{invite?.role.id} {invite?.role?.name}
        </div>
        <div className="mb-4" dangerouslySetInnerHTML={{ __html: invite?.role?.desc || "" }} />

        <div className="flex gap-2">
          <div className="text-base font-semibold mb-3">Casting/Job : </div>
          <Link href={`/auditions/${formatAudtionDetailSlug(invite?.job.title + " " + invite?.job.location + " " + invite?.job.zip, invite?.job.id || 0)}`}>
            <a>
              <div className=" rounded-md text-blue-500  cursor-pointer transition-all font-medium ">{invite?.job.title}</div>
            </a>
          </Link>
        </div>

        {/* <div className="text-blue-400 flex gap-2 font-medium mb-2 text-base items-center">
          <IoLocationSharp className="text-xl" />
          <div>{invite?.job.location}</div>
        </div> */}




        <div className="flex text-sm text-gray-500 mb-3">
          {invite?.invitedAt &&
            <div>Message Received: {format(new Date(invite.invitedAt), 'MMM dd, yyyy')}</div>}
        </div>
        <div className={`flex text-sm  mb-3 ${new Date(Number(invite?.role?.expirationT) * 1000) < new Date() ? 'text-red-500' : 'text-green-500'} `}>
          {invite?.role.expirationT &&
            <div>Deadline to Respond: {format(new Date(Number(invite?.role.expirationT) * 1000), 'MMM dd, yyyy')}</div>}
        </div>

        {invite?.message && (
          <div className="bg-green-50 whitespace-pre-wrap text-green-500 font-medium text-md py-3 px-4 rounded-md">
            <div>{invite?.message}</div>

          </div>
        )}

        {invite?.canReply && (
          <div className="mt-5">
            <div className="font-semibold text-base mb-3">Conversation</div>

            <div className=" bg-gray-100 w-full rounded-md flex flex-col border border-gray-200 overflow-hidden" style={{ height: 400 }}>
              <div className=" overflow-auto grow px-2 py-2 flex flex-col gap-2" ref={scrollRef}>
                {invite?.chat?.map((i, ind) => {
                  return (
                    <>
                      <div className={`px-3 py-1 rounded-full justify-start   ${i.sent ? "bg-white text-gray-500 self-end" : "bg-blue-500 text-white self-start "} `}>{i.text}</div>
                    </>
                  );
                })}
              </div>

              <div className="flex p-1 gap-2">
                <input type="text" className="text-base px-3 rounded-full py-3 bg-white w-full border-t border-gray-300" placeholder="Type message here" value={message} onChange={(e) => setMessage(e.target.value)} />

                <div className="bg-blue-500 text-white aspect-square h-full text-xl flex items-center justify-center rounded-full cursor-pointer" onClick={onMessage}>
                  <IoSend />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
