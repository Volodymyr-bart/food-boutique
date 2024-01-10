import { Product, ProductInCart } from "@/entities/types/Product";
import {
  getAllProducts,
  getProductCategories,
  getProductsByDiscount,
  getProductsByPopularity,
} from "@/services/getProducts";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
type useProducts = {
  productCategories: string[];
  products: Product[];
  popularityProducts: Product[];
  discountProducts: Product[];
  loading: boolean;
  totalPages: number;
  page: number;
  filters: {
    keyword: string;
    category: string;
    byABC: boolean;
    byPrice: boolean;
    byPopularity: boolean;
    page: number;
    limit: number;
  };
  getAllProducts: (params: {
    keyword?: string;
    category?: string;
    byABC?: boolean;
    byPrice?: boolean;
    byPopularity?: boolean;
    page?: number;
    limit?: number;
  }) => Promise<void>;
  getProductCategories: () => Promise<void>;
  getProductsByPopularity: () => Promise<void>;
  getProductsByDiscount: () => Promise<void>;
  changePage: (currentPage: number) => Promise<void>;
  setFilters: (newFilters: Partial<useProducts["filters"]>) => void;
};
export const useProducts = createWithEqualityFn<useProducts>()(
  (set) => ({
    productCategories: [],
    products: [],
    popularityProducts: [],
    discountProducts: [],
    loading: false,
    totalPages: 0,
    page: 0,
    filters: {
      keyword: "",
      category: "",
      byABC: true,
      byPrice: true,
      byPopularity: true,
      page: 1,
      limit: 9,
    },
    getAllProducts: async ({
      keyword = "",
      category = "",
      byABC = true,
      byPrice = true,
      byPopularity = true,
      page = 1,
      limit = 9,
    }) => {
      set({ loading: true });
      const res = await getAllProducts({
        keyword,
        category,
        byABC,
        byPrice,
        byPopularity,
        page,
        limit,
      });
      set({
        products: res.results,
        loading: false,
        page: res.page,
        totalPages: res.totalPages,
      });
    },
    changePage: async (currentPage: number) => {
      set({ loading: true });
      const currentState = useProducts.getState();
      const res = await getAllProducts({
        keyword: currentState.filters.keyword,
        category: currentState.filters.category,
        byABC: currentState.filters.byABC,
        byPrice: currentState.filters.byPrice,
        byPopularity: currentState.filters.byPopularity,
        page: currentPage,
        limit: currentState.filters.limit,
      });
      set({
        products: res.results,
        loading: false,
        page: res.page,
        totalPages: res.totalPages,
      });
    },
    getProductsByPopularity: async () => {
      set({ loading: true });
      const res = await getProductsByPopularity();
      set({
        popularityProducts: res,
        loading: false,
      });
    },
    getProductsByDiscount: async () => {
      set({ loading: true });
      const res = await getProductsByDiscount();
      set({
        discountProducts: res,
        loading: false,
      });
    },
    getProductCategories: async () => {
      const res = await getProductCategories();
      set({
        productCategories: res,
      });
    },

    setFilters: (newFilters) =>
      set((state) => ({ filters: { ...state.filters, ...newFilters } })),
  }),
  shallow
);

type useCartProducts = {
  products: ProductInCart[];
  addProductToCart: (item: any) => void;
  clearCart: () => void;
  deleteProductFromCart: (productId: string) => void;
  incrementQuantityProduct: (productId: string) => void;
  decrementQuantityProduct: (productId: string) => void;
};

export const useCartProducts = createWithEqualityFn<useCartProducts>()(
  (set) => ({
    products: [],
    addProductToCart: (item: Product) => {
      const currentState = useCartProducts.getState();
      const existingProduct = currentState.products.find(
        (product) => product._id === item._id
      );
      if (existingProduct) {
        set((state) => ({
          products: state.products.map((product) =>
            product._id === item._id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        }));
      } else {
        set((state) => ({
          products: [...state.products, { ...item, quantity: 1 }],
        }));
      }
    },
    clearCart: () => {
      set(() => ({
        products: [],
      }));
    },
    deleteProductFromCart: (productId: string) => {
      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
      }));
    },
    incrementQuantityProduct: (productId: string) => {
      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      }));
    },
    decrementQuantityProduct: (productId: string) => {
      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId
            ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
            : product
        ),
      }));
    },
  }),
  shallow
);


