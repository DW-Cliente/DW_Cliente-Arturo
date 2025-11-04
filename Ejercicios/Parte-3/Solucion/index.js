const propertyForm = document.getElementById("property-form");
const propertyListings = document.getElementById("property-listings");
const cardTemplate = document.getElementById("property-card-template");
const mainPhotoInput = document.getElementById("mainPhoto");
const imagePreview = document.getElementById("image-preview");

/**
 * Creates a new property card and appends it to the DOM
 * @param {object} propertyData - An object with property's data
 */
function createAndAppendCard(propertyData) {
  const cardClone = cardTemplate.content.cloneNode(true).firstElementChild;

  formattedPrice = Intl.NumberFormat("en-US", {
    currency: "EUR",
    style: "currency",
    maximumFractionDigits: 0,
  }).format(propertyData.price);

  cardClone.querySelector(".property-title").append(propertyData.title);
  cardClone
    .querySelector(".property-location")
    .append(`${propertyData.address}, ${propertyData.town}, ${propertyData.province}`);
  cardClone.querySelector(".property-price").append(formattedPrice);
  cardClone
    .querySelector(".property-sqmeters")
    .append(`${propertyData.sqmeters} sqm`);
  cardClone
    .querySelector(".property-rooms")
    .append(`${propertyData.numRooms} beds`);
  cardClone
    .querySelector(".property-baths")
    .append(`${propertyData.numBaths} baths`);
  cardClone.querySelector(".property-image").src = propertyData.imageUrl;

  cardClone.querySelector(".btn-delete").addEventListener('click', () => cardClone.remove());

  propertyListings.append(cardClone);
}

mainPhotoInput.addEventListener("change", () => {
  const file = mainPhotoInput.files[0];
  imagePreview.src = "";
  imagePreview.classList.add("hidden");

  if (file) {
    if(!file.type.startsWith("image")) {
      mainPhotoInput.setCustomValidity("File must be an image");
    } else if(file.size > 200000) {
      mainPhotoInput.setCustomValidity("You can't add an image larger than 200KB");
    } else {
      mainPhotoInput.setCustomValidity("");

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.addEventListener('load', () => {
        imagePreview.src = reader.result;
        imagePreview.classList.remove("hidden");
      });
    }
    mainPhotoInput.reportValidity();
  }
});

propertyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if(!propertyForm.reportValidity()) return;

  const formData = new FormData(propertyForm);

  const propertyData = {
    title: formData.get("title"),
    province: formData.get("province"),
    town: formData.get("town"),
    address: formData.get("address"),
    price: +formData.get("price"),
    sqmeters: +formData.get("sqmeters"),
    numRooms: +formData.get("numRooms"),
    numBaths: +formData.get("numBaths"),
    imageUrl: imagePreview.src,
  };

  createAndAppendCard(propertyData);

  propertyForm.reset();
  imagePreview.src = "";
  imagePreview.classList.add("hidden");
});
