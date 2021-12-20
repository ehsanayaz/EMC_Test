import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { wrapper } from "store/rootStore";
import { PROFILE_LOCATIONS_FETCH } from "store/profile/profileSagaActions";
import useReroute from "hooks/useReroute";

import { LocationsContainer } from "components/Containers";
import { Result } from "components/Locations";

const Profile = () => {
  const { locations, isLoading, username, email } = useSelector(
    (state) => state.profile
  );
  useReroute("auth", "isLoggedIn", "/auth/login", true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PROFILE_LOCATIONS_FETCH());
  }, []);

  return (
    <LocationsContainer {...{ locations, gridEnabled: true }}>
      {isLoading ? (
        <div>LOADING!</div>
      ) : (
        <>
          <div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
          </div>
          <Result {...{ locations, route: "profile" }} />
        </>
      )}
    </LocationsContainer>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const {
      auth: { isLoggedIn },
    } = store.getState();

    if (!isLoggedIn) {
      return {
        redirect: {
          permanent: false,
          destination: "/auth/login",
        },
      };
    }

    return {};
  }
);

export default Profile;
