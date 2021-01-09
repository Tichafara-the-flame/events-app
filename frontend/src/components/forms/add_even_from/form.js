import React from "react";

import Input from "../input";
import Textarea from "../textarea";
import Datepicker from "../datepicker";
import Button from "../button";

const Form = ({ submitForm, event1, changeDate,  handleInputChange }) => {
  return (
    <form className="col s12" onSubmit={submitForm}>
      <Input
        name="title"
        value={event1.title}
        onChange={handleInputChange}
        label="Title"
        htmlFor="title"
      /> 
      <Textarea
        name="disc"
        value={event1.disc}
        onChange={handleInputChange}
        label="Disc"
        htmlFor="disc"
      />      
      <Datepicker        
        value={event1.eventDate}
        changeDate={changeDate}
        label="Event Date"
        htmlFor="eventDate"        
      />      
      <div className="row">
        <div className="input-field col s12">
          <Button type="submit" text="Add" onClick={null} />
        </div>
      </div>
    </form>
  );
};

export default Form;
