import { fetchAPI } from "lib/api";
import { Result, Filter } from "components/Locations";
import { LocationsContainer } from "components/Containers";

const LocationsPage = ({ locations }) => {
  return (
    <LocationsContainer {...{ locations }}>
      <Filter />
      <Result {...{ locations, route: "locations" }}  />
    </LocationsContainer>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const locations = await fetchAPI("/locations");

  return {
    props: { locations },
    revalidate: 600,
  };
}

export default LocationsPage;
