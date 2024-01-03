const express = require("express");
const cors = require("cors");
const app = express();
const taskRoutes = require("./Routes/taskRouter");
const loginRoutes = require("./Routes/loginRouter");
const registerRoutes = require("./Routes/registerRouter");

app.use(cors());
app.use(express.json());
app.use("/taskadd", taskRoutes);
app.use("/taskshow", taskRoutes);
app.use("/login", loginRoutes);

app.use("/register", registerRoutes);

app.listen(3133, () => {
  console.log("Server is listening on port");
});
