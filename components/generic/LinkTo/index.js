import Link from "next/link";

export const LinkTo = ({ children, as = null, href = "#", className = "" }) => {
  return (
    <>
      <Link as={as} href={href}>
        <a className={`${className}`}>{children}</a>
      </Link>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
