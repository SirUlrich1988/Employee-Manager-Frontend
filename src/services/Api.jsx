import axios from "axios";

const api = axios.create({
    baseURL: 'https://manager-b6pi.onrender.com/api/v1/'
})

export default api

