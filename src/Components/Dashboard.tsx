import { useEffect } from "react";
import authStore from "../Store/Auth";
import bucketStore from "../Store/Bucket";
import SideBar from "../layout/SideBar";
import transactionStore from "../Store/Transaction";


const Dashboard = () => {
    const { user } = authStore();
    const { buckets, getBuckets } = bucketStore();
    const { allTransactions, getAllTransactions } = transactionStore();


    useEffect(() => {
        getBuckets();
        getAllTransactions();
    }, []);




    return (
        <div className="bg-[#0B0D10] text-white">

            <div className="w-full mx-auto  grid grid-cols-5">
                <SideBar />


                <div className="w-full col-span-4 ">
                    <div className="w-11/12  mx-auto py-8">
                        <h1 className="text-4xl text-emerald-500 font-bold">Welcome Back,</h1>
                        <h1 className="text-4xl text-[#0B0D10] rounded-lg mt-2 bg-emerald-500 max-w-fit px-2 py-1">{user?.username}</h1>

                        <div className="mt-12">


                            <h1 className="text-4xl font-bold mb-5">Your Buckets</h1>
                            <div className="grid grid-cols-2">
                                {buckets?.length > 0 &&
                                    buckets?.slice(0, 4).map((bucket) => (
                                        <div key={bucket.id} className=" h-[150px] text-[#0B0D10] p-5 mr-8 rounded-lg bg-emerald-500  hover:shadow-lg  hover:shadow-emerald-900 duration-300 ">
                                            <h1 className="uppercase font-bold text-2xl">{bucket.title}</h1>
                                            <h1 className="text-xl">{bucket.total} {bucket.currency}</h1>

                                            <a
                                                href={`/bucket/${bucket.id}`}
                                                className=" font-bold  py-1 rounded-lg mt-4">View</a>
                                        </div>
                                    ))


                                }
                            </div>



                        </div>
                        <div className="mt-12">


                            <h1 className="text-4xl font-bold mb-5">Your Recent Transactions</h1>
                            <div className="flex">
                                <div className="flex flex-col mt-6 w-full">
                                    <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <div className="flex items-center gap-x-3">

                                                        <span>Income / Expense </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Title
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Value
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Category
                                                </th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    Date
                                                </th>

                                                <th scope="col" className="relative py-3.5 px-4">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className=" divide-y divide-gray-200 dark:divide-gray-700 ">

                                            {allTransactions?.map((transaction) => (
                                                <tr>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">
                                                            {/* <input type="checkbox" className="text-emerald-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" /> */}

                                                            <div className="flex items-center gap-x-2">
                                                                <div className="flex items-center justify-center w-8 h-8 text-emerald-500 bg-emerald-100 rounded-full dark:bg-gray-800">

                                                                    {transaction.type === 'income' && (
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-green-500">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7m0 0l-7 7m7-7v18" />
                                                                        </svg>
                                                                    )}

                                                                    {transaction.type === 'expense' && (
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-red-500">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7 7m0 0l7-7m-7 7V3" />
                                                                        </svg>
                                                                    )}
                                                                </div>

                                                                <div>
                                                                    <h2 className="font-normal text-gray-800 dark:text-white ">{transaction.type}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                                        {transaction.title}
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{transaction.value}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{transaction.category}</td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </td>





                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>



                        </div>



                    </div>

                </div>

            </div>
        </div>

    );

}


export default Dashboard;