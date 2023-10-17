import axios, { Axios } from 'axios';

export const clientHttp = axios.create(
    {
        baseURL: "http://localhost:8000/",
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'application/json'
        }
    }
)