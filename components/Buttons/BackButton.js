import { useRouter } from "next/router";
import { Images } from "public";

const BackButton = ({ ...props }) => {
  const router = useRouter();

  return (
    <>
      <img
        onClick={router.back}
        {...props}
        src={Images.generic.backArrow}
        alt="back arrow"
      />
      <style jsx>{`
        img {
          width: 40px;
          z-index: 1;
          top: 0;
          left: 0;
          padding: 5px;
          position: absolute;
          cursor: pointer;
        }

        .BackButton {

        }
      `}</style>
    </>
  );
};

export default BackButton;
