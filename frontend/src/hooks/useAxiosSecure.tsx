import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:8100'
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;