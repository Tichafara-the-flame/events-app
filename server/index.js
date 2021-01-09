import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import eventRoutes from "./routes/events.js";

// set up express
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// set up routes
app.get("/", (req, res) => {
    res.send("Hello to events API");
});
app.use("/events", eventRoutes);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// set up mongoose
mongoose.connect(
  process.env.CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection is established");
  }
);

mongoose.set("useFindAndModify", false);

export default app;