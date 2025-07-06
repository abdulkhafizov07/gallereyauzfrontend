"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ImagesContext = createContext<ImagesContextType>({
  introImages: [],
  digitalImages: [],
  imagesLoading: false,
});

export const ImagesProvider = ({ children }: { children: React.ReactNode }) => {
  const [introImages, setIntroImages] = useState<ImageType[]>([]);
  const [digitalImages, setDigitalImages] = useState<ImageType[]>([]);
  const [imagesLoading, setImagesLoading] = useState(true);

  useEffect(() => {
    setImagesLoading(true);
    setIntroImages([
      {
        guid: "4f433d37-060d-4e8d-9b04-c1486866032c",
        image: "/uploads/intro/image0.png",
        name: "Image 1",
        short_description: "Description for Image 1",
        description: "Detailed description for Image 1",
        tags: ["nature"],
        created_at: "2024-01-29T00:00:00",
        updated_at: "2024-01-31T00:00:00",
      },
      {
        guid: "9f596238-130f-4f10-866e-81519dc11645",
        image: "/uploads/intro/image1.png",
        name: "Image 2",
        short_description: "Description for Image 2",
        description: "Detailed description for Image 2",
        tags: ["architecture"],
        created_at: "2024-06-23T00:00:00",
        updated_at: "2024-07-23T00:00:00",
      },
      {
        guid: "3271490c-3707-4546-b0d7-b35e55c4b52a",
        image: "/uploads/intro/image2.png",
        name: "Image 3",
        short_description: "Description for Image 3",
        description: "Detailed description for Image 3",
        tags: ["abstract", "nature", "portrait"],
        created_at: "2024-10-21T00:00:00",
        updated_at: "2024-10-31T00:00:00",
      },
      {
        guid: "315fd8cd-d235-4ff0-908d-2d4f308f72ac",
        image: "/uploads/intro/image3.png",
        name: "Image 4",
        short_description: "Description for Image 4",
        description: "Detailed description for Image 4",
        tags: ["abstract", "nature", "portrait"],
        created_at: "2024-04-21T00:00:00",
        updated_at: "2024-04-30T00:00:00",
      },
      {
        guid: "eefc1b1b-6cb7-47f6-b40c-4976937c544b",
        image: "/uploads/intro/image4.png",
        name: "Image 5",
        short_description: "Description for Image 5",
        description: "Detailed description for Image 5",
        tags: ["city", "architecture", "nature"],
        created_at: "2024-05-30T00:00:00",
        updated_at: "2024-06-26T00:00:00",
      },
      {
        guid: "ddaa25c3-7281-4b8e-bd0a-9820ecbac3f9",
        image: "/uploads/intro/image5.png",
        name: "Image 6",
        short_description: "Description for Image 6",
        description: "Detailed description for Image 6",
        tags: ["city", "animals"],
        created_at: "2024-11-08T00:00:00",
        updated_at: "2024-11-16T00:00:00",
      },
      {
        guid: "ddaa25c3-7281-4b8e-bd0a-9820ecbac3f9",
        image: "/uploads/intro/image0.png",
        name: "Image 7",
        short_description: "Description for Image 7",
        description: "Detailed description for Image 7",
        tags: ["city", "animals"],
        created_at: "2024-11-08T00:00:00",
        updated_at: "2024-11-16T00:00:00",
      },
      {
        guid: "ddaa25c3-7281-4b8e-bd0a-9820ecbac3f9",
        image: "/uploads/intro/image1.png",
        name: "Image 8",
        short_description: "Description for Image 8",
        description: "Detailed description for Image 8",
        tags: ["city", "animals"],
        created_at: "2024-11-08T00:00:00",
        updated_at: "2024-11-16T00:00:00",
      },
    ]);

    setDigitalImages([
      {
        guid: "4f433d37-060d-4e8d-9b04-c1486866032c",
        image: "/uploads/intro/image0.png",
        name: "Image 1",
        short_description: "Description for Image 1",
        description: "Detailed description for Image 1",
        tags: ["nature"],
        created_at: "2024-01-29T00:00:00",
        updated_at: "2024-01-31T00:00:00",
      },
      {
        guid: "9f596238-130f-4f10-866e-81519dc11645",
        image: "/uploads/intro/image1.png",
        name: "Image 2",
        short_description: "Description for Image 2",
        description: "Detailed description for Image 2",
        tags: ["architecture"],
        created_at: "2024-06-23T00:00:00",
        updated_at: "2024-07-23T00:00:00",
      },
      {
        guid: "3271490c-3707-4546-b0d7-b35e55c4b52a",
        image: "/uploads/intro/image2.png",
        name: "Image 3",
        short_description: "Description for Image 3",
        description: "Detailed description for Image 3",
        tags: ["abstract", "nature", "portrait"],
        created_at: "2024-10-21T00:00:00",
        updated_at: "2024-10-31T00:00:00",
      },
      {
        guid: "315fd8cd-d235-4ff0-908d-2d4f308f72ac",
        image: "/uploads/intro/image3.png",
        name: "Image 4",
        short_description: "Description for Image 4",
        description: "Detailed description for Image 4",
        tags: ["abstract", "nature", "portrait"],
        created_at: "2024-04-21T00:00:00",
        updated_at: "2024-04-30T00:00:00",
      },
      {
        guid: "eefc1b1b-6cb7-47f6-b40c-4976937c544b",
        image: "/uploads/intro/image4.png",
        name: "Image 5",
        short_description: "Description for Image 5",
        description: "Detailed description for Image 5",
        tags: ["city", "architecture", "nature"],
        created_at: "2024-05-30T00:00:00",
        updated_at: "2024-06-26T00:00:00",
      },
      {
        guid: "ddaa25c3-7281-4b8e-bd0a-9820ecbac3f9",
        image: "/uploads/intro/image5.png",
        name: "Image 6",
        short_description: "Description for Image 6",
        description: "Detailed description for Image 6",
        tags: ["city", "animals"],
        created_at: "2024-11-08T00:00:00",
        updated_at: "2024-11-16T00:00:00",
      },
      {
        guid: "ddaa25c3-7281-4b8e-bd0a-9820ecbac3f9",
        image: "/uploads/intro/image0.png",
        name: "Image 7",
        short_description: "Description for Image 7",
        description: "Detailed description for Image 7",
        tags: ["city", "animals"],
        created_at: "2024-11-08T00:00:00",
        updated_at: "2024-11-16T00:00:00",
      },
      {
        guid: "ddaa25c3-7281-4b8e-bd0a-9820ecbac3f9",
        image: "/uploads/intro/image1.png",
        name: "Image 8",
        short_description: "Description for Image 8",
        description: "Detailed description for Image 8",
        tags: ["city", "animals"],
        created_at: "2024-11-08T00:00:00",
        updated_at: "2024-11-16T00:00:00",
      },
    ]);
    setImagesLoading(false);
  }, []);

  return (
    <ImagesContext.Provider
      value={{ introImages, digitalImages, imagesLoading }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export const useImagesContext = () => {
  const context = useContext(ImagesContext);
  if (!context) {
    throw new Error("useImagesContext must be used within a ImagesProvider");
  }
  return context;
};
