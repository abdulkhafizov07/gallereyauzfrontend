"use client";

import {useThemeContext} from "@/hooks/theme";
import Image from "next/image";

// Image detail page
export default function Page() {
  const {isDark} = useThemeContext();

  return (
    <>
      <section id="image" className="w-full">
        <div
          className="w-full min-h-screen pt-32 pb-4 flex items-center justify-center bg-white dark:bg-black bg-[contain auto] bg-repeat-x transition-colors duration-200 ease-in"
          style={{
            backgroundImage: `url(/assets/images/hero${isDark ? "" : "-light"
              }.png)`,
          }}
        >
          <div className="relative container h-full mx-auto px-4 z-10">
            <div className="h-[80vh] aspect-[16/9]">
              <Image src={"/uploads/intro/image1.png"} alt="Rasm topilmadi" fill className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

