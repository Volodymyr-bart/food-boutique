import { SubscriptionFormData } from "../types/formData";

export const postSubscription = async (values: SubscriptionFormData) => {
  const url = `https://food-boutique.b.goit.study/api/subscription`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};
