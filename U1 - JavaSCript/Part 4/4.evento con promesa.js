const form = document.getElementById("productForm");
const tbody = document.querySelector("#listaProductos tbody");
const imgPreview = document.getElementById("imgPreview");
const productTemplate = document.getElementById("productTemplate");

function addProducto(producto) {
  const tr = productTemplate.content.cloneNode(true).firstElementChild;
  tr.querySelector("img").src = producto.imagen;
  tr.querySelector(".nombre").append(producto.nombre);
  tr.querySelector(".precio").append(
    new Intl.NumberFormat("es", { currency: "EUR" }).format(producto.precio)
  );
  tr.querySelector(".borrar").addEventListener("click", () => tr.remove());
  tbody.append(tr);
}

async function file2Base64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", () => {
      resolve(fileReader.result);
    });

    fileReader.addEventListener("error", (e) => {
      reject(e);
    });
  });
}

form.imagen.addEventListener("change", async (e) => {
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

  try {
    imgPreview.src = await file2Base64(file);
  } catch (e) {
    console.error(`ERROR: ${e.message}`);
  }
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
