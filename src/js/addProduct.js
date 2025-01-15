import { connectionAPI } from './connectionAPI.js';
import createCard from './listProducts.js';
import deleteProduct from './deleteProduct.js';

const modal = document.querySelector('#modal');
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const form = document.querySelector('#form');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const inputPrice = parseFloat(document.querySelector('#price').value).toFixed(2);
  const price = parseFloat(inputPrice);
  const image = document.querySelector('#image').value;
  const description = document.querySelector('#description').value;

  // Obtenemos el id  del ultimo producto para continuar con el siguiente y agregar correctamente al DOM
  const products = await connectionAPI.listProducts();
  const id = products.length > 0 ? parseInt(products.at(-1).id) + 1 : 1;

  try {
    await connectionAPI.addProduct(name, price, image, description); // Agregamos en la API

    if (products.length === 0) {
      const defaultContent = document.querySelector('#default-content');
      defaultContent.classList.add('hidden');
    }

    const containerCards = document.querySelector('#container-cards');
    
    // Agregamos el producto al DOM
    containerCards.appendChild(
      createCard(id, name, price, image, description)
    );

    deleteProduct(); // Ejecutamos la logica para eliminar

    modal.close();

    form.reset();
  } catch(error) {
    alert(error.message);
  }
});