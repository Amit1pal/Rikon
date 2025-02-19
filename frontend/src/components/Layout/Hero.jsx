import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Font Awesome Icons

const Hero = () => {
  return (
    <section className="relative w-full h-[300px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        className="h-full"
      >
        {/** Slides **/}
        {[1, 2, 3].map((num) => (
          <SwiperSlide key={num}>
            <div
              className="relative flex items-center justify-center w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=${num}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="relative text-center text-white px-6 max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Elevate Your Style
                </h1>
                <p className="mt-3 text-base md:text-lg">
                  Discover the latest trends in fashion and redefine your wardrobe today.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button className="swiper-button-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 ">
        <FaChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-black" />
      </button>
      <button className="swiper-button-next absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3">
        <FaChevronRight className="w-5 h-5 md:w-7 md:h-7 text-black" />
      </button>
    </section>
  );
};

export default Hero;
