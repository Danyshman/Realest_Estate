import axios from 'axios';

const baseURL = 'http://localhost:8000'
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export default axios.create(baseURL=baseURL, config=config)