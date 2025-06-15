"use client";

import React from "react";
import Carousel3D from "../canvas/carousel";
import { useThemeContext } from "@/hooks/theme";

export const HeroSection = () => {
  const { isDark } = useThemeContext();

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
    </>
  );
};
