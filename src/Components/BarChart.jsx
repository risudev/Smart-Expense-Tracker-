// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     // plugins,
// } from "chart.js";
// //import { userContext } from "../Context/userContext.jsx";

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );
// const BarChart = ({ chartData }) => {
//     return (
//         <div>
//             <h2 className="text-center bg-neutral rounded-md text-neutral-content">
//                 Expense Tracker
//             </h2>
//             <Bar
//                 data={chartData}
//                 options={{
//                     plugins: {
//                         title: {
//                             display: true,
//                             text: "Expense Category wise",
//                         },
//                         legend: {
//                             display: true,
//                             position: "top",
//                         },
//                     },
//                     responsive: true,
//                 }}
//             />
//         </div>
//     );
// };

// export default BarChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = ({ chartData }) => {
    // Clone chartData to override color safely
    const modifiedChartData = {
        ...chartData,
        datasets: chartData.datasets.map(dataset => ({
            ...dataset,
            backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo-500 with opacity
            borderColor: 'rgba(99, 102, 241, 1)',        // Optional border
            borderWidth: 1,
        }))
    };

    return (
        <div>
            <h2 className="text-center bg-neutral rounded-md text-neutral-content">
                Expense Tracker
            </h2>
            <Bar
                data={modifiedChartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Expense Category wise",
                        },
                        legend: {
                            display: true,
                            position: "top",
                        },
                    },
                    responsive: true,
                }}
            />
        </div>
    );
};

export default BarChart;
