import React from "react";

import Input from "../input";
import Textarea from "../textarea";
import Datepicker from "../datepicker";
import Button from "../button";

const Form = ({ submitForm, event, changeDate, handleInputChange, setEditing }) => {
  return (
    <form className="col s12" onSubmit={submitForm}>
      <Input
        name="title"
        value={event?event.title:''}
        onChange={handleInputChange}
        label=""
        htmlFor="Title"
        id={event?event._id:null}
      />
      <Textarea
        name="disc"
        value={event?event.disc:''}
        onChange={handleInputChange}
        label=""
        htmlFor="disc"
      />      
      <Datepicker        
        value={event?event.eventDate:''}
        changeDate={changeDate}
        label="Event Date"
        htmlFor="eventDate"        
      />  

      <div className="row">
        <div className="input-field col s12 m6">
          <Button type="submit" text="Update" onClick={null} />
        </div>

        <div className="input-field col s12 m6">          
          <Button type="button" text="Cancel" onClick={() => setEditing(false)} />
        </div>
      </div>
    </form>
  );
};

export default Form;
