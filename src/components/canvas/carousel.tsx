"use client";

import { useImagesContext } from "@/context/images";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Carousel3D: React.FC = () => {
  const { introImages } = useImagesContext();
  const t = useTranslations("hero");

  const dragRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);

  const radius = 470;
  const autoRotate = true;
  const rotateSpeed = -60;

  const tX = useRef(0);
  const desX = useRef(0);
  const rafId = useRef<number>(0);

  const applyTransform = () => {
    if (!dragRef.current) return;

    dragRef.current.style.transform = `rotateX(-10deg) rotateY(${tX.current}deg)`;
  };

  const inertia = () => {
    desX.current *= 0.95;
    tX.current += desX.current * 0.1;
    applyTransform();
    if (Math.abs(desX.current) > 0.5) {
      rafId.current = requestAnimationFrame(inertia);
    }
  };

  useEffect(() => {
    const spinEl = spinRef.current;
    const dragEl = dragRef.current;
    if (!spinEl || !dragEl) return;

    const items = Array.from(spinEl.children).filter(
      (value) => value.getAttribute("data-type") === "image"
    ) as HTMLElement[];
    let currentRadius = radius;

    items.forEach((item, i) => {
      const angle = (360 / items.length) * i;
      item.style.transform = `rotateY(${angle}deg) translateZ(${currentRadius}px)`;
      item.style.transition = `transform 1s`;
      item.style.transitionDelay = `${(items.length - i) / 4}s`;
    });

    if (autoRotate) {
      spinEl.style.animation = `${
        rotateSpeed > 0 ? "spin" : "spinRevert"
      } ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    let startX = 0;

    const onPointerDown = (e: PointerEvent) => {
      cancelAnimationFrame(rafId.current!);
      startX = e.clientX;

      const onMove = (e: PointerEvent) => {
        const dx = e.clientX - startX;
        desX.current = dx;
        tX.current += dx * 0.1;

        applyTransform();

        startX = e.clientX;
      };

      const onUp = () => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerup", onUp);
        rafId.current = requestAnimationFrame(inertia);
      };

      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onUp);
    };

    dragEl.addEventListener("pointerdown", onPointerDown);

    return () => {
      dragEl.removeEventListener("pointerdown", onPointerDown);
      cancelAnimationFrame(rafId.current!);
    };
  }, [introImages]);

  return (
    <div className="w-full h-[500px] flex items-center justify-center perspective-[1000px]">
      <div
        ref={dragRef}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(-10deg)",
        }}
      >
        <div
          ref={spinRef}
          className="absolute w-[210px] aspect-[9/13] top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {introImages.map((image, i) => (
            <div
              key={i}
              className="absolute group select-none shadow-lg shadow-gray-800/15 dark:shadow-gray-500/15 overflow-hidden rounded-lg"
              data-type="image"
            >
              <div className="aspect-[9/13] w-[210px]">
                <Image
                  src={image.image}
                  alt={image.name}
                  className="w-full h-full object-cover"
                  width={1366}
                  height={786}
                />
              </div>

              <div className="absolute w-full h-auto p-3 bg-white/60 dark:bg-black/60 backdrop-blur-xl top-full group-hover:-translate-y-full transition-all duration-200 ease-in">
                <h1 className="text-xl font-semibold">{image.name}</h1>
                <p className="mb-2 text-sm">{image.short_description}</p>

                <Button asChild size="sm" className="w-full">
                  <a href={`/images/${image.guid}/`}>{t("open image")}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
