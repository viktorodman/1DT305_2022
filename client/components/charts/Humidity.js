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
      text: "Humidity",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Measured in percent",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const Humidity = () => {
  return <Line options={options} data={data} />;
};

export default Humidity;
