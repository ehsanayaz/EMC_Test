import { RichContent } from "components/generic";

export const TitlePara = ({ title, paragraph }) => {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <RichContent className="short-description">{paragraph}</RichContent>
      </div>
      <style jsx>{`
        .container {
          text-align: center;
          max-width: 1024px;
          width: 90%;
          margin: 60px auto;
          padding: 5px;
        }
        h2 {
          font-family: "Work sans", Sans-serif;
          font-size: 36px;
          font-weight: 600;
					margin-bottom: 18px;
        }
      `}</style>
      <style jsx global>{`
        .short-description {
          text-align: center;
					font-size: 16px;
          font-family: "Work sans", Sans-serif;
					line-height: 26px;
        }
      `}</style>
    </>
  );
};
