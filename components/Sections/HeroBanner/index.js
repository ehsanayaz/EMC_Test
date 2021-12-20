import { UrlButton } from "components/Buttons/UrlButton";

export const HeroBanner = ({
  hero: { title, short_paraghraph, NavigateToButton = {}, hero_img = {} },
}) => {
  return (
    <>
      <Media info={hero_img}>
        <div className="caption">
          <h1>{title}</h1>
          <p>{short_paraghraph}</p>
          <UrlButton info={NavigateToButton} className="yellow-blue" />
        </div>
      </Media>

      <style jsx>{`
        .caption {
          position: absolute;
          top: 35%;
          width: 100%;
          left: 0;
          text-align: center;
        }
        h1 {
          color: #ffffff;
          font-size: 45px;
          line-height: 80px;
          font-weight: 600;
          letter-spacing: -1px;
          margin-bottom: 10px;
        }
        p {
          color: #f5d75a;
          font-size: 25px;
          margin-bottom: 5vh;
          font-weight: 400;
        }
      `}</style>
      <style jsx global>{`
        .yellow-blue {
          background-color: #f5d75a;
          color: #1a4060;
          margin: auto;
        }
        .yellow-blue:hover {
          color: #fff;
          background: #1a4060;
        }
      `}</style>
    </>
  );
};

const Media = ({ info: { mime = "", url = "" }, children }) => {
  return mime.includes("video") ? (
    <>
      <div className="media-container">
        <video muted={true} autoPlay={true} loop={true}>
          <source type={mime} src={url} />
          Your browser does not support the video tag.
        </video>
        {children}
      </div>
      <style jsx>{`
        .media-container {
          position: relative;
          height: 60vh;
          max-height: 700px;
          min-height: 200px;
          overflow: hidden;
        }
        .media-container:before {
          content: "";
          background-color: rgb(62 60 100 / 36%);
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        video {
          position: absolute;
          left: 0;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          background-size: cover;
          overflow: hidden;
          z-index: -1;
        }
      `}</style>
    </>
  ) : (
    <img src={url} alt="media-banner" />
  );
};
