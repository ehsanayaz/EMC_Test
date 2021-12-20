import Link from "next/link";

const Title = ({ name, route, slug, ...props }) => {
  return (
    <div>
      <h2>
        <Link href={`/${route}/${slug}`}>{name}</Link>
      </h2>
      {props.children}
    </div>
  );
};

export default Title;
