import { useEffect, useState } from "react";
import authStore from "../Store/Auth";


const Login = () => {

    const { login , isAuthenticated } = authStore();

    const [status, setStatus] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin() {

        setStatus(await login(email, password));
    }






    return (

        <div className="flex h-screen bg-[#0B0D10] text-white">
            <div className="hidden bg-[linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)),url('https://images.unsplash.com/photo-1593672715438-d88a70629abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover lg:flex items-center justify-center flex-1 bg-green-500 bg-opacity-50 ">
            </div>
            <div className="w-full  lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6  text-center">Login</h1>
                    <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Welcome back! Please login to your account.</h1>
                    
                    {!status &&
                        <div>
                            <div className="flex w-full  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div className="flex items-center justify-center w-12 bg-red-500">
                                    <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                                    </svg>
                                </div>

                                <div className="px-4 py-2 -mx-3">
                                    <div className="mx-3">
                                        <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                                        <p className="text-sm text-gray-600 dark:text-gray-200">
                                            Invalid username or password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    }

                    
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>Login with email</p>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="text" id="email" name="email" className="my-2 input max-w-full" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" id="password" name="password" className="my-2 input max-w-full" />
                        </div>
                        <div>
                            <button onClick={() => { handleLogin() }} className="w-full bg-emerald-500 text-white p-2 ">Login</button>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>Don't have an account? <a href="/register" className=" hover:underline">Sign up here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;