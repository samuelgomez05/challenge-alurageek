import { connectionAPI } from './connectionAPI.js';
import deleteProduct from './deleteProduct.js';

function createCard(id, name, price, image, description) {
  const card = document.createElement('article');
  card.className = 'flex flex-col gap-3 p-3 bg-white border border-[#d6d6d6] rounded-md shadow-xl';
  card.innerHTML = `
    <figure class="w-full p-2 rounded-md aspect-square overflow-hidden">
      <img class="size-full object-contain aspect-square" src="${image}" alt="${name}" loading="lazy">
    </figure>
    <h3 class="font-semibold text-gray-900 line-clamp-2">${name}</h3>
    <p class="text-sm text-gray-700 line-clamp-4">${description}</p>
    <div class="flex gap-4 justify-between items-center mt-auto">
      <p class="font-semibold text-gray-900">$ ${price.toFixed(2)}</p>
      <button class="delete-product btn-secondary py-1 px-2" type="button" aria-label="Eliminar producto" data-id-product="${id}">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z"/><path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>
      </button>
    </div>
  `;

  return card;
}

async function listProducts() {
  const containerCards = document.querySelector('#container-cards');

  try {
    const products = await connectionAPI.listProducts(); // Listamos de la API

    if (products.length > 0) {
      const defaultContent = containerCards.querySelector('#default-content');
      defaultContent.classList.add('hidden');

      products.forEach((product) => {
        containerCards.appendChild(
          createCard(product.id, product.name, product.price, product.image, product.description)
        );
      });

      deleteProduct(); // Ejecutamos la logica para eliminar
    }
  } catch {
    containerCards.innerHTML = `
    <p class="col-span-full text-lg font-semibold text-center text-gray-900">
      <img class="size-full max-h-80 mx-auto aspect-square" src="../../src/assets/img/illustration-bug-fixing.svg" alt="Ha ocurrido un problema con la conexión a la API">
      Ha ocurrido un problema con la conexión a la API :(
    </p>`;
  }
}

listProducts();

export default createCard;