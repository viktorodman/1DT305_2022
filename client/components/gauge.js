// Chart.js
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// React Chart.js 2
import { Doughnut } from "react-chartjs-2";

function gauge() {
  return (
    <div className="w-96 h-96">
      <Doughnut
        data={{
          labels: ["value", "rest"],
          datasets: [
            {
              label: "gauge",
              data: [20, 80],
              backgroundColor: ["Blue", "Gray"],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          elements: {
            arc: {
              borderWidth: 3,
            },
          },
          rotation: 270, // start angle in degrees
          circumference: 180, // sweep angle in degrees
        }}
      />
    </div>
  );
}

export default gauge;
