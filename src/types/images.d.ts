interface ImageType {
  guid: string;
  name: string;
  short_description: string;
  description: string;
  image: string;
  tags: string[];
  likes?: number;
  created_at: string;
  updated_at: string;
}

interface ImagesContextType {
  introImages: ImageType[];
  digitalImages: ImageType[];
  imagesLoading: boolean;
}
