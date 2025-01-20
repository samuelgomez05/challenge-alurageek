const url = 'https://67870174c4a42c916105610e.mockapi.io/alura/products';

async function listProducts() {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

async function addProduct(name, price, image, description) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-type':'application/json'},
    body: JSON.stringify({
      name: name,
      price: price,
      image: image,
      description: description,
    })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error('¡Ha ocurrido un error al agregar el producto!');
  }

  return data;
}

async function searchProduct(keyword) {
  const response = await fetch(`${url}?name=${keyword}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`No se encontraron productos para '${keyword}'`);
  }

  return data;
}

async function deleteProduct(id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error('¡Ha ocurrido un error al eliminar el producto!');
  }

  return data;
}

export const connectionAPI = {
  listProducts,
  addProduct,
  searchProduct,
  deleteProduct
}; // exportamos las funciones como propiedades de connectionAPI