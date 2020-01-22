import mongoose from 'mongoose'

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema

const apiSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first Name',
    },
    lastName: {
        type: String,
        required: 'Enter a last Name',
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
})

export default apiSchema
