import React from "react";
import CarbonIntensity from "./Child/CarbonIntensity";
import Charts from "./Child/Charts";
import Details from "./Child/Details";
import DownloadData from "./Child/DownloadData";
import OnOffControl from "./Child/OnOffControl";
import Outlet from "./Child/Outlet";

const DeviceDetails = (props) => {
  // console.log(props);
  return (
    <div className="user-dashboard">
      <div className="inner-content device-details-metrics">
        <h1>dan_staging_1 - dan_staging_1 Details</h1>
        <div className="row d-flex">
          {/* on/off control */}
          <OnOffControl />
          {/* end on/off control */}

          {/* current Carbon intensity */}
          <CarbonIntensity />
          {/* end current carbon intensity */}

          {/* download data */}
          <DownloadData />
          {/* end download data */}
        </div>
        <div className="clearfix">&nbsp;</div>

        {/* charts */}
        <Charts />
        {/* end of charts */}

        {/* outlet status */}
        <Outlet />
        {/* end of outlet status */}

        {/* device details */}
        <Details />
        {/* end of device details */}
      </div>
    </div>
  );
};

export default DeviceDetails;
