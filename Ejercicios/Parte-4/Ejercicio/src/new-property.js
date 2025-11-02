
import base64 from "../utils/base64.js";
import validacion from "../utils/fileValidacion.js";

import { ProvincesService } from "./services/provinces-service.js";
import { PropertiesService } from "./services/properties-service.js";

const form = document.getElementById("property-form");
const imgPreview = document.getElementById("image-preview");

const provincesService = new ProvincesService();
const propertiesService = new PropertiesService();

const selectProvince = document.getElementById("province");
const selectTown = document.getElementById("town");

// ------------------ Provincias / Municipios ------------------

// Añade una opción de provincia al select
function addProvinceOption(province) {
    const opt = document.createElement("option");
    opt.value = province.id;
    opt.textContent = province.name;
    selectProvince.appendChild(opt);
}

// Añade una opción de municipio al select
function addTownOption(town) {
    const opt = document.createElement("option");
    opt.value = town.id;
    opt.textContent = town.name;
    selectTown.appendChild(opt);
}

// Borra todas las opciones del selectTown excepto la primera
function clearTownsKeepFirst() {
    if (!selectTown) return;
    for (let i = selectTown.options.length - 1; i >= 1; i--) {
        selectTown.remove(i);
    }
}

// Carga provincias desde el servidor
async function loadProvinces() {
    if (!selectProvince) return;
    try {
        const provinces = await provincesService.getProvinces();
        provinces.forEach(addProvinceOption);
    } catch (err) {
        console.error("Error cargando provincias:", err);
        alert("No se pudieron cargar las provincias.");
    }
}

// Evento: al cambiar provincia carga sus municipios
if (selectProvince) {
    selectProvince.addEventListener("change", async () => {
        clearTownsKeepFirst();
        const provinceId = selectProvince.value;
        if (!provinceId) return;
        try {
            const towns = await provincesService.getTowns(provinceId);
            towns.forEach(addTownOption);
        } catch (err) {
            console.error("Error cargando municipios:", err);
            alert("No se pudieron cargar los municipios.");
        }
    });
}

// iniciar carga al cargar este script
loadProvinces();

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

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    // Recoger datos con FormData
    const data = new FormData(form);

    // Construir objeto
    const property = {
      title: data.get("title"),
    description: data.get("description"),
    price: Number(data.get("price")),
    address: data.get("address"),
    sqmeters: Number(data.get("sqmeters")),   // según enunciado
    numRooms: Number(data.get("numRooms")),
    numBaths: Number(data.get("numBaths")),
    townId: Number(data.get("town")),         // id del select town
    mainPhoto: imgPreview.src  
    };

    try {
        // Llamamos al servicio para insertar la propiedad en el servidor
        await propertiesService.insertProperty(property);

        // Si todo ok redirigimos a index.html
        location.assign("index.html");
    } catch (error) {
        alert(error);
    }

    // Llamada al metodo para añadir una propiedad
    // addProperty(property, listings, template);

    // form.reset();
    // imgPreview.classList.add("hidden");
    // imgPreview.removeAttribute("src");
});
