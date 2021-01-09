import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const myDatePicker = ({ name, value, changeDate, label, htmlFor, id }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <DatePicker
          id={id}
          name={name}          
          onChange={date => changeDate(date)}
          selected={value}
          required
          className="materialize-textarea"           
        />
        <label class="active" htmlFor={htmlFor}>{ label }</label>
      </div>
    </div>
  );
};

export default myDatePicker;
