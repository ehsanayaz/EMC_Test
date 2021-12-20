import { NGOCard } from "components/Cards";
import { fetchAPI } from "lib/api";

const Home = ({ ngosPage }) => {
  return (
    <>
      <section>
        <h1>{ngosPage.title}</h1>
        {ngosPage.ngos.map((ngo) => {
          return <NGOCard ngo={ngo} key={ngo.id} />;
        })}
      </section>
      <style jsx>{`
        h1 {
          text-align: center;
          padding-bottom: 40px;
        }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  const ngosPage = await fetchAPI("/ngo-s-page");

  return {
    props: { ngosPage },
    revalidate: 600,
  };
}

export default Home;
