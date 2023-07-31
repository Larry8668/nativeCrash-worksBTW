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
import { filterData, getListForGraph } from "../Miscellaneous/HelperFunc";
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

const initialData = {
  labels: [],
  datasets: [
    {
      label: "Crash Report",
      data: [],
      borderColor: "rgb(0, 209, 98)",
      tension: 0.2,
      backgroundColor: "rgba(75, 192, 192, 0.2)", // End color with opacity
      fill: true, // To fill the area under the line with the gradient
    },
  ],
};

const Statistics = (props) => {
  const { backendData, filterSelected } = props;
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState([]);

  // console.log(backendData, filterSelected);
  // const filteredData = filterData(backendData, filterSelected);
  // getHourlyCount(filteredData);
  // getWeeklyCount(filteredData);
  // getMonthlyCount(filteredData);

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
            backgroundColor: "rgba(75, 192, 192, 0.2)", // End color with opacity
            fill: true, // To fill the area under the line with the gradient
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
  //conditional rendering req
  return (
    <div className="flex justify-center items-center w-[full] h-[80vh]">
      <Line options={options} data={data} />
    </div>
  );
};
// crashesErrors = {}
//

export default Statistics;
