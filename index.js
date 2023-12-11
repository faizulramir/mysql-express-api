const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routes/user");
// include your routers
//const exampleRouter = require("./routes/example");

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// Edit or add routers
// app.use("/example", exampleRouter);

app.use("/user", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Welcome!`);
});