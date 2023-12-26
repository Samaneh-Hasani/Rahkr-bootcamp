const express = require("express");
const cors = require("cors");
const app = express();
const taskRoutes = require("./Routes/taskRouter");

app.use(cors());
app.use(express.json());
app.use("/taskadd", taskRoutes);
app.use("/taskshow", taskRoutes);

app.listen(3133, () => {
  console.log("Server is listening on port");
});
