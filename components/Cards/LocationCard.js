import { RichContent } from "components/generic";
import { Images } from "public";

export const LocationCard = ({ location, children }) => {
  const {
    id,
    name,
    coordinates,
    address,
    description,
    image = null,
  } = location;
  return (
    <>
      <header>
        <img src={image?.url || Images.profile.default} alt={name} />
        <h1>{name}</h1>
      </header>
      <div className="location-container">
        <section>
          <h4>Address: {address}</h4>
          <h5>{coordinates}</h5>
          <RichContent>{description}</RichContent>
        </section>
      </div>
      <aside>{children}</aside>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: row;
          flex-flow: wrap;
          justify-content: space-evenly;
        }
        .location-container {
          position: relative;
          display: flex;
          flex-direction: column;
          background-color: rgb(209, 253, 239);
          padding: 12px;
          margin: 10px 0;
          border-radius: 20px;
        }

        @media screen and (min-width: 1023px) {
          .location-container {
            flex-direction: row;
          }
        }

        img {
          top: -120px;
          left: 55px;
          width: 150px;
          height: 150px;
        }

        section {
          position: relative;
          display: flex;
          flex: 1 1 0;
          flex-direction: column;
          padding: 5px;
          margin-top: 50px;
        }

        aside {
          margin-top: 50px;
        }

        h1 {
          text-align: center;
          align-self: center;
          line-height: 70px;
        }

        h2 {
          flex: 1;
          font-weight: 700;
          font-size: 32px;
        }

        h4 {
          font-size: 16px;
        }

        h5 {
          font-size: 16px;
          color: rgba(42, 42, 42, 0.342);
          flex: 1;
        }

        p {
          font-size: 20px;
          margin: 5px 0;
          flex: 1;
        }

        .small-info {
          display: flex;
        }
      `}</style>
    </>
  );
};
