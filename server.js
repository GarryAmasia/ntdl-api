import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({
    message: "you have reached ntd api server",
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is runing on http://localhost:${PORT}`);
  }
});
