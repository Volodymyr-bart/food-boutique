export const getAllProducts = async () => {
  const response = await fetch(
    "https://food-boutique.b.goit.study/api/products"
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getProductsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
