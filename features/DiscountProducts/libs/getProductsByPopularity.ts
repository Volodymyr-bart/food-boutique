export const getProductsByDiscount = async () => {
    const url = `https://food-boutique.b.goit.study/api/products/discount`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Unable to fetch posts.");
    return response.json();
  };