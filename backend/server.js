const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

// handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

// setting up config file
dotenv.config({
  path: "./backend/config/config.env",
});

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`,
  );
});

// handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the serve due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
