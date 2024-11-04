import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api', // Ensure the baseURL points to your backend API
    headers:{
        "Content-Type":"application/jsonßß"
    }
});

export default http;