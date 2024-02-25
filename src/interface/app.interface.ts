export interface IProduct {
  uuid: string;
  category_name: string;
  product_main: ProductMain[];
  like: boolean;
  is_discount: boolean;
  price: number;
  discount_price: boolean;
  create_date: string;
  update_date: string;
  image: string;
  name: string;
  title: string;
  sub_title: string;
  content: string;
  img1: string;
  img2: string;
  img3: string;
  slug: string;
  top: boolean;
  category: string;
}

export interface ProductMain {
  uuid: string;
  color_name: string;
  size_name: string;
  product_data: ProductData;
  create_date: string;
  update_date: string;
  name?: string;
  count: number;
  price_selling: number;
  price_optimal: number;
  price_received: number;
  discount: any;
  image: string;
  post: boolean;
  barcode: string;
  product: string;
  color: string;
  size: string;
}

export interface ProductData {
  uuid: string;
  category_name: string;
  create_date: string;
  update_date: string;
  image: string;
  name: string;
  title: string;
  sub_title: string;
  content: string;
  img1: string;
  img2: string;
  img3: string;
  slug: string;
  top: boolean;
  category: string;
}
