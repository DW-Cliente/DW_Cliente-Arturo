
import { PropertiesService } from "./services/properties-service.js";
import addProperty from "../utils/templateClon.js";

const propertiesService = new PropertiesService();
const listings = document.getElementById("property-listings");
const template = document.getElementById("property-card-template");

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const props = await propertiesService.getProperties(); // array desde servidor

        props.forEach(p => {
            // transformar la estructura del servidor a lo que espera addProperty
            const item = {
                id: p.id,
                image: p.mainPhoto,                        // server -> mainPhoto
                title: p.title,
                town: p.town?.name ?? "",
                province: p.town?.province?.name ?? "",
                description: p.description,
                price: p.price,
                sqmeters: p.sqmeters,
                rooms: p.numRooms,
                baths: p.numBaths
            };

            // addProperty devuelve el elemento que insertó (ver templateClon)
            const cardEl = addProperty(item, listings, template);

            if (cardEl) {
                const btn = cardEl.querySelector(".btn-delete");
                if (btn) {
                    btn.addEventListener("click", async () => {
                        if (!confirm("¿Seguro que quieres borrar esta propiedad?")) return;
                        try {
                            await propertiesService.deleteProperty(p.id);
                            cardEl.remove();
                        } catch (err) {
                            console.error("Error borrando:", err);
                            alert("No se pudo borrar la propiedad.");
                        }
                    });
                }
            }
        });

    } catch (err) {
        console.error("Error cargando propiedades:", err);
        alert("No se pudieron cargar las propiedades.");
    }
});
