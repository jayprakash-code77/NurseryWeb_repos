
// confuguring data
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Nursery", {}).then(() => {
    console.log("Connected to MongoDB.");
}).catch(error => {
    console.error("Failed to connect to MongoDB. :" + error);
});

module.exports = mongoose;