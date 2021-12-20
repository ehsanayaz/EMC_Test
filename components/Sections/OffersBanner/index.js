export const OffersBanner = ({ title, images = [] }) => {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <Tiles images={images} />
      </div>
      <style jsx>{`
        .container {
          height: fit-content;
          padding-bottom: 40px;
          font-family: "Work sans", Sans-serif;
          font-weight: 700;
          text-align: center;
        }
        h2 {
          text-align: center;
          color: #164772;
          padding: 20px;
          padding-top: 10vh;
          font-size: 36px;
        }
      `}</style>
    </>
  );
};

import { Image } from "components/generic";

const Tiles = ({ images }) => {
  return (
    <>
      <div className="container">
        {images.map(({ id, title, image }) => {
          return (
            <div key={id}>
              <Image image={image} alt={`tiles-${title}`} className="tiles" />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          display: flex;
					flex-basis: 100%;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
					gap: 20px;
          max-width: 1200px;
          margin: auto;
        }
        .container div {
          width: 45vw;
 					max-width: 500px;
					margin-bottom: 40px;
        }
        h3 {
          color: #164772;
          margin-top: 20px;
        }
      `}</style>
      <style jsx global>{`
        .tiles {
          width: 100%;
          aspect-ratio: 1;
        }
      `}</style>
    </>
  );
};
