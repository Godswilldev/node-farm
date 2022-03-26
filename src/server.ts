import dotenv from "dotenv";
import express from "express";

export const app = express();

dotenv.config({
  path: "config.env",
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
