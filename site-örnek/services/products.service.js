
class ProductsService {
   
    apiurl = "http://192.168.1.2:4537";
    axios = window.axios;

    constructor() {

    }

    async getProducts(id) {
        return this.axios.get(`${this.apiurl}/products/${id}`).then(res => {
            console.log(res.data);
            return res.data;
        });
    }
}