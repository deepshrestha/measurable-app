import React from "react";

export default function OnOffControl() {
  return (
    <>
      <div className="col-md-4 col-xs-12">
        <div className="metric-box on-off-controls">
          <h5 className="text-center">On/Off Control</h5>
          <div className="text-center">
            <span>All Outlets</span>
            <label className="toggle">
              <input type="checkbox" />
              <span></span>
            </label>
          </div>
          <div className="d-flex justify-content-between">
            <div className="outlet-side text-center">
              <span>Left Outlet</span>
              <label className="toggle">
                <input type="checkbox" />
                <span></span>
              </label>
            </div>

            <div className="outlet-side text-center">
              <span>Right Outlet</span>
              <label className="toggle">
                <input type="checkbox" />
                <span></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
