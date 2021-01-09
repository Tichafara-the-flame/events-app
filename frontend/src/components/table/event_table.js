import React from "react";
import moment from "moment";

const EventTable = (props) => {
  const {
    events,
    setCurrentEvent,
    setEditing,
    setEvents,
    deleteEvent,
    editRow,
  } = props;
  const showtableData = () => {
    if (events) {
      return events.length > 0 && events ? (
        events.map((event) => (
          <tr key={event._id}>
            <td>{event.title}</td>
            <td>{event.disc}</td>
            <td>{moment(event.eventDate).format("LLLL")}</td>
            <td className="center-align">
              <button
                className="waves-effect waves-light btn-small"
                onClick={() => editRow(event, setCurrentEvent, setEditing)}
              >
                edit
              </button>
              &nbsp;&nbsp;
              <button
                style={{ marginTop: "5px" }}
                className="waves-effect waves-light btn-small red darken-4"
                onClick={() => deleteEvent(event._id, setEvents)}
              >
                cancel
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>{events[0]} No Events</td>
        </tr>
      );
    }
  };
  return (
    <table className="responsive-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Event_Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default EventTable;
