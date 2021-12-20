import { useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const CarouselContainer = ({
  array = [],
  view = 1,
  margin = 0,
  breakpoints = null,
  hideOnMobile = false,
}) => {
  SwiperCore.use([Navigation]);

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  return (
    <>
      <div ref={(node) => setPrevEl(node)} className="swiper-button-prev" />
      <div ref={(node) => setNextEl(node)} className="swiper-button-next" />
      <Swiper
        observer
        slidesPerView={!breakpoints ? view : null}
        slidesPerGroup={!breakpoints ? view : null}
        spaceBetween={!breakpoints ? margin : null}
        navigation={{ prevEl, nextEl }}
        breakpoints={breakpoints}
      >
        {array.map((item, idx) => {
          return <SwiperSlide key={idx}>{item}</SwiperSlide>;
        })}
      </Swiper>
      <style jsx global>{`
        .swiper-slide {
          align-self: center;
          justify-content: center;
          display: flex;
        }
        .swiper-button-next,
        .swiper-button-prev {
        }
        .swiper-button-next {
          right: ${(breakpoints || view > 1) ? "-40px" : "-10px"};
        }
        .swiper-button-prev {
          left: ${(breakpoints || view > 1) ? "-40px" : "-10px"};
        }
        @media screen and (max-width: 1023px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: ${hideOnMobile ? "none" : null};
          }
        }
      `}</style>
    </>
  );
};

export default CarouselContainer;
