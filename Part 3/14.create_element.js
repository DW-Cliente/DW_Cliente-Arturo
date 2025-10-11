const form = document.getElementById("productForm");
const tbody = document.querySelector("#listaProductos tbody");
const imgPreview = document.getElementById("imgPreview");

function addProducto(producto) {
  const tr = document.createElement("tr");
  const tdImagen = document.createElement("td");
  const imagen = document.createElement("img");
  imagen.src = producto.imagen;
  tdImagen.append(imagen);
  const tdNombre = document.createElement("td");
  tdNombre.append(producto.nombre);
  const tdPrecio = document.createElement("td");
  tdPrecio.append(
    new Intl.NumberFormat("es", { currency: "EUR" }).format(producto.precio)
  );
  const tdBoton = document.createElement("td");
  const boton = document.createElement("button");
  boton.append("X");
  tdBoton.append(boton);

  boton.addEventListener("click", () => tr.remove());

  tr.append(tdImagen, tdNombre, tdPrecio, tdBoton);
  tbody.append(tr);
}

form.imagen.addEventListener("change", (e) => {
  const file = e.target.files[0]; // Archivo seleccionado
  if (!file) {
    imgPreview.src = "";
    return;
  }

  // Validamos que el archivo sea .jpg o .png
  if (!/(.jpg|.png)$/.test(file.name)) {
    form.imagen.setCustomValidity("La extensión debe ser .jpg o .png");
    form.imagen.reportValidity(); // Mostramos error al usuario
    return;
  } else {
    form.imagen.setCustomValidity("");
  }

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener("load", () => {
    imgPreview.src = fileReader.result;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.reportValidity()) return; // Formulario no válido

  const producto = {
    nombre: form.nombre.value,
    precio: +form.precio.value,
    imagen: imgPreview.src,
  };

  addProducto(producto);
  form.reset();
  imgPreview.src = "";
});
