import { getStrapiMedia } from "lib/media";

export const Image = ({ image, style, ...props }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <>
      <img
        src={imageUrl}
        alt={image?.alternativeText || image?.name}
        {...props}
      />
      <style jsx>{`
        img {
          margin: auto;
        }
      `}</style>
    </>
  );
};
