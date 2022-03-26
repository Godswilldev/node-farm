import dotenv from "dotenv";
import { app } from "./app";

dotenv.config({
  path: "config.env",
});

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));
