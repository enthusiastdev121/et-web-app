import { CardContainer } from "./Styles";
import { useAuth } from "context/AuthContext";
import { HiPlay } from "react-icons/hi";
import { BsCheck2 } from "react-icons/bs";
import swal from 'sweetalert2';
import { unfollowTalentApi } from "network/apis/searchTatent";
import { async } from "rxjs";
import Button from "components/Button";
import UnfollowModal from "components/profile/modals/UnfollowModal";
import { useState } from "react";
import { ta } from "date-fns/locale";
import { removeFriendApi } from "network/apis/talent";
import toast from "react-hot-toast";
import Link from "next/link";


export default function FollowTalentCard({
  profile_picture_path,
  name,
  is_follower,
  is_following,
  is_friend,
  profile_id,
  key,
  refressTO,
  res,
  talentnum,
  setTalent,
  talentlogin
}: any) {
  const {
    auth: { authenticated },
    token
  } = useAuth();
  const [showUnConnectModal, setShowUnConnectModal] = useState(false)
  const [loadingConnect, setLoadingConnect] = useState(false)

  const unConnectNow = async () => {
    try {
      setLoadingConnect(true);
      const res = await removeFriendApi({ token, talentnum });
      setTalent(prevTalent => prevTalent.filter(talent => talent.talentnum1 !== talentnum))
      setLoadingConnect(false);
      toast.success("Friend removed successfully!")
    } catch (err) {
      setLoadingConnect(false);
      console.log("Err", err);
    }
  };

  return (
    <CardContainer className="rounded text-sm relative md:w-auto w-full" key={key}>
      {/* HEADING */}
      {profile_picture_path != null &&
        <Link href={`/${talentlogin}`} passHref>
          <img
            src={profile_picture_path}
            alt="Profile"
            className="rounded cursor-pointer"
          />

        </Link>
      }
      {profile_picture_path == null &&
        <Link href={`/${talentlogin}`} passHref>
          <img
            src="/images/user_profile.png"
            alt="Profile"
            className="rounded cursor-pointer"
          />
        </Link>
      }
      {/* <span className="play-icon">
        <HiPlay style={{ fontSize: "40px" }} />
      </span> */}
      <div className="flex items-center gap-3 justify-center">
        <Link href={`/${talentlogin}`}>
          <a>
            <div className="title my-2">
              {name}
            </div>
          </a>
        </Link>
      </div>
      {/* <div className="flex items-center gap-3 justify-center">
        <div className="sub_title">
          {city}
        </div>
      </div> */}

      {/* {showUnConnectModal && (
        <UnfollowModal
          open={() => setShowUnConnectModal(true)}
          onClose={() => setShowUnConnectModal(false)}
          title={"Remove Friend"}
          desc="Are you sure you want to remove this person from your friend list?"
          btnTitle="Remove"
          unFollowNow={unConnectNow}
        />
      )} */}

      <div className="flex items-center gap-3 justify-center">

        {is_friend ?
          <div className="my-3">
            <Button primary outlined onClick={() => {
              swal.fire({
                title: 'Are you sure you want to remove this person from your friend list?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#0070f4',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  unConnectNow()
                }
              })
            }}>Unfriend</Button>
          </div>
          : is_following ?
            <button className="follow-btn" onClick={() => {

              swal.fire({
                title: 'are you sure want to unfollow this?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#0070f4',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  await unfollowTalentApi({ data: profile_id, token: token })
                  toast.success("Unfollowed!")
                  refressTO(true)
                }
              })

            }}>
              <BsCheck2 style={{
                marginRight: 5
              }} className="txt-primary" /> Unfollow
            </button> : <></>
        }

      </div>


    </CardContainer>
  );
}
