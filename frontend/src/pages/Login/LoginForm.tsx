import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../context/AuthProvider';
import SocialLogin from '../../components/SocialLogin';

const LoginForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    const {loginUser, setUser} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const {register, handleSubmit, formState: {errors}} = useForm();
   
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, []);

    

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
        .then(() => {
           navigate(from)
        } )
    };

    const handleValidateCaptcha = e => {
        const userCaptcha = e.target.value;
       if(validateCaptcha(userCaptcha)){
        setDisabled(false)
       }
       
    }
    

    return (
        <>
            <h2 className="text-center text-xl md:text-2xl font-medium">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Type your email"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" {...register('email',{required:true, minLength:10})}
                    />
                      {errors.email?.type === "required" && (<p className='text-red-500 mt-1' role="alert">Email is required !</p>)}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Your password"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" {...register('password',{required:true, minLength:6})}
                    />
                     {errors.password?.type === "required" && (<p className='text-red-500 mt-1' role="alert">Password is required !</p>)}

                </div>
              
                  
                <div className="mb-4">
                    <label htmlFor="captcha">
                    <LoadCanvasTemplate/>
                    </label>
                    <input
                        type="text"
                        placeholder="Type the captcha"
                        onBlur={handleValidateCaptcha}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className='mb-4'>
                <span>Don't have an account?  <Link className='hover:underline' to={'/auth/signup'}>Signup</Link></span>
                </div>
                <button
                    type="submit"
                    disabled={disabled}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600  disabled:bg-gray-400"
                >
                    Login
                </button>
            </form>
            <div className="max-w-md mx-auto px-4 bg-white flex justify-center items-center">
                <SocialLogin />
            </div>
        </>
    );
};

export default LoginForm;
