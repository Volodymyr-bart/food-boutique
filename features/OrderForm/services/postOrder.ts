export const postOrder = async (data: any) => {
  const url = `https://food-boutique.b.goit.study/api/orders`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};
