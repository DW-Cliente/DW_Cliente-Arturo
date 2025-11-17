import { Http } from "./http.js";
import { SERVER } from "../constants.js";

export class ProvincesService {
    #http = new Http();

    async getProvinces() {
        const resp = await this.#http.get(`${SERVER}/provinces`);
        return resp.provinces;
    }

    async getTowns(provinceId) {
        const resp = await this.#http.get(`${SERVER}/provinces/${provinceId}/towns`);
        return resp.towns;
    }
}
