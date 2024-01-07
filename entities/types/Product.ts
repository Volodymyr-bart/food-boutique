export type Product = {
  _id: string;
  name: string;
  category: string;
  size: string;
  popularity: number;
  price: number;
  img: string;
};
export type ProductInCart = Product & {
  quantity: number;
};
