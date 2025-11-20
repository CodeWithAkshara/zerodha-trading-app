require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { PositionsModel } = require("./models/PositionsModel");
const { HoldingsModel } = require("./models/HoldingsModel");
const { OrdersModel } = require("./models/OrdersModel");
console.log("Server index.js loaded");
console.log("Loading AuthRoute...");
const authRoute = require("./Routes/AuthRoute.js");
console.log("AuthRoute import DONE");

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  await newOrder.save();
  res.send("Order saved");
});

app.listen(PORT, () => {
  mongoose.connect(URL);
  console.log("Server started on port", PORT);
});
