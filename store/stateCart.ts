import { Product, ProductInCart } from "@/entities/types/Product";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type useCartProducts = {
  products: ProductInCart[];
  addProductToCart: (item: Product) => void;
  clearCart: () => void;
  // hydrate: () => void;
  deleteProductFromCart: (productId: string) => void;
  incrementQuantityProduct: (productId: string) => void;
  decrementQuantityProduct: (productId: string) => void;
};

// export const useCartProducts = createWithEqualityFn<useCartProducts>()(
//   (set) => {
//     let savedState = { products: [] };
//     if (typeof window !== "undefined") {
//       const savedStateString = localStorage.getItem("cartProducts");
//       savedState = savedStateString
//         ? JSON.parse(savedStateString)
//         : { products: [] };
//     }

//     return {
//       products: savedState.products || [],
//       addProductToCart: (item: Product) => {
//         set((state) => {
//           const existingProduct = state.products.find(
//             (product) => product._id === item._id
//           );
//           if (existingProduct) {
//             return {
//               products: state.products.map((product) =>
//                 product._id === item._id
//                   ? { ...product, amount: product.amount + 1 }
//                   : product
//               ),
//             };
//           } else {
//             return {
//               products: [...state.products, { ...item, amount: 1 }],
//             };
//           }
//         });
//       },
//       clearCart: () => {
//         set(() => ({
//           products: [],
//         }));
//       },
//       deleteProductFromCart: (productId: string) => {
//         set((state) => ({
//           products: state.products.filter(
//             (product) => product._id !== productId
//           ),
//         }));
//       },
//       incrementQuantityProduct: (productId: string) => {
//         set((state) => ({
//           products: state.products.map((product) =>
//             product._id === productId
//               ? { ...product, amount: product.amount + 1 }
//               : product
//           ),
//         }));
//       },
//       decrementQuantityProduct: (productId: string) => {
//         set((state) => ({
//           products: state.products.map((product) =>
//             product._id === productId
//               ? { ...product, amount: Math.max(product.amount - 1, 0) }
//               : product
//           ),
//         }));
//       },
//     };
//   },
//   shallow
// );

// Слідкуємо за змінами стану і оновлюємо localStorage при кожній зміні
// useCartProducts.subscribe((state) => {
//   localStorage.setItem(
//     "cartProducts",
//     JSON.stringify({ products: state.products })
//   );
// });
export const useCartProducts = createWithEqualityFn<useCartProducts>()(
  (set) => ({
    products: [],
    addProductToCart: (item: Product) => {
      set((state) => {
        const existingProduct = state.products.find(
          (product) => product._id === item._id
        );
        if (existingProduct) {
          return {
            products: state.products.map((product) =>
              product._id === item._id
                ? { ...product, amount: product.amount + 1 }
                : product
            ),
          };
        } else {
          return {
            products: [...state.products, { ...item, amount: 1 }],
          };
        }
      });
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
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      }));
    },
    decrementQuantityProduct: (productId: string) => {
      set((state) => ({
        products: state.products.map((product) =>
          product._id === productId
            ? { ...product, amount: Math.max(product.amount - 1, 0) }
            : product
        ),
      }));
    },
  }),
  shallow
);
