export const getAllProducts = async ({
  keyword = "",
  category = "",
  byABC = true,
  byPrice = true,
  byPopularity = true,
  page = 1,
  limit = 9,
}) => {
  const queryParams = new URLSearchParams({
    keyword,
    category,
    byABC: byABC.toString(),
    byPrice: byPrice.toString(),
    byPopularity: byPopularity.toString(),
    page: page.toString(),
    limit: limit.toString(),
  });
  const url = `https://food-boutique.b.goit.study/api/products?${queryParams}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to fetch products.");
  return response.json();
};

export const getProductById = async (id: string) => {
  const url = `https://food-boutique.b.goit.study/api/products/${id}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};
export const getProductsByDiscount = async () => {
  const url = `https://food-boutique.b.goit.study/api/products/discount`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};
export const getProductsByPopularity = async () => {
  const url = `https://food-boutique.b.goit.study/api/products/popular?limit=5`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};
export const getProductCategories = async () => {
  const url = `https://food-boutique.b.goit.study/api/products/categories`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};
