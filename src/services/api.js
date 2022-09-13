export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const api = await fetch(url);
  const json = await api.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const api = await fetch(url);
  const json = await api.json();
  return json;
}

export async function getProductById(id) {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const api = await fetch(url);
  const json = await api.json();
  return json;
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
