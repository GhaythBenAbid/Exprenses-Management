import { useParams } from "react-router-dom";
import transactionStore from "../Store/Transaction";
import { useEffect, useState } from "react";
import bucketStore from "../Store/Bucket";

const DataTable = () => {
    const params = useParams();
    const { id } = params as { id: string };

    const { getTransactions, transactions , addTransaction } = transactionStore();
    const { getSelectedBucket } = bucketStore();


    const [title , setTitle] = useState('');
    const [value , setValue] = useState('');
    const [category , setCategory] = useState('');
    const [date , setDate] = useState('');
    const [type , setType] = useState('income');



    const handleAddTransaction = async () => {
        const transaction = {
            type : type,
            title : title,
            value : value,
            category : category,
            date : date,
            bucket : id,
        }

        await addTransaction(transaction);
        await getSelectedBucket(id);
        await getTransactions(id);

        document.getElementById('modal-1')?.click();

    }


    useEffect(() => {
        getTransactions(id);
    }, []);






    return (
        <section className=" mx-auto">
            <div className="sm:flex mt-8 sm:items-center sm:justify-between">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Files uploaded</h2>

                <div className="flex items-center  gap-x-3">
                    <button className="w-1/2 px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-white dark:border-gray-700">
                        Download all
                    </button>
                    <label className="btn btn-primary" htmlFor="modal-1">Open Modal</label>
                    <input className="modal-state" id="modal-1" type="checkbox" />
                    <div className="modal">
                        <label className="modal-overlay" htmlFor="modal-1"></label>
                        <div className="modal-content flex flex-col gap-5 w-[500px]">
                            <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                            <h2 className="text-xl">Add new transaction</h2>
                            <div>
                                <div className="flex flex-col">
                                    <label htmlFor="title" className="text-sm">Type</label>
                                    <select onChange={(e) => {setType(e.target.value);}}
                                    className="select max-w-full">
                                        <option value="income">Income</option>
                                        <option value="expense">Expense</option>
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="title" className="text-sm">Title</label>
                                    <input
                                    onChange={(e) => {setTitle(e.target.value);}}
                                    type="text" id="title" className="input max-w-full my-2 input-bordered" placeholder="Title" />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="value" className="text-sm">Value</label>
                                    <input
                                    onChange={(e) => {setValue(e.target.value);}}
                                    type="number" id="value" className="input max-w-full my-2 input-bordered" placeholder="Value" />
                                </div>
                                <div className="flex flex-col">

                                    <label htmlFor="category" className="text-sm">Category</label>
                                    <input
                                    onChange={(e) => {setCategory(e.target.value);}}
                                    type="text" id="category" className="input max-w-full my-2 input-bordered" placeholder="Category" />
                                </div>
                                <div className="flex flex-col">

                                    <label htmlFor="date" className="text-sm">Date</label>
                                    <input
                                    onChange={(e) => {setDate(e.target.value);}}
                                    type="date" id="date" 
                                    className="input max-w-full my-2 input-bordered" placeholder="Date" />
                                </div>
                                



                            </div>



                            <div className="flex gap-3">
                                <button className="btn btn-primary btn-block"
                                onClick={
                                    () => {
                                        handleAddTransaction();
                                    }
                                }
                                >Add</button>

                                <button className="btn btn-block"
                                onClick={() => {
                                    document.getElementById('modal-1')?.click();
                                }}
                                >Cancel</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
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
                                    {transactions?.map((transaction) => (
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


                                    {/* <tr>
                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="inline-flex items-center gap-x-3">
                                                <input type="checkbox" className="text-emerald-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                                                    <div className="flex items-center gap-x-2">
                                                        <div className="flex items-center justify-center w-8 h-8 text-emerald-500 bg-emerald-100 rounded-full dark:bg-gray-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                            </svg>
                                                        </div>

                                                        <div>
                                                            <h2 className="font-normal text-gray-800 dark:text-white ">Dashboard screenshot.jpg</h2>
                                                            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">720 KB</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </td>
                                        <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                            720 KB
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Demi Wilkinson</td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr> */}






                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex items-center justify-between mt-6">
                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        previous
                    </span>
                </a>

                <div className="items-center hidden md:flex gap-x-3">
                    <a href="#" className="px-2 py-1 text-sm text-emerald-500 rounded-md dark:bg-gray-800 bg-emerald-100/60">1</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                    <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                </div>

                <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div> */}
        </section>
    );
};

export default DataTable;