
import { PropertiesService } from "./services/properties-service.js";
import propertyTemplate from "../utils/templateClon.js";

import { listings } from "./constants.js";
import { template } from "./constants.js";

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

            const card = propertyTemplate(property, listings, template);

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
