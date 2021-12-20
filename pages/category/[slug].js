import Articles from "components/Articles";
import { fetchAPI } from "lib/api";

const Category = ({ category }) => {
  return (
    <section>
      <h1>{category.name}</h1>
      <Articles articles={category.articles} />
    </section>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];

  return {
    props: { category },
    revalidate: 600,
  };
}

export default Category;
