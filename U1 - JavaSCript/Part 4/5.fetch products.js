const tbody = document.querySelector("#tabla tbody");
const template = document.querySelector("#productTemplate");

function addProduct(product) {
  const tr = template.content.cloneNode(true).firstElementChild;
  const tdAvailable = tr.querySelector(".available");
  const tdPrice = tr.querySelector(".price");
  const img = tr.querySelector("img");
  const tdDesc = tr.querySelector(".description");

  img.src = product.imageUrl;
  tdDesc.textContent = product.description;

  tbody.append(tr);
}

fetch("https://api.fullstackpro.es/products-example/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.forEach(addProduct);
  });
