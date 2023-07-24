"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
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
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const gradientColor = {
  type: "linear",
  x0: 0,
  y0: 0,
  x1: 0,
  y1: 1,
  colorStops: [
    { offset: 0, color: "rgba(126, 234, 184, 1)" },
    { offset: 0.5, color: "rgba(126, 234, 184, 0.7)" },
    { offset: 1, color: "rgba(126, 234, 184, 0)" },
  ],
};
const data = {
  labels,
  datasets: [
    {
      label: "Crash Report",
      data: [100, 200, 300, 1000, 500, 600, 700],
      // backgroundColor: (context) => {
      //   const bgColors = ["rgba(10,255,10,0.8)", "rgba(0, 0, 0, 0.1)"];
      //   if (context.chart?.chartArea == undefined) {
      //     return;
      //   }
      //   const {
      //     ctx,
      //     data,
      //     chartArea: { top, bottom },
      //   } = context.chart;
      //   var gradient = ctx.createLinearGradient(0,0,0,400);
      //   gradient.addColorStop(1, bgColors[0]);
      //   gradient.addColorStop(0, bgColors[1]);
      //   console.log(gradient);
      //   return gradient;
      // },
      backgroundColor: gradientColor,
      borderColor: "rgb(0, 209, 98)",
      tension:0.2,
    },
  ],
};

const Statistics = () => {
  return <Line options={options} data={data}  />;
};

export default Statistics;
