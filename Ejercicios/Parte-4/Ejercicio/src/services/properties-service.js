import { Http } from './http.js';
import { SERVER } from '../constants.js';

export class PropertiesService {
    #http = new Http();

    async getProperties() {
        const resp = await this.#http.get(`${SERVER}/properties`);
        return resp.properties;
    }

    async insertProperty(property) {
        const resp = await this.#http.post(`${SERVER}/properties`, property);
        return resp.property;
    }

    async updateProperty(property) {
        const resp = await this.#http.put(`${SERVER}/properties/${property.id}`, property);
        return resp.property; 
    }

    deleteProperty(id) {
        return this.#http.delete(`${SERVER}/properties/${id}`);
    }
}
