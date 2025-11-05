import { ProductosService } from "./classes/productos.service";
import type { Product, ProductInsert } from "./interfaces/product";

const tbody = document.querySelector("#tabla tbody")!;
const template = document.querySelector(
  "#productTemplate"
) as HTMLTemplateElement;
const form = document.getElementById("productForm") as HTMLFormElement;
const imgPreview = document.getElementById("imgPreview") as HTMLImageElement;
const imageInput = form.image as HTMLInputElement;

const productosService = new ProductosService();

function addProduct(product: Product): void {
  const tr = (template.content.cloneNode(true) as DocumentFragment)
    .firstElementChild!;
  const tdAvailable = tr.querySelector(".available")!;
  const tdPrice = tr.querySelector(".price")!;
  const img = tr.querySelector("img")!;
  const tdDesc = tr.querySelector(".description")!;
  const btnBorrar = tr.querySelector(".borrar")!;

  img.src = product.imageUrl;
  tdDesc.textContent = product.description;
  tdAvailable.textContent = new Date(product.available).toLocaleDateString();
  tdPrice.textContent = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(product.price);

  btnBorrar.addEventListener("click", async () => {
    await productosService.delete(product.id);
    tr.remove();
  });

  tbody.append(tr);
}

async function file2Base64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", () => {
      resolve(fileReader.result as string);
    });

    fileReader.addEventListener("error", () => {
      reject(new Error("Error al pasar a base64"));
    });
  });
}

async function getProducts() {
  const products = await productosService.getProductos();
  products.forEach(addProduct);
}

imageInput.addEventListener("change", async () => {
  const file = imageInput.files?.[0]; // Archivo seleccionado
  if (!file) {
    imgPreview.src = "";
    return;
  }

  imgPreview.src = await file2Base64(file);
});

form.addEventListener("submit", async e => {
  e.preventDefault();

  const producto: ProductInsert = {
    description: (form.description as HTMLInputElement).value,
    price: parseFloat((form.price as HTMLInputElement).value),
    available: (form.available as HTMLInputElement).value,
    imageUrl: imgPreview.src,
  };

  try {
    const productoInsert = await productosService.add(producto);
    addProduct(productoInsert);

    form.reset();
    imgPreview.src = "";
  } catch (error) {
    alert(error);
  }
});

getProducts().catch(console.error);
