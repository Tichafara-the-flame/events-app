import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: String,
    disc: String,
    eventDate: Date,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;