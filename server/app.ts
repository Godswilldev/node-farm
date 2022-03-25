import morgan from "morgan";
import express from "express";
import { app } from "server/server";
import tourRouter from "server/Routes/tourRoutes";
import usersRouter from "server/Routes/userRoutes";

// middleware to log each request to the console
process.env.NODE_ENV === "development" && app.use(morgan("dev"));

// to get access to the request body e.g request parameters. body-parser can also be used in place of this
app.use(express.json());

// to be able to serve static files
app.use(express.static("public"));

// router middlewares
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", usersRouter);
