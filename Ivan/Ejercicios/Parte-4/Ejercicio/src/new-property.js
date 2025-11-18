
import base64 from "../utils/base64.js";
import validacion from "../utils/fileValidacion.js";
import { ProvincesService } from "./services/provinces-service.js";
import { PropertiesService } from "./services/properties-service.js";

const form = document.getElementById("property-form");
const imgPreview = document.getElementById("image-preview");
const selectProvince = document.getElementById("province");
const selectTown = document.getElementById("town");

const provincesService = new ProvincesService();
const propertiesService = new PropertiesService();

// Añade una opción de provincia al select
function addProvinceOption(province) {
    const option = document.createElement("option");
    option.value = province.id;
    option.textContent = province.name;
    selectProvince.appendChild(option);
}

// Añade una opción de ciudad al select
function addTownOption(town) {
    const option = document.createElement("option");
    option.value = town.id;
    option.textContent = town.name;
    selectTown.appendChild(option);
}

// Borra todas las opciones del selectTown excepto la primera
function clearTowns() {
    for (let i = selectTown.options.length - 1; i >= 1; i--) {
        selectTown.remove(i);
    }
}

// Carga provincias desde el servidor
async function loadProvinces() {
    try {
        const provinces = await provincesService.getProvinces();
        provinces.forEach(addProvinceOption);
    } catch (error) {
        alert(error);
    }
}

// Al cambiar provincia carga sus municipios
selectProvince.addEventListener("change", async () => {
    clearTowns();
    const provinceId = selectProvince.value;

    try {
        const towns = await provincesService.getTowns(provinceId);
        towns.forEach(addTownOption);
    } catch (error) {
        alert(error);
    }
});

loadProvinces();

form.mainPhoto.addEventListener("change", (e) => {
    const file = e.target.files[0]; 

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
        sqmeters: Number(data.get("sqmeters")),   
        numRooms: Number(data.get("numRooms")),
        numBaths: Number(data.get("numBaths")),
        townId: Number(data.get("town")),      
        mainPhoto: imgPreview.src  
    };

    try {
        await propertiesService.insertProperty(property);
        location.assign("index.html");
    } catch (error) {
        alert(error);
    }
});
