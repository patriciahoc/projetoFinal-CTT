import { api, headers } from "../api";

const productService = {
  deleteProduct: (id: number) => api.delete(`/beers/${id}`, headers()),
  postProduct: (product: any) => api.post("/beers/", product),
  getProduct: () => api.get("/beers/", headers()),
};

export default productService;
