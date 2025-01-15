import { connectionAPI } from './connectionAPI.js';
import createCard from './listProducts.js';

const search = document.querySelector('#search');
const keyword = document.querySelector('#keyword');

search.addEventListener('submit', (e) => {
  e.preventDefault();
});

keyword.addEventListener('input', async (e) => {
  e.preventDefault();

  const containerCards = document.querySelector('#container-cards');
  const keywordValue = keyword.value.toLowerCase();
  const products = await connectionAPI.searchProduct(keywordValue); // Buscamos en la API

  // Eliminamos el primer hijo si tiene en cada iteracion, dejando al final vacio el contenedor
  while (containerCards.firstChild) {
    containerCards.removeChild(containerCards.firstChild);
  }

  // Agregamos solo los productos que coinciden al contenedor
  products.forEach((product) => {
    containerCards.appendChild(
      createCard(product.id, product.name, product.price, product.image)
    );
  });

  if (products.length === 0) {
    containerCards.innerHTML = `
    <p class="col-span-full text-lg font-semibold text-center text-gray-900">
      <img class="size-full max-h-80 mx-auto aspect-square" src="../../src/assets/img/illustration-search-engine.svg" alt="No se encontraron productos">
      No se encontraron productos para '${keywordValue}'
    </p>`;
  }
});