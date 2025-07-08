"use client";

import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/hooks/theme";
import { ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const ImageDetailsComponent: React.FC<ImageDetailsComponentProps> = ({
  data,
}) => {
  const { isDark } = useThemeContext();

  return (
    <>
      <section id="image" className="w-full">
        <div
          className="w-full min-h-screen pt-32 pb-4 bg-white dark:bg-black bg-[contain auto] bg-repeat-x transition-colors duration-200 ease-in"
          style={{
            backgroundImage: `url(/assets/images/hero${
              isDark ? "" : "-light"
            }.png)`,
          }}
        >
          <div className="container h-full mx-auto px-4 z-10">
            <div className="relative w-full 2xl:max-w-11/12 aspect-[16/9] mx-auto select-none drop-shadow-xl drop-shadow-black/12 dark:drop-shadow-white/12 transition-colors duration-200 ease-in">
              <Image
                src={data.image}
                alt="Rasm topilmadi"
                fill
                priority
                className="relative w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <h3 className="text-3xl font-bold">{data.name}</h3>

              <Button variant={"ghost"} size={"lg"}>
                {data.likes}
                <ThumbsUpIcon className="h-12" />
              </Button>
            </div>

            <div className="w-full h-auto mt-4">
              <Button size={"lg"} className="w-full">3D xonada tomosha qilish</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
