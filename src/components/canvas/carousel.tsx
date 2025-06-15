"use client";

import React, { useEffect, useRef } from "react";

const images = [
  "/uploads/image0.png",
  "/uploads/image1.png",
  "/uploads/image2.png",
  "/uploads/image0.png",
  "/uploads/image1.png",
  "/uploads/image2.png",
];

const Carousel3D: React.FC = () => {
  const dragRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);

  const radius = 470;
  const autoRotate = true;
  const rotateSpeed = -60;

  const tX = useRef(0);
  const tY = useRef(10);
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
  }, []);

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
          {images.map((src, i) => (
            <div key={i} className="absolute select-none" data-type="image">
              <div className="aspect-[9/13] w-[210px]">
                <img
                  src={src}
                  alt={`img-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
