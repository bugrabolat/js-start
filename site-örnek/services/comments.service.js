class CommentsService {
    apiUrl = "http://192.168.1.2:4537";
    axios = window.axios;

    constructor(){

    }

    async getComments(id) {
        return this.axios.get(`${this.apiUrl}/comments/${id}`).then(res => {
            console.log(res);
            return res.data;
        });
    }

    async addComments(urun) {
        return this.axios.post(`${this.apiUrl}/comments`, urun).then(res => {
            console.log(res);
            return res.data;
        });
    }


}