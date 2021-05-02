import React from "react";

export default function Outlet() {
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-10 col-md-offset-3 col-sm-offset-1">
          <div className="metric-box">
            <div className="row">
              {/* left outlet */}
              <div className="col-md-6 col-sm-12 outlet-status">
                <h3>Left Outlet</h3>
                <div className="d-flex align-items-center">
                  <p>Status</p>
                  <p>Off</p>
                </div>
                <div className="d-flex align-items-center">
                  <p>Power (Watts)</p>
                  <p>0</p>
                </div>
                <div className="d-flex align-items-center">
                  <p>Current</p>
                  <p>0</p>
                </div>
                <div className="d-flex align-items-center">
                  <p>Energy (Wh) current hour</p>
                  <p>0.02</p>
                </div>
              </div>
              {/* end of left outlet */}

              {/* right outlet */}
              <div className="col-md-6 col-sm-12 outlet-status">
                <h3>Right Outlet</h3>
                <div className="d-flex align-items-center">
                  <p>Status</p>
                  <p>On</p>
                </div>
                <div className="d-flex align-items-center">
                  <p>Power (Watts)</p>
                  <p>3.59</p>
                </div>
                <div className="d-flex align-items-center">
                  <p>Current</p>
                  <p>0.02</p>
                </div>
                <div className="d-flex align-items-center">
                  <p>Energy (Wh) current hour</p>
                  <p>3.14</p>
                </div>
              </div>
              {/* end of right outlet */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
