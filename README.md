<h1 align="center">AluraGeek</h1>

<p align="center">3er challenge de la formacion de Alura + Oracle (ONE)</p>

![image](https://github.com/user-attachments/assets/34a36a80-c0a9-452d-ae1e-371e95f24383)

---

## Tecnologías usadas
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Funcionalidades del Proyecto

- `Uso de API`: Se utiliza [mockapi.io](https://mockapi.io/) para la gestión de los productos a través de una API externa.

- `Leer, Crear, Buscar y Eliminar productos`:
  - La aplicación permite `leer` la lista de productos, `crear` nuevos productos, `buscar` productos por nombre, y `eliminar` productos existentes.
  - Las operaciones son realizadas mediante interacciones con la API, actualizando el contenido de la página sin necesidad de recargarla.

- `Actualización del DOM`:
  - Cada vez que se crea o elimina un producto, el DOM se actualiza dinámicamente, sin necesidad de recargar la página, lo que mejora la experiencia del usuario.

- `Búsqueda en tiempo real`:
  - La búsqueda de productos se realiza en tiempo real. Al ingresar un término en el campo de búsqueda, los productos relacionados se muestran automáticamente sin necesidad de recargar la página.

- `Manejo de Errores`:
  - Se implementa un manejo adecuado de errores al interactuar con la API para garantizar una experiencia fluida, mostrando mensajes cuando no se encuentran productos o cuando hay un problema con la conexión.

- `Componentización del código`:
  - El código está estructurado en componentes modulares.

- `Diseño adaptable`:
  - El diseño de la interfaz es completamente adaptable a diferentes tamaños de pantalla.

- `Experiencia de usuario`:
  - `Modal interactivo para agregar productos`: La funcionalidad de agregar productos se realiza a través de un modal, permitiendo al usuario agregar nuevos productos sin abandonar la vista actual.
