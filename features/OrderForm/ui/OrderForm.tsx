"use client";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postOrder } from "../services/postOrder";
import { useCartProducts } from "@/store/stateCart";
import { shallow } from "zustand/shallow";
import Modal from "@/shared/Modal/ui/Modal";
import { useThemeStore } from "@/store/theme";

const validationSchema: Yup.Schema<{ email: string }> = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const OrderForm = () => {
  const { products, clearCart } = useCartProducts(
    (state) => ({
      products: state.products,
      clearCart: state.clearCart,
    }),
    shallow
  );
  const { openModal, isModalOpen } = useThemeStore(
    (state) => ({
      isModalOpen: state.isModalOpen,
      openModal: state.openModal,
    }),
    shallow
  );

  const handleSuccessModalOpen = () => {
    openModal();
  };

  const handleCloseModal = () => {
    clearCart();
  };

  const handleErrorModalOpen = () => {
    openModal();
  };

  const handleSubmit = async (
    values: { email: string },
    { resetForm, setSubmitting }: any
  ) => {
    try {
      const transformProducts = products.reduce((acc, el) => {
        const obj = {
          productId: el._id,
          amount: el.amount,
        };
        acc.push(obj);
        return acc;
      }, [] as { productId: string; amount: number }[]);
      const data = {
        email: values.email,
        products: transformProducts,
      };
      await postOrder(data);

      resetForm();
      handleSuccessModalOpen();
    } catch (error) {
      console.error("Error submitting form:", error);
      handleErrorModalOpen();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col tablet:flex-row items-center gap-4 tablet:max-w-[590px]">
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full h-12 rounded-30 border pl-4 py-3"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <button
            type="submit"
            className="font-medium rounded-30 text-primaryWhite text-4 mobile:leading-4.5 tablet:leading-6 px-[65px] py-[15px] bg-primaryGreen"
          >
            Checkout
          </button>
        </Form>
      </Formik>
      <Modal onClose={handleCloseModal}>
        <div className="my-auto flex flex-col gap-5 text-center">
          <h3 className="font-medium text-8 leading-8 text-primaryBlack">
            Order success
          </h3>
          <p className="text-4.5 leading-6">
            Thank you for shopping at Food Boutique. Your order has been
            received and is now being freshly prepared just for you! Get ready
            to indulge in nourishing goodness, delivered right to your doorstep.
            We&apos;re thrilled to be part of your journey to better health and
            happiness.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default OrderForm;
