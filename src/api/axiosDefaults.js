import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-lk-b02cd3b745b6.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true