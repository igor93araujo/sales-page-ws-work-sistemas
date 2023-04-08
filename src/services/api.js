export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(endPoint)
  const categories = await data.json()
  return categories;
}
