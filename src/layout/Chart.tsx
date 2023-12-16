import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ChartInterface: React.FC<any> = ({ className }) => {
    const [chartData] = useState({

        series: [
            {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            },
        ],
        
        options: {
            chart:{
                toolbar:{
                    show : false
                }
            },
            fill: {
                colors: ['#10B981']
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                colors: ['#10B981']
            },

            xaxis: {
                type: 'datetime',
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z"
                ],
            },
            tooltip: {
                enabled : false,
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },

        } as ApexOptions,
    });

    return <Chart options={chartData.options} series={chartData.series}  type="area" className={className} />;
};

export default ChartInterface;
