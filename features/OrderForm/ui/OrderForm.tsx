"use client";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { postOrder } from "../services/postOrder";
import { useCartProducts } from "@/store/stateCart";
import { shallow } from "zustand/shallow";

const validationSchema: Yup.Schema<{ email: string }> = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const OrderForm = () => {
  const { products } = useCartProducts(
    (state) => ({
      products: state.products,
    }),
    shallow
  );
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
      const response = await postOrder(data);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field
          type="email"
          name="email"
          placeholder="Email"
          className="h-12 rounded-30 border pl-4 py-3"
        />
        <ErrorMessage name="email" component="div" className="text-red-500" />
        <button
          type="submit"
          className="font-medium py-3 rounded-30 bg-secondaryWhite text-primaryBlack text-4 mobile:leading-4.5 tablet:leading-6"
        >
          Checkout
        </button>
      </Form>
    </Formik>
  );
};

export default OrderForm;
