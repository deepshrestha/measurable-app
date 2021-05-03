import React from "react";
import { Bar, Line } from "react-chartjs-2";

export default function Charts() {
  const barChartData = {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        data: [3.7, 3.7, 3.7, 3.8, 3.7, 3.7, 3.6, 3.6, 3.42],
        backgroundColor: [
          "#FF8C2E",
          "#FF8C2E",
          "#FF8C2E",
          "#FF8C2E",
          "#FF8C2E",
          "#FF8C2E",
          "#FF8C2E",
          "#FF8C2E",
          "#FF8C2E",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
  };

  const lineChartData = {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
      "32",
      "33",
      "34",
      "35",
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "58",
      "59",
    ],
    datasets: [
      {
        label: "left_outlet(latest hour)",
        data: [
          0,
          0.1,
          0,
          0.1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0.1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
        ],
        borderColor: ["#90ED7D"],
        backgroundColor: ["#90ED7D"],
      },
      {
        label: "right_outlet(latest hour)",
        data: [
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
          3.6,
        ],
        borderColor: ["#7DAEED"],
        backgroundColor: ["#7DAEED"],
      },
    ],
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="metric-box chart">
            <p className="text-left">Energy(Wh) - Apr 29, 2021</p>
            <Bar
              data={barChartData}
              width="400"
              height="50"
              options={options}
            />
          </div>

          <div className="metric-box chart">
            <p className="text-left">Power (Watts) 08:00 - 09:00</p>
            <Line
              data={lineChartData}
              width={400}
              height={50}
              options={{ maintainAspectRatio: true }}
            />
          </div>

          <div className="metric-box chart">
            <p className="text-left">Power (Watts) 08:50 - 08:59</p>
            <Line
              data={lineChartData}
              width={400}
              height={50}
              options={{ maintainAspectRatio: true }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
