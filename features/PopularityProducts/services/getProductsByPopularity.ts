export const getProductsByPopularity = async () => {
    const url = `https://food-boutique.b.goit.study/api/products/popular?limit=5`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Unable to fetch posts.");
    return response.json();
  };