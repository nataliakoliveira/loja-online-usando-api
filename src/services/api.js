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

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
