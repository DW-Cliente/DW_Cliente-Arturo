import { MyGeolocation } from "./my-geolocation";

async function showMap() {
      let coords = await MyGeolocation.getLocation();
      console.log(coords);
      // Mostrar el mapa con el marcador, etc.
}

showMap();
