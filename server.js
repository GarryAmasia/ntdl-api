import "dotenv/config";

import express from "express";

const app = express();
const PORT = 8000;

//connect to mongoDB
import { connectMongoDB } from "./src/config/dbConfig.js";
connectMongoDB();

// convert incoming json object and make it available in req.body
app.use(express.json());

//task api endpoint
//-----------------------------------------------------------
import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/tasks", taskRouter);

//---------------------------------------------------------
app.get("/", (req, res) => {
  res.json({
    message: "you have reached ntd api server",
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is running on http://localhost:${PORT}`);
  }
});
