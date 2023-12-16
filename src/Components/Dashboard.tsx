import ReactApexChart from "react-apexcharts";
import useStore from "../Store/Counter";
import SideBar from "../layout/SideBar";
import ChartInterface from "../layout/Chart";
import DataTable from "../layout/DataTable";

const Dashboard = () => {


    const { count, decrement, increment } = useStore();


    return (
        <div className="bg-[#0B0D10] text-white">

            <div className="w-full mx-auto  grid grid-cols-5">
                <SideBar />
                
                <div className="w-11/12 mx-auto  py-8 col-span-4">
                    <div className="w-full mx-auto p-8 h-52 bg-emerald-500 rounded-xl heropattern-fourpointstars-gray-600/10">
                        
                        <h1 className="text-[#0B0D10] font-bold text-3xl">Current Expenses </h1>
                        <h1 className="text-[#0B0D10] text-6xl font-bold mt-10">1800.00</h1>

                    </div>
                    <div>
                        <DataTable />
                    </div>



                    <div className="flex">

                    <ChartInterface className="w-1/2" />
                    <ChartInterface className="w-1/2" />
                    </div>




                </div>
                <div className="w-full h-screen "></div>

            </div>
        </div>

    );

}


export default Dashboard;