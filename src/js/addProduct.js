import { connectionAPI } from './connectionAPI.js';

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

  try {
    await connectionAPI.addProduct(name, price, image, description); // Agregamos en la API

    modal.close();
  } catch(error) {
    alert(error);
  }
});