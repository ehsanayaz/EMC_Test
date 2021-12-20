import { Image } from "components/generic";

export const ServicesBanner = ({ title, images = [] }) => {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <hr />
        <Icons images={images} />
      </div>
      <style jsx>{`
        .container {
          background-color: #bfc2c7;
          color: 'black';
          height: fit-content;
          padding-bottom: 40px;
          font-family: "Work sans", Sans-serif;
          font-weight: 700;
          text-align: center;
        }
        .hr {
          background-color: white;
        }
        h2 {
          font-size: 36px;
          text-align: center;
          padding: 20px;
          padding-top: 10vh;
        }
      `}</style>
    </>
  );
};

const Icons = ({ images }) => {
  return (
    <>
      <div className="container">
        {images.map(({ id, title, image }) => {
          return (
            <div key={id}>
              <Image image={image} alt={`icon-${title}`} className="icons" />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          flex-basis: 100%;
          justify-content: center;
          gap: 10vw;
          padding: 20px;
        }
        .container div {
          max-width: min-content;
        }
        h3 {
          font-size: 20px;
          color: #ffffff;
          margin-top: 20px;
        }
      `}</style>
      <style jsx global>{`
        .icons {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};
