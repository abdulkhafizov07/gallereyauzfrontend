"use client";

import React from "react";
import Carousel3D from "../canvas/carousel";
import { useThemeContext } from "@/hooks/theme";

export const HeroSection = () => {
  const { isDark } = useThemeContext();

  return (
    <section id="hero" className="w-full">
      <div
        className="w-full min-h-screen flex items-center justify-center bg-black bg-[contain auto] bg-repeat-x"
        style={{
          backgroundImage: `url(/assets/images/hero${
            isDark ? "" : "-light"
          }.png)`,
        }}
      >
        <div className="w-full max-w-[800px] aspect-[16/9] relative">
          <Carousel3D />
        </div>
      </div>
    </section>
  );
};
