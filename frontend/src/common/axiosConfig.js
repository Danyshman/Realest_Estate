import axios from 'axios';

const baseURL = 'http://localhost:8000'
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const axiosConfig = axios.create({
    baseURL, config
})

export default axiosConfig