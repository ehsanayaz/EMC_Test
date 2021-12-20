import Moment from "react-moment";
import { fetchAPI } from "lib/api";
import { getStrapiMedia } from "lib/media";

import { Image } from "components/generic";
import { RichContent } from "components/generic";

const Article = ({ article }) => {
  const imageUrl = getStrapiMedia(article.image);
  return (
    <section>
      <h1>{article.title}</h1>
      <div className="image-banner">
        <img src={imageUrl} alt="banner" />
      </div>
      <RichContent>{article.content}</RichContent>
      <hr />
      <div>
        <Image
          image={article.author?.picture}
          style={{
            position: "static",
            borderRadius: "50%",
            height: 30,
          }}
        />
      </div>
      <p>By {article.author?.name}</p>
      <p>
        <Moment format="MMM Do YYYY">{article.published_at}</Moment>
      </p>
    </section>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);

  return {
    props: { article: articles[0] },
    revalidate: 60,
  };
}

export default Article;
