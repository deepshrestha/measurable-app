import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";

export default function Charts() {
  const [chartData, setChartData] = useState("");
  const [barChartLabel, setBarChartLabel] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  // first chart
  const [lineChartOneTitle, setLineChartOneTitle] = useState("");
  const [
    lineChartOneFirstBorderColor,
    setLineChartOneFirstBorderColor,
  ] = useState("");
  const [lineChartOneFirstLabel, setLineChartOneFirstLabel] = useState("");
  const [
    lineChartOneFirstBackgroundColor,
    setLineChartOneFirstBackgroundColor,
  ] = useState("");

  const [
    lineChartOneSecondBorderColor,
    setLineChartOneSecondBorderColor,
  ] = useState("");
  const [lineChartOneSecondLabel, setLineChartOneSecondLabel] = useState("");
  const [
    lineChartOneSecondBackgroundColor,
    setLineChartOneSecondBackgroundColor,
  ] = useState("");

  const [lineChartOneGraphLabel, setLineChartOneGraphLabel] = useState([]);
  const [
    lineChartOneLeftOutletDataSet,
    setLineChartOneLeftOutletDataSet,
  ] = useState([]);
  const [
    lineChartOneRightOutletDataSet,
    setLineChartOneRightOutletDataSet,
  ] = useState([]);

  // Second chart
  const [lineChartTwoTitle, setLineChartTwoTitle] = useState("");
  const [
    lineChartTwoFirstBorderColor,
    setLineChartTwoFirstBorderColor,
  ] = useState("");
  const [lineChartTwoFirstLabel, setLineChartTwoFirstLabel] = useState("");
  const [
    lineChartTwoFirstBackgroundColor,
    setLineChartTwoFirstBackgroundColor,
  ] = useState("");

  const [
    lineChartTwoSecondBorderColor,
    setLineChartTwoSecondBorderColor,
  ] = useState("");
  const [lineChartTwoSecondLabel, setLineChartTwoSecondLabel] = useState("");
  const [
    lineChartTwoSecondBackgroundColor,
    setLineChartTwoSecondBackgroundColor,
  ] = useState("");
  const [lineChartTwoGraphLabel, setLineChartTwoGraphLabel] = useState([]);
  const [
    lineChartTwoLeftOutletDataSet,
    setLineChartTwoLeftOutletDataSet,
  ] = useState([]);
  const [
    lineChartTwoRightOutletDataSet,
    setLineChartTwoRightOutletDataSet,
  ] = useState([]);

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

  function fetchLineChartOneData() {
    fetch("http://www.json-generator.com/api/json/get/cfqkBbCmgi?indent=2")
      .then(function (response) {
        return response.json();
      })
      .then(function (obj) {
        setLineChartOneGraphLabel(obj.xAxis_labels);
        setLineChartOneTitle(obj.title);
        setLineChartOneLeftOutletDataSet(obj.series[0].data);
        setLineChartOneFirstLabel(obj.series[0].label);
        setLineChartOneFirstBorderColor(obj.series[0].borderColor);
        setLineChartOneFirstBackgroundColor(obj.series[0].backgroundColor);

        setLineChartOneRightOutletDataSet(obj.series[1].data);
        setLineChartOneSecondLabel(obj.series[1].label);
        setLineChartOneSecondBorderColor(obj.series[1].borderColor);
        setLineChartOneSecondBackgroundColor(obj.series[1].backgroundColor);
      });
  }

  function fetchLineChartTwoData() {
    fetch("http://www.json-generator.com/api/json/get/bUxCsdCnQO?indent=2")
      .then(function (response) {
        return response.json();
      })
      .then(function (obj) {
        setLineChartTwoGraphLabel(obj.xAxis_labels);
        setLineChartTwoTitle(obj.title);
        setLineChartTwoLeftOutletDataSet(obj.series[0].data);
        setLineChartTwoFirstLabel(obj.series[0].label);
        setLineChartTwoFirstBorderColor(obj.series[0].borderColor);
        setLineChartTwoFirstBackgroundColor(obj.series[0].backgroundColor);

        setLineChartTwoRightOutletDataSet(obj.series[1].data);
        setLineChartTwoSecondLabel(obj.series[1].label);
        setLineChartTwoSecondBorderColor(obj.series[1].borderColor);
        setLineChartTwoSecondBackgroundColor(obj.series[1].backgroundColor);
      });
  }

  useEffect(() => {
    fetchBarChartData();
    fetchLineChartOneData();
    fetchLineChartTwoData();
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

  const lineChartOne = {
    labels: lineChartOneGraphLabel,
    datasets: [
      {
        label: lineChartOneFirstLabel,
        data: lineChartOneLeftOutletDataSet,
        borderColor: lineChartOneFirstBorderColor,
        backgroundColor: lineChartOneFirstBackgroundColor,
      },
      {
        label: lineChartOneSecondLabel,
        data: lineChartOneRightOutletDataSet,
        borderColor: lineChartOneSecondBorderColor,
        backgroundColor: lineChartOneSecondBackgroundColor,
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

  const lineChartTwo = {
    labels: lineChartTwoGraphLabel,
    datasets: [
      {
        label: lineChartTwoFirstLabel,
        data: lineChartTwoLeftOutletDataSet,
        borderColor: lineChartTwoFirstBorderColor,
        backgroundColor: lineChartTwoFirstBackgroundColor,
      },
      {
        label: lineChartTwoSecondLabel,
        data: lineChartTwoRightOutletDataSet,
        borderColor: lineChartTwoSecondBorderColor,
        backgroundColor: lineChartTwoSecondBackgroundColor,
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
            <p className="text-left">
              Energy(Wh) - {chartData.nowUserTimeZoneDateMonthDayYearFormatted}
            </p>
            <Bar data={barChart} width="400" height="50" options={options} />
          </div>

          <div className="metric-box chart">
            <p className="text-left">{lineChartOneTitle}</p>
            <Line
              data={lineChartOne}
              width={400}
              height={50}
              options={{ maintainAspectRatio: true }}
            />
          </div>

          <div className="metric-box chart">
            <p className="text-left">{lineChartTwoTitle}</p>
            <Line
              data={lineChartTwo}
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
