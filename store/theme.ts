import { createWithEqualityFn } from "zustand/traditional";

type useThemeStore = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  productId: string | null;
  setProductId: (productId: string) => void;
  clearProductId: () => void;
};

export const useThemeStore = createWithEqualityFn<useThemeStore>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  productId: "",
  setProductId: (productId) => set({productId }),
  clearProductId: () => set({ productId: null }),
}));
