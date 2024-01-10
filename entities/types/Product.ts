export type Product = {
  _id: string;
  name: string;
  category: string;
  size: string;
  popularity: number;
  price: number;
  img: string;
  is10PercentOff: boolean;
};
export type ProductInCart = Product & {
  quantity: number;
};
export type ProductDetail = Product & {
  desc: string;
};
