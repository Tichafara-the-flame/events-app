import api from "../services/api";
import axios from "axios";
import { baseURL } from "../config";

export const getAllEvents = (setEvents) => {
  api
    .get(`${baseURL}events/`)
    .then((response) => response.data)
    .then((data) => {
      setEvents(data);
    });
};

export const addEvent = (event, setEvents) => {
  console.log(event);
  axios
    .post(`${baseURL}events/`, event)
    .then((response) => response.data)
    .then((data) => {
      setEvents(data.content);
    });
};

export const deleteEvent = (id, setEvents) => {
  console.log(id)
  axios.delete(`${baseURL}events/${id}`).then((res) => {
    setEvents(res.data);
  });
};

export const updateEvent = (id, event, setEvents, setCurrentEvent, setEditing) => {

  axios.patch(`${baseURL}events/${event.id}`, event).then((res) => {
    setEvents(res.data);
  });
  setCurrentEvent({
    id: null,
    model: "",
    make: "",
    registration_no: "",
    current_owner: "",
  });
  setEditing(false);
};

export const editRow = (event, setCurrentEvent, setEditing) => {
  console.log(event)
  setCurrentEvent({
    id: event._id,
    title: event.title,
    disc: event.disc,
    eventDate: new Date(event.eventDate)
  });
  setEditing(true);
};
