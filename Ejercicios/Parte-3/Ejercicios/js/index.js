import { addProperty } from "../functions/templateClon.js";
import { base64 } from "../functions/base64.js";
import { validacion } from "../functions/fileValidacion.js";

const form = document.getElementById("property-form");
const imgPreview = document.getElementById("image-preview");
const listings = document.getElementById("property-listings");
const template = document.getElementById("property-card-template");

form.mainPhoto.addEventListener("change", (e) => {
    const file = e.target.files[0]; // Archivo seleccionado

    if (!validacion(file, form, imgPreview)) return;

    // Convertir el archivo a Base64
    const reader = base64(file);
    
    // Mostrar la previsualización (Base64)
    reader.addEventListener("load", () => {
        imgPreview.classList.remove("hidden");
        imgPreview.src = reader.result;
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    // Recoger datos con FormData
    const data = new FormData(form);

    // Construir objeto
    const property = {
        province: data.get("province"),
        town: data.get("town"),
        address: data.get("address"),
        title: data.get("title"),
        sqmeters: Number(data.get("sqmeters")),
        rooms: Number(data.get("numRooms")),
        baths: Number(data.get("numBaths")),
        price: Number(data.get("price")),
        image: imgPreview.src,
    };

    // Llamada al metodo para añadir una propiedad
    addProperty(property, listings, template);

    form.reset();
    imgPreview.classList.add("hidden");
    imgPreview.removeAttribute("src");
});
