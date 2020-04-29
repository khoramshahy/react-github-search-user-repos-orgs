import axios from "axios";

const BASE_URL = "https://api.github.com";

export function getRequest(url: string) {
    return axios.get(`${BASE_URL}/${url}`)
        .then(response => response.data)
        .catch(error => ({ error: 'error' }))
}