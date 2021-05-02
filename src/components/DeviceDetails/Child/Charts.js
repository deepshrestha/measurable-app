import React from "react";

export default function Charts() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="metric-box chart">
            <p className="text-left">Energy(Wh) - Apr 29, 2021</p>
            <canvas id="barChart" width="400" height="50"></canvas>
          </div>

          <div className="metric-box chart">
            <p className="text-left">Power (Watts) 08:00 - 09:00</p>
            <canvas id="lineChart" width="400" height="50"></canvas>
          </div>

          <div className="metric-box chart">
            <p className="text-left">Power (Watts) 08:50 - 08:59</p>
            <canvas id="lineChart1" width="400" height="50"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
