import morgan from "morgan";
import tourRouter from "./routes/tourRoutes";
import usersRouter from "./routes/userRoutes";
import express from "express";

export const app = express();

// middleware to log each request to the console
process.env.NODE_ENV === "development" && app.use(morgan("dev"));

// to get access to the request body e.g request parameters. body-parser can also be used in place of this
app.use(express.json());

// to be able to serve static files
app.use(express.static("public"));

// router middlewares
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", usersRouter);
