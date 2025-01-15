import { connectionAPI } from "./connectionAPI.js";
  
function deleteProduct() {
  const buttonsDelete = document.querySelectorAll('.delete-product');
  
  buttonsDelete.forEach((button) => {
    button.addEventListener('click', async () => {
      const idProduct = button.dataset.idProduct;
      const confirmation = confirm(`¿Estás seguro de eliminar el producto con ID ${idProduct}?`);

      if (confirmation) {
        try {
          const products = await connectionAPI.listProducts(); // Listamos de la API
          await connectionAPI.deleteProduct(idProduct); // Eliminamos en la API

          // Eliminamos el producto del DOM
          const article = button.closest('article');
          article.remove();

          if (products.length === 1) {
            const defaultContent = document.querySelector('#default-content');
            defaultContent.classList.remove('hidden');
          }
        } catch(error) {
          alert(error.message);
        }
      }
    });
  });
}

export default deleteProduct;