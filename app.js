const express = require("express");
//const { append } = require("express/lib/response");
const { usersRouter } = require("./Routes/userRoutes");
const { repairRouter } = require("./Routes/repairtRoutes");

//Conectdb
const { db } = require("./Conectdb/dataBase");

const app = express();

// Enable incoming JSON data
app.use(express.json());

//enpoints
//http://localhost:4090/api/v1/users
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/repairs", repairRouter);

db.authenticate()
  .then(() => console.log("DataBase authenticate"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

// Spin up server
const PORT = 4090;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
