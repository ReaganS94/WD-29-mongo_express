const mongoose = require('mongoose');

// const { Schema } = mongoose;

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 255
    },
    firstName: {
        type: String,
        minLength: 2,
        maxLength: 255
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please use a valid email"]
    }

})

module.exports = mongoose.model("Student", StudentSchema)