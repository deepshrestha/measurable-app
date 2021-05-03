import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";

export default function Charts() {
  const [chartData, setChartData] = useState("");
  const [barChartLabel, setBarChartLabel] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  function fetchBarChartData() {
    fetch("http://www.json-generator.com/api/json/get/cpNLZyYJsO?indent=2")
      .then(function (response) {
        return response.json();
      })
      .then(function (obj) {
        setBarChartLabel(obj.data.graphData.device_timestamp);
        setBarChartData(obj.data.graphData.device_kiloWattHours);
        setChartData(obj.data);
      });
  }

  useEffect(() => {
    fetchBarChartData();
  }, []);

  const barChart = {
    labels: barChartLabel,
    datasets: [
      {
        data: barChartData,
        backgroundColor: ["#FF8C2E"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="metric-box chart">
            <p className="text-left">
              Energy(Wh) - {chartData.nowUserTimeZoneDateMonthDayYearFormatted}
            </p>
            <Bar data={barChart} width="400" height="50" options={options} />
          </div>

          {/* <div className="metric-box chart">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
