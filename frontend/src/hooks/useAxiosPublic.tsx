import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:8100'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;