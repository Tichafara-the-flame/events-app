import React from "react";
import moment from "moment";

const Event = ({ title, disc, eventDate }) => {
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{title}</span>
            <p>{disc}</p>
          </div>
          <div className="card-action">
            Event Date:{" "}
            <span style={{ color: "#ff9100" }}>
              {moment(eventDate).format("LLLL")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
