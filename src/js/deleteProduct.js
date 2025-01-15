import { connectionAPI } from "./connectionAPI.js";
  
function deleteProduct() {
  const buttonsDelete = document.querySelectorAll('.delete-product');
  
  buttonsDelete.forEach((button) => {
    button.addEventListener('click', async () => {
      const idProduct = button.dataset.idProduct;
      const confirmation = confirm(`¿Estás seguro de eliminar el producto con ID ${idProduct}?`);

      if (confirmation) {
        try {
          await connectionAPI.deleteProduct(idProduct); // Eliminamos en la API
        } catch(error) {
          alert(error);
        }
      }
    });
  });
}

export default deleteProduct;