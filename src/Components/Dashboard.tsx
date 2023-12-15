import useStore from "../Store/Counter";

const Dashboard = () => {


    const { count, decrement, increment } = useStore();


    return (
        <div className="bg-[#0B0D10] text-white">

            <div className="w-11/12 mx-auto h-screen pt-8 grid grid-cols-5">

                <div className="w-full h-screen">

                    <h1 className="text-2xl font-bold uppercase">My.Money</h1>


                    <div className="flex flex-col mt-8">
                        <a href="#" className="text-gray-300 hover:text-white hover:bg-emerald-500 px-3 py-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-10a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            Dashboard
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white hover:bg-emerald-500 px-3 py-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="h-5 w-5 inline-block mr-2 bi bi-credit-card-2-front-fill" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                            </svg>
                            Expenses
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white hover:bg-emerald-500 px-3 py-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="h-5 w-5 inline-block mr-2 bi bi-graph-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z" />
                            </svg>
                            Reports
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white hover:bg-emerald-500 px-3 py-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="h-5 w-5 inline-block mr-2 bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>
                            Settings
                        </a>
                    </div>


                </div>
                <div className="w-full h-screen col-span-3">
                    <div className="w-full p-8 h-52 bg-emerald-500 rounded-xl heropattern-fourpointstars-gray-600/10">
                        
                        <h1 className="font-bold text-3xl">Current Expenses </h1>
                        <h1 className="text-6xl font-bold mt-10">1800.00</h1>

                    </div>




                </div>
                <div className="w-full h-screen "></div>

            </div>
        </div>

    );

}


export default Dashboard;