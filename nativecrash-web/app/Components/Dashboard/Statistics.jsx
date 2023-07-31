"use client";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import {
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  filterData,
  getListForGraph,
  dateArrayToEpoch,
} from "../Miscellaneous/HelperFunc";
import { useState, useEffect } from "react";
ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// const labels = [
//   1690266648034, 1690266948022, 1690267248282, 1690267548101, 1690267848001,
//   1690268148102, 1690268448779, 1690269052756,
// ];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Crash Report",
//       data: [500, 2, 3, 10, 50, 60, 700, 10],
//       // backgroundColor: (context) => {
//       //   const bgColors = ["rgba(10,255,10,0.8)", "rgba(0, 0, 0, 0.1)"];
//       //   if (context.chart?.chartArea == undefined) {
//       //     return;
//       //   }
//       //   const {
//       //     ctx,
//       //     data,
//       //     chartArea: { top, bottom },
//       //   } = context.chart;
//       //   var gradient = ctx.createLinearGradient(0,0,0,400);
//       //   gradient.addColorStop(1, bgColors[0]);
//       //   gradient.addColorStop(0, bgColors[1]);
//       //   console.log(gradient);
//       //   return gradient;
//       // },
//       // backgroundColor: gradientColor,
//       borderColor: "rgb(0, 209, 98)",
//       tension: 0.2,
//     },
//   ],
// };

const initialData = {
  labels: [],
  datasets: [
    {
      label: "Crash Report",
      data: [],
      borderColor: "rgb(0, 209, 98)",
      tension: 0.2,
    },
  ],
};

const Statistics = (props) => {
  const { backendData, filterSelected } = props;
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState([]);

  console.log(backendData, filterSelected);

  useEffect(() => {
    if (backendData != null) {
      const filteredData = filterData(backendData, filterSelected);
      console.log("inside stats -->", filteredData);
      setFilteredData(filteredData);

      const graphData = getListForGraph(filteredData, filterSelected);
      setData({
        labels: Object.keys(graphData),
        datasets: [
          {
            label: "Crash Report",
            data: Object.values(graphData),
            borderColor: "rgb(0, 209, 98)",
            tension: 0.2,
          },
        ],
      });
    }
  }, [backendData, filterSelected]);

  const options = {
    responsive: true,
    scales: {
      x: {
        unit: "day",
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Native Crash Report.",
      },
    },
  };

  return <Line options={options} data={data} />; //conditional rendering req
};
// crashesErrors = {}
//

export default Statistics;
