import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import {Line} from "react-chartjs-2";
import 'chart.js/auto';

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const LineChart = () =>
    {
    return
        (
        <div>
            <Line data={data} />
        </div>    
        )    
    }

    export default LineChart;