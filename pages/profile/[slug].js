import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import useReroute from "hooks/useReroute";
import { fetchAPI } from "lib/api";

import { LocationsContainer, ItemsContainer } from "components/Containers";
import { LocationForm } from "components/Forms";
import ToggleEditButton from "components/Buttons/ToggleEditButton";
import { LocationCard } from "components/Cards";
import BackButton from "components/Buttons/BackButton";

const SingleLocationPage = ({ locations = [] }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { currentLocation, isLoading } = useSelector((state) => state.profile);
  useReroute("auth", "isLoggedIn", "/auth/login", true);

  const toggle = () => {
    setToggleEdit((prev) => !prev);
  };

  useEffect(() => {
    if (!isLoading) setToggleEdit(false);
  }, [currentLocation]);

  return (
    <LocationsContainer locations={locations}>
      <BackButton />
      <ToggleEditButton onClick={toggle} />
      {toggleEdit ? (
        <LocationForm location={locations[0]} />
      ) : (
        <LocationCard location={locations[0]}>
          <ItemsContainer items={locations[0].shop_contents} />
        </LocationCard>
      )}
    </LocationsContainer>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const locations = await fetchAPI(`/locations?slug=${slug}`);
  return {
    props: { locations },
  };
}

export default SingleLocationPage;
