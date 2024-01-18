import { GreenBtn } from "@/styles/Btn.styled";
import Modal from "components/Modal";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Popup } from "./styles";

export default function Navbar() {
  const router = useRouter();
  const { slug, filter } = router.query;

  const [selectedID, setselectedID] = useState(1)

  useEffect(() => {
    switch (filter) {
      case "":
        setselectedID(1)
        break;
      case "featured":
        setselectedID(2)
        break;
      case "newest":
        setselectedID(3)
        break;
      case "highest-rated":
        setselectedID(4)
        break;
      case "oldest":
        setselectedID(6)
        break;

      default:
        break;
    }
  }, [filter])


  const NavItems = [
    {
      id: 1,
      label: "All",
      active: false,
      onClick: () => {
        setselectedID(1)
        router.push(`/contests/${slug}`);
      },
    },
    {
      id: 2,
      label: "Featured",
      active: false,
      onClick: () => {
        setselectedID(2)
        router.push(`/contests/${slug}/featured`);
      },
    },
    {
      id: 3,
      label: "Newest",
      active: false,
      onClick: () => {
        setselectedID(3)
        router.push(`/contests/${slug}/newest`);
      },
    },
    {
      id: 4,
      label: "Highest Rated",
      active: false,
      onClick: () => {
        setselectedID(4)
        router.push(`/contests/${slug}/highest-rated`);
      },
    },
    // {
    //   id: 5,
    //   label: "Most Rated",
    //   onClick: () => {
    //     router.push(`/contests/${slug}/most-rated`);
    //   },
    // },
    {
      id: 6,
      label: "Oldest",
      active: false,
      onClick: () => {
        setselectedID(6)
        router.push(`/contests/${slug}/oldest`);
      },
    },
    // {
    //   id: 7,
    //   label: "More About Voting",
    //   onClick: () => {
    //     open1();
    //   },
    // },
    // {
    //   id: 8,
    //   label: "More About Submissions",
    //   onClick: () => {
    //     open2();
    //   },
    // },
    // {
    //   id: 9,
    //   label: "View All Current Contests",
    //   onClick: () => {
    //     router.push("/contests");
    //   },
    // },
  ];
  const [showModal1, setShowModal1] = useState(false);
  const open1 = () => setShowModal1(true);
  const close1 = () => setShowModal1(false);
  const [showModal2, setShowModal2] = useState(false);
  const open2 = () => setShowModal2(true);
  const close2 = () => setShowModal2(false);

  return (
    <nav>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showModal1 && (
          <Modal handleClose={close1}>
            <Popup className="rounded-xl shadow-lg max-w-xl w-80v">
              <div className="flex items-center justify-between p-5 border-b-2">
                <h3 className="text-3xl">More About Voting</h3>
                <div onClick={close1} className="cursor-pointer">
                  <Image
                    src="/svg/cross-dark.svg"
                    alt="cross"
                    height="15"
                    width="15"
                  />
                </div>
              </div>
              <div className="p-5">
                <p>
                  Voting for your friends on ExploreTalent.com is fun and earns
                  you points that you can redeem for cool prizes! When you vote
                  in any of our contests, you&apos;re participating in a
                  community of entertainers just like you and exposing yourself
                  to new friends and contacts. When you join any one of the
                  Explore Talent contests, new people will see you, be able to
                  vote for you and earn points themselves. New contests are
                  launching all the time so there&apos;s sure to be one that you
                  like. Don&apos;t wait, start voting now!
                </p>
              </div>
              <div className="p-5 text-right border-t-2">
                <GreenBtn className="btn" onClick={close1}>
                  Close
                </GreenBtn>
              </div>
            </Popup>
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showModal2 && (
          <Modal handleClose={close2}>
            <Popup className="rounded-xl shadow-lg max-w-xl w-80v">
              <div className="flex items-center justify-between p-5 border-b-2">
                <h3 className="text-3xl">More About Submissions</h3>
                <div onClick={close2} className="cursor-pointer">
                  <Image
                    src="/svg/cross-dark.svg"
                    alt="cross"
                    height="15"
                    width="15"
                  />
                </div>
              </div>
              <div className="p-5">
                <p>
                  Submitting to any of the ExploreTalent.com contests is fun and
                  easy! Not only do you get to participate in the ET community,
                  but you get to see where you rank in each contest and you earn
                  points that can be redeemed for prizes. When you submit
                  yourself to a contest, you earn 5 Explore Talent points. The
                  more you submit yourself and participate in the community, the
                  more points you earn and the more friends you make! Our
                  contests are designed to ensure that you have a great time
                  while visiting ExploreTalent.com. Good luck!
                </p>
              </div>
              <div className="p-5 text-right border-t-2">
                <GreenBtn className="btn" onClick={close2}>
                  Close
                </GreenBtn>
              </div>
            </Popup>
          </Modal>
        )}
      </AnimatePresence>

      <div className="tabs-messages no-scroll -mr-5 -ml-5 pl-5">
        <>
          {NavItems.map((item: any) => (
            <>
              <button key={item.id} className={`${selectedID == item.id ? "active" : "de-active"}`} onClick={item.onClick}>
                {item.label}
              </button>
            </>

          ))}
        </>
      </div>
    </nav>
  );
}
