import { TitlePara } from "components/Complex";
import {
  HeroBanner,
  OffersBanner,
  ServicesBanner,
  FeaturedArticles,
  Footer,
} from "components/Sections";
import { fetchAPI } from "lib/api";

const Home = ({ hero, short_description, services, offers, topArticles }) => {
  return (
    <>
      <HeroBanner {...{ hero }} />
      <TitlePara {...short_description} />
      <ServicesBanner {...services} />
      <OffersBanner {...offers} />
      <FeaturedArticles {...{ topArticles }} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const {
    hero = {},
    short_description = {},
    services = {},
    offers = {},
    topArticles = [],
  } = await fetchAPI("/homepage");

  return {
    props: { hero, short_description, services, offers, topArticles },
    revalidate: 60,
  };
}

export default Home;
