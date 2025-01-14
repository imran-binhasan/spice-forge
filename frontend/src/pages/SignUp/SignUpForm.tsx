
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";


const SignUpForm = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signUpUser, updateNewUser } = useAuth();
    const onSubmit = (data) => {
        signUpUser(data.email, data.password)
            .then(() => {
                const userInfo = { name: data.name, email: data.email, }
                updateNewUser(data.name)
                axiosPublic.post('/api/users', userInfo)
                    .then(res => {
                        if (res.status == 201) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'user succesfully created',
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
            })
    }


    return (
        <>
            <h2 className="text-center text-3xl">Signup</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                <div className="mb-4">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" {...register('name', { required: true, minLength: 3 })} name="name" placeholder="Type your name here" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.name?.type === "required" && (<p className='text-red-500 mt-1' role="alert">First name is required !</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" {...register('email', { required: true, minLength: 10 })} name="email" placeholder="Type your email here" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.email?.type === "required" && (<p className='text-red-500 mt-1' role="alert">Email is required !</p>)}
                </div>
                <div className="mb-4">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" {...register('password',
                        {
                            required: true,
                            minLength: 6,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
                        },)} name="password" placeholder="password" className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {errors.password?.type === "required" && (<p className='text-red-500 mt-1' role="alert">Password is required !</p>)}
                    {errors.password?.type === "minLength" && (<p className='text-red-500 mt-1' role="alert">At least 6 char required</p>)}
                    {errors.password?.type === 'pattern' && (<p className='text-red-500 mt-1' role="alert">At least one uppercase one lowercase and min 6 char and max 20 char required !</p>)}
                </div>
                <div className="mb-4">
                    <span>Already have an account? <Link className="hover:underline" to={'/auth/login'} >Login</Link></span>
                </div>
                <button type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600  disabled:bg-gray-400"
                >
                    Signup
                </button>

            </form>
            <div className="max-w-md mx-auto px-4 bg-white flex justify-center items-center">
                <SocialLogin />
            </div>
        </>
    );
};

export default SignUpForm;