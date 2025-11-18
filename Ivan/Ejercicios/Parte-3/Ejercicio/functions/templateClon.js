// Función para clonar el template y rellena la card
function addProperty(property, listings, template) {
    const card = template.content.cloneNode(true);

    card.querySelector(".property-image").src = property.image;
    card.querySelector(".property-title").append(property.title);
    card.querySelector(".property-location").append(`${property.town}, ${property.province}`);

    const priceText = new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR" }).format(property.price);
    card.querySelector(".property-price").append(priceText);

    card.querySelector(".property-sqmeters").append(`${property.sqmeters} sqm`);
    card.querySelector(".property-rooms").append(`${property.rooms} rooms`);
    card.querySelector(".property-baths").append(`${property.baths} baths`);

    // Botón borrar card 
    card.querySelector(".btn-delete").addEventListener("click", (e) => {
        e.currentTarget.closest(".bg-white").remove();
    });

    listings.append(card);
}

export { addProperty };