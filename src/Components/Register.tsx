import { useState } from "react";
import authStore from "../Store/Auth";

const register = () => {

    const { register } = authStore();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    function handleRegister(){
        const data = {
            username: username,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm
        };

        register(data);
    }



    return (
        <div className="flex flex-row-reverse h-screen">
            <div className="hidden bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('https://images.unsplash.com/photo-1593672715438-d88a70629abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover lg:flex items-center justify-center flex-1 bg-green-500 bg-opacity-50 text-black">
            </div>
            <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">Register</h1>
                    <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Create a new account. Welcome!</h1>

                    <div className="mt-4 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" id="username" name="username" 
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="text" id="email" name="email" 
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" id="passwordConfirm" name="passwordConfirm"
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                        </div>
                        <div>
                            <button onClick={() => handleRegister()} className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Register</button>
                        </div>
                    </div>

                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>Already have an account? <a href="/login" className="text-black hover:underline">Login here</a></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default register;