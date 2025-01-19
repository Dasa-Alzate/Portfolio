import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import Lightbox from "./Lightbox";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Carrousel({ images }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsLightboxOpen(true);
  };

  return (
    <div className="carousel h-full overflow-hidden self-auto">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img
              className="cursor-pointer w-full"
              src={image}
              alt={`Image ${i + 1}`}
              loading="lazy"
              onClick={() => openLightbox(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isLightboxOpen && (
        <Lightbox
          image={currentImage}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
}

export default Carrousel;
