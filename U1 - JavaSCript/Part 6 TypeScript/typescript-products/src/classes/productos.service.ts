import { SERVER } from "../constants.js";
import type {
  Product,
  ProductInsert,
  ProductsResponse,
  SingleProductResponse,
} from "../interfaces/product.js";
import { Http } from "./http.class.js";

export class ProductosService {
  #http = new Http();

  async getProductos(): Promise<Product[]> {
    const resp = await this.#http.get<ProductsResponse>(`${SERVER}/products`);
    return resp.products;
  }

  async add(producto: ProductInsert): Promise<Product> {
    const resp = await this.#http.post<SingleProductResponse, ProductInsert>(
      `${SERVER}/products`,
      producto
    );
    return resp.product;
  }

  async update(producto: Product): Promise<Product> {
    const resp = await this.#http.put<SingleProductResponse, Product>(
      `${SERVER}/products/${producto.id}`,
      producto
    );
    return resp.product;
  }

  delete(id: number): Promise<void> {
    return this.#http.delete<void>(`${SERVER}/products/${id}`);
  }
}
