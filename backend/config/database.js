const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://webdevbro:t3l3cast3r@cluster0.mnxty.mongodb.net/shopit?retryWrites=true&w=majority";

const connectDatabase = () => {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(
        `Successfully connected to MongoDB on: ${con.connection.host}.`,
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
