import PropTypes from "prop-types";

import { LinkTo } from "components/generic";

export const UrlButton = ({
  info: { title = "Button", url = "#" } = {},
  base = null,
  isSlug = false,
  className = "",
  children,
}) => {
  const href = isSlug ? `${base}/[slug]` : url;
  const as = isSlug ? `${base}/${url}` : null;

  return (
    <>
      <LinkTo {...{ className: className + " url-button", as, href }}>
        {children || title}
      </LinkTo>
      <style jsx global>{`
        .url-button {
          display: block;
          width: fit-content;
          padding: 12px 32px;

          font-size: 16px;
          font-weight: 400;
          text-decoration: none;
          line-height: 18px;
          border-radius: 30px;
        }
      `}</style>
    </>
  );
};

UrlButton.propTypes = {
  info: PropTypes.object,
  base: PropTypes.string,
  isSlug: PropTypes.bool,
  className: PropTypes.string,
};
