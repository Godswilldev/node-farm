import express from "express";
import fs from "fs";
import cors from "cors";
const app = express();
app.use(cors());

const PORT = 4200;
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");

interface DataProps {
  id: number | string;
  productName: string;
  image: string;
  from: string;
  nutrients: string[];
  quantity: string;
  price: string;
  organic: boolean;
  description: string;
}
app.get("/farm", (req, res) => res.send("Welcome to node-typescript"));

app.get("/farmDetail", (req, res) =>
  res.send(JSON.parse(data).find((data: DataProps) => data.id == req.query.id))
);
app.get("*", (req, res) => res.send("<h1>Page not found</h1>"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
