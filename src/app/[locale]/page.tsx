"use client";

import React from "react";
import Carousel3D from "@/components/canvas/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useThemeContext } from "@/hooks/theme";
import { useImagesContext } from "@/context/images";
import Image from "next/image";

export default function Page() {
  const { isDark } = useThemeContext();
  const { digitalImages } = useImagesContext();

  return (
    <>
      <section id="hero" className="w-full">
        <div
          className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black bg-[contain auto] bg-repeat-x transition-colors duration-200 ease-in"
          style={{
            backgroundImage: `url(/assets/images/hero${
              isDark ? "" : "-light"
            }.png)`,
          }}
        >
          <div className="w-full max-w-[800px] aspect-[16/9] relative z-10">
            <Carousel3D />
          </div>
        </div>
      </section>

      <div className="absolute top-12 left-6 w-82 h-82 bg-[#5300CE52] blur-[256px] rounded-full z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-46 h-46 bg-[#0286d271] blur-[120px] rounded-full z-0 -translate-1/2"></div>
      <div className="absolute bottom-0 right-0 w-46 h-46 bg-[#00ce5226] blur-[120px] rounded-full z-0"></div>
      <div className="absolute top-full left-1/2 w-46 h-46 bg-[#5200ce7b] blur-[120px] rounded-full z-0 -translate-x-1/2 translate-y-1/2"></div>

      <section
        id="digital-art"
        className="py-14 bg-white dark:bg-black transition-colors duration-200 ease-in"
      >
        <div className="container relative mx-auto z-10">
          <div className="section-title">
            <h1 className="text-5xl text-center font-whyte-inktrap font-bold tracking-wide leading-[3rem]">
              Raqamli dizayn
            </h1>
          </div>

          <div className="section-content py-16">
            <Swiper
              effect={"coverflow"}
              slidesPerView={3}
              spaceBetween={32}
              centeredSlides={true}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 256,
                modifier: 1.2,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination]}
              loop
              autoplay
              className="!pb-14"
            >
              {digitalImages.map((value, index) => (
                <>
                  <SwiperSlide key={index}>
                    <div className="relative select-none rounded-xl overflow-hidden">
                      <div className="aspect-square">
                        <Image
                          src={value.image}
                          alt=""
                          fill
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
