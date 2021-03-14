import api from "../api";

const productService = {
  deleteProduct: (product: any) => api.delete(`/beers/${product.id}`),
  postProduct: (product: any) => api.post("/beers/", product),
  getProduct: (product: any) => api.get("/beers/", product),
};

export default productService;
