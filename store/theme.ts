import { createWithEqualityFn } from "zustand/traditional";

type useThemeStore = {
  productId: string | null;
  isModalOpen: boolean;
  openModal: (productId: string) => void;
  closeModal: () => void;
};

export const useThemeStore = createWithEqualityFn<useThemeStore>((set) => ({
  productId: "",
  isModalOpen: false,
  openModal: (productId) => set({ isModalOpen: true, productId }),
  closeModal: () => set({ isModalOpen: false, productId: null }),
}));
