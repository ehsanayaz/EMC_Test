import { Card } from "components/generic";

const Articles = ({ articles }) => {
  return (
    <>
      <div className="masonry">
        {articles.map((article) => {
          return (
            <Card article={article} key={`article__left__${article.slug}`} />
          );
        })}
      </div>
      <style jsx>{`
        .masonry {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .masonry p {
          max-height: 50vh;
          text-align: center;
          flex: 1 0 auto;
        }

        .masonry img {
          max-height: 50vh;
        }
      `}</style>
    </>
  );
};

export default Articles;
