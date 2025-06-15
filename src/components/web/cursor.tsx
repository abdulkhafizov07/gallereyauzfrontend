"use client";

import React, { useEffect } from "react";

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="fixed w-12 h-12 bg-transparent border border-gray-400 dark:border-gray-100 rounded-full -translate-1/2"
      style={{
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;
