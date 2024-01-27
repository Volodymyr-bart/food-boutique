const URL = process.env.NEXT_PUBLIC_API_URL;
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

  const response = await fetch(`${URL}/products?${queryParams}`);
  if (!response.ok) throw new Error("Unable to fetch products.");
  return response.json();
};

export const getProductById = async (id: string) => {
  const response = await fetch(`${URL}/products/${id}`);
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};

export const getProductCategories = async () => {
  const response = await fetch(`${URL}/products/categories`);
  if (!response.ok) throw new Error("Unable to fetch posts.");
  return response.json();
};
