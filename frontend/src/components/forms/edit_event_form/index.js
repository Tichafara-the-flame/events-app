import React, { useState, useEffect } from 'react';
import Form from './form';

const EditCarForm = props => {
    const {setEvents, currentEvent, setEditing, updateEvent, setCurrentEvent} = props;
    const [event, setEvent] = useState(currentEvent);

    const handleInputChange = e => {
        const { name, value } = e.target

        setEvent({ ...event, [name]: value })
    }; 

    const changeDate = v => {                
        setEvent({ ...event, eventDate: v });
    }

    const submitForm = e => {
        e.preventDefault();        
        updateEvent(event._id, event, setEvents, setCurrentEvent, setEditing);
    };

    useEffect(() => {
        setEvent(currentEvent);
    }, [props]);

    return (
        <div className="row">
            <Form
                submitForm={submitForm}
                event={event}
                changeDate={changeDate}
                handleInputChange={handleInputChange}
                setEditing = {setEditing}
            />            
        </div>
    );
};

export default EditCarForm;
