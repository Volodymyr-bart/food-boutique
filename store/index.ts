import { getAllProducts, getProductsBySearch } from "@/services/getProducts";
import { create } from "zustand";
type useProducts = {
  products: any[];
  loading: boolean;
  totalPages: number;
  page: number;
  getAllProducts: () => Promise<void>;
  getProductsBySearch: (value: string) => Promise<void>;
};
export const useProducts = create<useProducts>()((set) => ({
  products: [],
  loading: false,
  totalPages: 0,
  page: 0,
  getAllProducts: async () => {
    set({ loading: true });
    const { results, page, totalPages } = await getAllProducts();
    set({ products: results, loading: false, page, totalPages });
  },
  getProductsBySearch: async (value: string) => {
    set({ loading: true });
    const products = await getProductsBySearch(value);
    set({ products, loading: false });
  },
}));
