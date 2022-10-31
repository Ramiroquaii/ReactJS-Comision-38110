# REACT JS - Comision - 38110
Coder House - Curso React JS

*Alumno:* **RAMIRO O. VECHIOLA**

*Profesor:* **FELIX BLANCO**


# Proyecto Final
DOMINGO 30/10/2022 00:00hs

Simulación de un comercio electrónico, no se implemento login o autenticación simplemente se solicitan datos personales para finalizar un pedido u orden de compra impactando estos datos junto con los productos seleccionados y total de precion en la base de daros no relacional FIREBASE obtenido el identificador de la transacción.
- **Se actualiza el stock de productos disponibles con cada orden de compra generada.**
- **Se validan las cantidade tope por limite de stock**
- **Ningún numeradores de cantidad puede ser < 0**

# COMPONENTES:

## NavBar
Barra de navegacion de aplicacion y simulacion de pagina tradicional por secciones:
Home - Pagina de inicio, bienvenida.
Productos - Pagina principal de la APP.
Nosotros - Simulación para agregar contenido posteriormente.
Contacto - Simulación para agregar contenido posteriormente.
Ubicacion - implementacion de iframe con mapa google.

## CartWidget
Contador de items seleccionados para comprar (de 0 a N - no puede ser < 0), ademas se muestra imagen ilustrativa de referencia que mustra si existen o no elementos seleccionados.

## Footer
Pie de pagina con links externos a redes sociales de contacto.

## Loader
Elemento para representar tiempos de espera o darilusion de trabajo mientras se carga contenido.

## ProductCard
Caja contenedora para mostras productos.

## ProductListContainer
Componente que renderiza la lista de productos disponibles luego de consultas Firebase. Permite resolver la agrupación por categorias de los productos.

## ProductDetailContainer
Componente que renderiza la información completa y detallada del producto seleccionado y permite agregar los productos al carrito dependiendo de la disponibilidad de stock.

## ProductCardTicket
Componente que muestra el producto contenido en el carrito, lista los productos seleccionados con sus cantidades ademas de totalizar el precio unitario y total. Ademas permite modificar simando o restando mas unidades de cada producto seleccionado.

---

# CONTEXTO:
## CarritoContext
Permite compartir la informacion en forma transversal a todos los componente del arbol, se comparten y actualizan:
Contador de Unidades en Carrito.
Vectos de Productos seleccionados.
Valor total acumulado de la compra.

---

# FIREBASE
Implementado para persistir datos y almacenar repositorio de productos simulados:

Coleccion items: (productos disponibles)
item {
    nombre: Producto1,
    categoría: Agrupación por tipo,
    imagen: URL de la imagen,
    cantidad: stock,
    precio: precio unitario,
}

Coleccion ordenes: (pedidos realizados - compras)
ordenes {
    nombre: nombre provisto por el comprador,
    apellido: apellido provisto por el comprador,
    telefono: telefono provisto por el comprador,
    correo: email provisto por el comprador,
    compraItems: [] vector de items comprados,
    total: precio acumulado final,
}

# PAGES - ROUTES - LINKS
## Home
Bienvenida.

## Carrito
Muestas el contenido del carrito.

## Compra
Solicita datos personales adicionales antes de confirmar el pedido.

## Gracias
Finaliza la compra y resetea la aplicacion.

## Error
En caso de una ruta equivocada.

## Nosotros - Ubicacion - Contacto
Simulacion de contenido adicional a la aplicacion, informacion complementaris NO implementada.

---

# Segunda PREENTERGA del Proyecto Final
JUEVES 06/10/2022

Implementacion de API didactica a modo de productos.
Fetch de objetos simulando productos.
Uso de Rutas para navegacion.
Ruta de ERROR con comodin *
Filter de resultados.
UseEstate - UseEffect para disparar cambios de estado y renderizar.
Condicional para mostrar elementos completos o por filtro dentro del componente DetalleProductos.js.
Preparacion de las secciones generales de la App desde la Barra de Navegación.
Incorpoación de carrito y contados (se muestra lleno o vacio dependiendo del caso).

Es necesaria la incroporación de "Contexto" para lograr mejor fluidez y actualización de componentes como
asi tambien eventos y botones para aggregar productos, eliminar y actualizar estados relacionados con estas
acciones (contadores).

---

# PREENTREGA JUEVES 22/09/2022
Primera pre-entrega del Proyecto Final:

Consigna:

1- Crea una carpeta dentro de src llamada components que contenga la implementación del componente NavBar dentro del archivo NavBar.js. Su funcionalidad es la de renderizar una barra de menú (Navbar):

    @ Brand (título/nombre de la tienda).
    @ Un listado de categorías clickeables.
    @ Incorpora alguna librería de estilos.

2- Crea un componente CartWidget.js con un ícono y ubícalo en el navbar. Agrega estilos, inclúyelo dentro de NavBar.js para que esté visible en todo momento.

3- Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado. Impórtalo dentro de App.js, y abajo de NavBar.js. 

---
