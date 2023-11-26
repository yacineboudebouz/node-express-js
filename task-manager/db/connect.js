const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();
password = process.env.PASSWORD;

const connectionString = `mongodb+srv://yacineboudebbouz7:${password}@mernchat.cvje3my.mongodb.net/?retryWrites=true&w=majority`;
const connectDB = () => {
  return mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Connected to the database !");
    })
    .catch((error) => {
      console.log("Unable to connect to the database !");
      console.log(error);
    });
};

module.exports = connectDB;
