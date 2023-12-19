import { useEffect } from "react";
import authStore from "../Store/Auth";
import bucketStore from "../Store/Bucket";

const SideBar = () => {

    const { user } = authStore();
    const { buckets, getBuckets } = bucketStore();

    useEffect(() => {
        getBuckets();
    }, []);

    return (
        <div className="bg-[#0e1015] w-full h-screen py-8 sticky top-0">
            <div className="w-9/12 mx-auto">
                <h1 className="text-2xl font-bold uppercase">My.Money</h1>


                <div className="flex flex-col justify-between h-[600px]  pt-8 w-11/12">
                    <div className="flex flex-col">



                        <ul className="menu-items">
                            <a href="/">
                                <li className="menu-item">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Dashboard</span>
                                </li>
                            </a>

                            <li className="menu-item">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                <span>Reports</span>
                            </li>
                            <li>
                                <input type="checkbox" id="menu-1" className="menu-toggle" />
                                <label className="menu-item justify-between" htmlFor="menu-1">
                                    <div className="flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span>Buckets</span>
                                    </div>

                                    <span className="menu-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </label>

                                <div className="menu-item-collapse">
                                    <div className="min-h-0">
                                        {buckets?.map((bucket) => (
                                            <a key={bucket.id} href={`/bucket/${bucket.id}`} >
                                                <label className="menu-item ml-6">{bucket.title}</label>
                                            </a>
                                        ))}

                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col ">
                        <div className="w-14 h-14 my-3 overflow-hidden rounded-full ">
                            <img src={user?.image} alt="Avatar" className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <h4 className="font-bold">{user?.username}</h4>
                            <h4 className="text-sm">{user?.email}</h4>



                        </div>
                    </div>

                </div>
            </div>







        </div>
    );
}
export default SideBar;