import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for the Mongoose Schema

const ContactSchema = new Schema
({
    contactName: String,
    contactNumber: String,
    emailAddress: String,
    
},
{
    collection: "contacts"
});

const Model = mongoose.model("Contact", ContactSchema);
export default Model; 