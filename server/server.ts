const express = require("express");
const app = express();
const PORT = 4200;
app.get("/", (req: any, res: { send: (arg0: string) => any }) =>
  res.send("Welcome to nodejs and typescript")
);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
