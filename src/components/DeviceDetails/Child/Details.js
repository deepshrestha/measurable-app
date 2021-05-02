import React from "react";

export default function Details() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex align-items-center justify-content-end actions">
            <select name="" id="">
              <option>Select Action</option>
              <optgroup label="Device">
                <option value="">Device Status</option>
                <option value="">Device Status Sync</option>
                <option value="">Update Firmware</option>
              </optgroup>
            </select>

            <button className="btn btn-primary" disabled>
              <i data-icon="play" className="icon"></i>
            </button>
            <button className="btn btn-secondary">
              <i data-icon="trash" className="icon"></i>
            </button>
            <a href="#" className="btn btn-primary">
              <i data-icon="edit" className="icon"></i>
            </a>
          </div>

          <div className="metric-box device-details">
            <div className="row">
              <div className="col-sm-3">Device ID*</div>
              <div className="col-sm-9">dan_staging_1</div>
            </div>

            <div className="row">
              <div className="col-sm-3">Name</div>
              <div className="col-sm-9">dan_staging_1</div>
            </div>

            <div className="row">
              <div className="col-sm-3">Type</div>
              <div className="col-sm-9">m.e Power Socket Dual</div>
            </div>

            <div className="row">
              <div className="col-sm-3">Location</div>
              <div className="col-sm-9">__</div>
            </div>

            <div className="row">
              <div className="col-sm-3">Last seen</div>
              <div className="col-sm-9">29-04-2021 08:57:15</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
