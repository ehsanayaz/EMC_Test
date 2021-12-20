import { fetchAPI } from "lib/api";

import { LocationsContainer, ItemsContainer } from "components/Containers";
import { LocationCard } from "components/Cards";
import BackButton from "components/Buttons/BackButton";

const Location = ({ locations }) => {
  return (
    <LocationsContainer locations={locations}>
      <BackButton />
      <LocationCard location={locations[0]}>
        <ItemsContainer items={locations[0].shop_contents} />
      </LocationCard>
    </LocationsContainer>
  );
};

export async function getStaticPaths() {
  const locations = await fetchAPI("/locations");

  return {
    paths: locations?.map((location) => ({
      params: {
        slug: location.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const locations = await fetchAPI(`/locations?slug=${slug}`);
  return {
    props: { locations },
  };
}

export default Location;
