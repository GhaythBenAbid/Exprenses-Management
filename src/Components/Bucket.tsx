import SideBar from "../layout/SideBar";
import ChartInterface from "../layout/Chart";
import DataTable from "../layout/DataTable";
import bucketStore from "../Store/Bucket";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import transactionStore from "../Store/Transaction";

const Dashboard = () => {

    const params = useParams();
    const { id } = params as { id: string };
    const { getSelectedBucket, bucket } = bucketStore();

    useEffect(() => {
        getSelectedBucket(id);
        const obj = document.getElementById("value");
        animateValue(obj, 0, bucket?.total, 1000);

    }, []);

    function animateValue(obj: any, start: any, end: any, duration: any) {
        let startTimestamp: any = null;
        const step = (timestamp: any) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }




    return (
        <div className="bg-[#0B0D10] text-white">

            <div className="w-full mx-auto  grid grid-cols-5">
                <SideBar />

                <div className="w-11/12 mx-auto  py-8 col-span-4">
                    <div className="w-full mx-auto p-8 h-52 bg-emerald-500 rounded-xl heropattern-fourpointstars-gray-600/10">

                        <h1 className="text-[#0B0D10] font-bold text-3xl">Current Expenses </h1>
                        <h1 className="text-[#0B0D10] text-6xl font-bold mt-10">
                            <span id="value">{bucket?.total.toFixed(2)}</span> {bucket?.currency}</h1>

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