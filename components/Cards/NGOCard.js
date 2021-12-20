import { RichContent } from "components/generic";
import CarouselContainer from "components/Containers/CarouselContainer";

export const NGOCard = ({
  ngo: { title, url, description, main_image, carousel_images },
}) => {
  const Images = carousel_images.map(({ id, url, name }) => {
    return <img key={id} src={url} alt={name} className="ngo-img" />;
  });
  return (
    <>
      <div className="card" style={{
        backgroundColor: "#bfc2c7",
        maxWidth: '900px',
        display: 'flex',
        flexWrap: "wrap",
        margin: "20px 0",
        padding: "0 40px",
        borderRadius: '25px',
      }}>
        <section>
          <div className="title">
            <a href={url} target="_blank">
              <img
                src={main_image.url}
                alt={`Main Image of ${title}`}
                className="logo"
              />
            </a>
            <a href={url} target="_blank">
              <h2>{title}</h2>
            </a>
          </div>
          <RichContent className="ngo-desc">{description}</RichContent>
        </section>
        <div className="ngo-img-container">
          <CarouselContainer array={Images} />
        </div>
      </div>
      <style jsx>{`
        .card {
          
        }

        section {
          min-width: 100px;
          display: flex;
          flex-direction: column;
          padding: 20px;
          flex: 1;
        }

        .title {
          width: 100%;
          justify-content: center;
          display: flex;
          gap: 20px;
        }

        .logo {
          width: 75px;
          display: inline-block;
        }

        .ngo-img-container {
          position: relative;
          max-width: 400px;
        }

        a {
          align-self: center;
        }

        p {
          margin-top: 20px;
        }

        @media screen and (max-width: 729px) {
          .card {
            place-content: center;
          }
          .title {
            place-content: center;
          }
          img {
            margin: auto;
          }
        }
      `}</style>
      <style jsx global>{`
        .ngo-desc {
          margin-top: 20px;
        }

        .ngo-img {
          width: 80%;
          max-width: 450px;
        }

        @media screen and (max-width: 729px) {
          .ngo-desc {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};
