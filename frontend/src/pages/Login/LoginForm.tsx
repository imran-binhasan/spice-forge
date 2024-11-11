import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const LoginForm = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6); // Load a 6-character CAPTCHA
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userCaptcha = captchaRef.current.value;

        // Validate CAPTCHA on form submit
        if (!validateCaptcha(userCaptcha)) {
            alert("Captcha is incorrect!");
            return;
        }

        // Proceed with login logic here
        console.log("Logging in with email:", email);
    };

    const checkCaptcha = () => {
        const userCaptcha = captchaRef.current.value;
        setDisabled(!validateCaptcha(userCaptcha)); // Disable/enable button based on CAPTCHA validity
    };

    return (
        <>
            <h2 className="text-center text-xl md:text-2xl font-medium">Login</h2>
            <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Type your email"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your password"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <LoadCanvasTemplate />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Type the captcha"
                        ref={captchaRef}
                        onBlur={checkCaptcha} // Validate when user leaves the input field
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    disabled={disabled}
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none disabled:bg-gray-400"
                >
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;
