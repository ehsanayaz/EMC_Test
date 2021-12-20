import { UrlButton } from "components/Buttons/UrlButton";
import { Image } from "components/generic";

export const ArticleCard = ({ title, description, content, slug, image }) => {
  const info = { url: slug };
  return (
    <>
      <div className="card">
        <Image className="article-card" image={image} />
        <section>
          <h3>{title}</h3>
          <h4>{description}</h4>
          <UrlButton className="article-url" info={info} isSlug base="/article">
            Read More &gt;
          </UrlButton>
        </section>
      </div>
      <style jsx>{`
        .card {
          text-align: center;
          width: 30vw;
          min-width: 240px;
          max-width: 360px;
          margin: 20px 0;
          box-shadow: 0 5px 20px rgb(34 34 34 / 10%);
          height: auto;
          max-height: 520px;
          font-family: "Work sans", Sans-serif;
          position: relative;
        }
        section {
          height: 280px;
          padding: 35px 30px;
        }
        h3 {
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 15px;
          line-height: 1.4;
        }
        h4 {
          color: #4f4f4f;
          font-size: 16px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      `}</style>
      <style jsx global>{`
        img.article-card {
          width: 100%;
          height: 200px;
        }
        .article-url {
          position: absolute;
          bottom: 10px;
        }
      `}</style>
    </>
  );
};
