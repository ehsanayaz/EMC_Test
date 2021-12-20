import { useSelector } from "react-redux";

const ProfileInfo = ({ isMobile, isLoggedIn }) => {
  const { username, email, profileImg } = useSelector((state) => state.profile);
  return (
    isLoggedIn && (
      <div className={`profile`}>
        <img
          className={`profile-${isMobile ? "mobile" : "desktop"}`}
          src={profileImg}
          alt="profile-img"
        />
        <h2 className={`profile-${isMobile ? "mobile" : "desktop"}`}>
          {username}
          {isMobile && <span>{email}</span>}
        </h2>
        <style jsx>{`
          .profile {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          img.profile-desktop {
            max-height: 30px;
            margin-right: 10px;
            border-radius: 50%;
          }

          img.profile-mobile {
            margin: 5vh 0 2vh 0;
            height: 60px;
            max-width: 60px;
            align-self: center;
          }

          h2.profile-desktop {
            text-align: center;
            margin-right: 10px;
          }

          h2.profile-mobile {
            font-size: 16px;
            text-align: center;
            margin-bottom: 14px;
          }

          h2 span {
            display: block;
            line-height: 16px;
            font-size: 12px;
            color: #868686;
          }

          /* mobile already is part of sidebar that only displays on small views */
          .profile-desktop {
            display: none;
          }

          @media screen and (min-width: 1023px) {
            .profile {
              flex-direction: row-reverse;
            }

            .profile-desktop {
              display: block;
            }
          }
        `}</style>
      </div>
    )
  );
};

export default ProfileInfo;
