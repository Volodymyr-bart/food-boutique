"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SubscriptionFormData } from "../types/formData";
import { postSubscription } from "../libs/postSubscription";

const validationSchema: Yup.Schema<SubscriptionFormData> = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

const SubscribeForm: React.FC = () => {
  const handleSubmit = async (
    values: SubscriptionFormData,
    { resetForm, setSubmitting }: any
  ) => {
    try {
      const response = await postSubscription(values);
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
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-[336px] flex flex-col gap-5">
          <h3 className="mobile:text-3.5 mobile:leading-4.5 text-primaryWhite">
            Subscribe and learn about new products!
          </h3>
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
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SubscribeForm;
