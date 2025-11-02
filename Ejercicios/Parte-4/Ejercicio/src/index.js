
import { PropertiesService } from "./services/properties-service.js";
import addProperty from "../utils/templateClon.js";

const listings = document.getElementById("property-listings");
const template = document.getElementById("property-card-template");

const propertiesService = new PropertiesService();

document.addEventListener("DOMContentLoaded", async () => {

    try {
        const properties = await propertiesService.getProperties(); 

        properties.forEach(prop => {
            
            const property = {
                id: prop.id,
                image: prop.mainPhoto,                        
                title: prop.title,
                town: prop.town.name,
                province: prop.town.province.name,
                description: prop.description,
                price: prop.price,
                sqmeters: prop.sqmeters,
                rooms: prop.numRooms,
                baths: prop.numBaths
            };

            const card = addProperty(property, listings, template);

            if (card) {
                const btnBorrar = card.querySelector(".btn-delete");
                
                btnBorrar.addEventListener("click", async () => {
                    if (!confirm("¿Seguro que quieres borrar esta propiedad?")) return;
                    try {
                        await propertiesService.deleteProperty(prop.id);
                        card.remove();
                    } catch (error) {
                        alert(error);
                    }
                }); 
            }
        });
    } catch (error) {
        alert(error);
    }
    
});
