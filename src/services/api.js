export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(endPoint)
  const categories = await data.json()
  return categories;
}

export async function getProductsFromCategory(categoryId) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(endPoint);
  const data = response.json();
  return data;
}

export async function getProductById(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  const data = response.json();
  return data;
}