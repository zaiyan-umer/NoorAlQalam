export interface Painting {
  title: string;
  description?: string;
  category: string;
  imgUrl: string;
  price?: string;
  images?: string[];
  isFeatured: boolean;
}
