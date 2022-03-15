import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import tourRouter from "./Routes/tourRoutes";
import usersRouter from "./Routes/userRoutes";

dotenv.config({
  path: "config.env",
});

const app = express();

process.env.NODE_ENV === "development" && app.use(morgan("dev"));

app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", usersRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
