const producto = {
  precio: 100,
  cantidad: 5,
  descripcion: "Producto de ejemplo",
  imagenes: [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ],
  resenas: [
    {
      autor: "Juan Pérez",
      comentario: "Excelente producto, muy satisfecho con la compra.",
    },
    {
      autor: "María Gómez",
      comentario:
        "El producto llegó en buen estado, pero el envío fue un poco lento.",
    },
  ],
};
alert(producto.resenas[0].comentario);
