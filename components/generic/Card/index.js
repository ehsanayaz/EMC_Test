import Link from "next/link";
import { Image } from "components/generic";

export const Card = ({ article }) => {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <a>
        <Image image={article.image} />
        <p>{article.category}</p>
        <p>{article.title}</p>
      </a>
    </Link>
  );
};
