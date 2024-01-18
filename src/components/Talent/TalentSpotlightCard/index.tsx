import { CardContainer } from "./Styles";
import { useAuth } from "context/AuthContext";

export default function TalentSpotlightCard({
  profile_picture_path,
  name,
  city,
  key
}: any) {
  const {
    auth: { authenticated },
  } = useAuth();


  return (
    <CardContainer className="mb-5 rounded text-sm relative" key={key}>
      {/* HEADING */}
      {profile_picture_path != null && <img
        src={profile_picture_path}
        alt="Profile"
      />
      }
      {profile_picture_path == null &&
        <img
          src="/images/user_profile.png"
          alt="Profile"
          className="main-image"
        />
      }

      <div className="person-name">

        {profile_picture_path != null && <img
          src={profile_picture_path}
          alt="Profile"
          className="border-radius-image"
        />
        }
        {profile_picture_path == null &&
          <img
            src="/images/user_profile.png"
            alt="Profile"
            className="border-radius-image"
          />
        }

        <span>{name}</span>
      </div>

    </CardContainer>
  );
}
