import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const {googleSignIn} = useAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            const userInfo = {
                name: res.user?.displayName,
                email: res.user?.email
            }
            axiosPublic.post('/api/users', userInfo)
            navigate('/')
            
        })
    }
    return (
        <div className="py-4">
            <div>
                <button onClick={handleGoogleSignIn} className="bg-white flex items-center gap-2 hover:bg-gray-100 text-gray-800 font-semibold py-1.5 rounded-md  px-4 border border-gray-400 rounded shadow"><FaGoogle/>SIGNIN WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SocialLogin;