
// confuguring data
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {}).then(() => {
    console.log("Connected to MongoDB.");
}).catch(error => {
    console.error("Failed to connect to MongoDB. :" + error);
});

module.exports = mongoose;