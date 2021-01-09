import React, { useState } from 'react';

import Form from './form';

const AddUserForm = props => {
    const {setEvents, addEvent} = props;

    const initialFormState = { title: '', disc: '', eventDate: new Date() };
    const [event1, setEvent1] = useState(initialFormState);

    const handleInputChange = e => {
        const {name, value} = e.target;        
        setEvent1({ ...event1, [name]: value });
    }

    const changeDate = v => {                
        setEvent1({ ...event1, eventDate: v });
    }


    const submitForm = e => { 
        e.preventDefault();
        if (!event1.title || !event1.disc) return;
        console.log(event1)
        addEvent(event1, setEvents);        
        setEvent1(initialFormState);
    };

    return (
        <div className="row">
            <Form
                submitForm={submitForm}
                event1={event1}
                changeDate={changeDate}
                handleInputChange={handleInputChange}
            />            
        </div>
    );
};

export default AddUserForm;
