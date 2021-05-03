import React, { useState, useEffect } from "react";

export default function Details() {
  const [detail, setDetail] = useState("");

  function fetchDeviceDetails() {
    fetch("http://www.json-generator.com/api/json/get/bURULQppxK?indent=2")
      .then(function (response) {
        return response.json();
      })
      .then(function (obj) {
        setDetail(obj);
      });
  }

  useEffect(() => {
    fetchDeviceDetails();
  }, []);

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
              <div className="col-sm-9">
                {detail && <span>{detail.dan_staging_1.device_number}</span>}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">Name</div>
              <div className="col-sm-9">
                {detail && <span>{detail.dan_staging_1.name}</span>}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">Type</div>
              <div className="col-sm-9">
                {detail && <span>{detail.dan_staging_1.type}</span>}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">Location</div>
              <div className="col-sm-9">
                {detail && detail.dan_staging_1.location ? (
                  <span>{detail.dan_staging_1.location}</span>
                ) : (
                  "__"
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">Last seen</div>
              <div className="col-sm-9">
                {detail && <span>{detail.dan_staging_1.last_seen}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
