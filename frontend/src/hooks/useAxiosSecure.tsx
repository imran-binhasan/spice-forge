import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:8100'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOutUser} = useAuth();
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    },(error)=>{
        return Promise.reject(error)
    });
    axiosSecure.interceptors.response.use( response =>{
        return response;
    },async (error)=>{
        if(error.response.status === 401 || error.response.status === 403){
            await logOutUser();
            navigate('/auth/login')
        }
        return Promise.reject(error)
    })



    return axiosSecure
};

export default useAxiosSecure;