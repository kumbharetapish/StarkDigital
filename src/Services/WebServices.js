import axios from "axios";
const PRODUCT_LIST_API = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/";

class WebServices {
  getAxios() {
    return axios;
  }

  getProductList() {
    return this.getAxios().get(PRODUCT_LIST_API);
  }
}

export default new WebServices();
