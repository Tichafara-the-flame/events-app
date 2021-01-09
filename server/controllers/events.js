import Event from '../models/eventModel.js';
import mongoose from 'mongoose';

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();        
        res.status(200).json(events);    
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createEvent = async (req, res) => {
    const event = req.body;    
    const newEvent = new Event(event);
    try {
        await newEvent.save();
        
        const events = await Event.find();        
        res.status(201).json(
            {
                content: events,
                msg: 'New event created'
            }
        ); 
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

export const updateEvent = async (req, res) => {
    const { id: _id } = req.params;
    const event = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No event with that id');

    const updatedEvent = await Event.findByIdAndUpdate(_id, {...event, _id}, { new: true });
    const events = await Event.find();
    res.json(events);
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No event with that id');

    await Event.findByIdAndRemove(id);

    const events = await Event.find();
    res.json(events);
}