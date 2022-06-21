// // Chart.js
// import {
//   Chart,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";

// Chart.register(
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

// // React Chart.js 2
// import { Doughnut } from "react-chartjs-2";

// const options = {
//   responsive: true,
//   rotation: 270, // start angle in degrees
//   circumference: 180, // sweep angle in degrees
// };

// const labels = ["value", "rest"];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Measured in hPa",
//       data: [300, 1100],
//       backgroundColor: ["Blue", "Gray"],
//       hoverOffset: 4,
//     },
//   ],
// };

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

import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Pressure",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Measured in hPa",
      data: labels.map(() => faker.datatype.number({ min: 300, max: 1100 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Pressure = () => {
  return <Line options={options} data={data} />;
};

export default Pressure;
