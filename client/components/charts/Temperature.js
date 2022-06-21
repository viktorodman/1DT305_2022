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
      text: "Temperature",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Measured in Celsius",
      data: labels.map(() => faker.datatype.number({ min: -40, max: 85 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Temperature = () => {
  return <Line options={options} data={data} />;
};

export default Temperature;
