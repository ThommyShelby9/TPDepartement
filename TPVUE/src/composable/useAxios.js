import axios, { Axios } from 'axios';

const clientHttp = axios.create(
    {
        baseURL: "http://localhost:8000/",
        headers: {
            Accept: 'text/plain',
            'Content-Type': 'application/json'
        }
    }
)

export const useAxios = () =>{
    const get = async(url)=>{
        return await clientHttp.get(url);
    };return{

    }
}