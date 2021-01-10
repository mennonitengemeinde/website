import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import http from "http";
import logger from "morgan";
import mongoose from "mongoose";

import { DBURI, PORT } from "./config";

import { homeRouter } from "./routes/home.routes";
import { churchRouter } from "./routes/church.routes";

const app = express();
const server = http.createServer(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Views
app.use("/", homeRouter);
app.use("/api/v1/churches", churchRouter);

// error handlers

// development error handler

// Production error handler

// DB connection
mongoose
  .connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(
      `Something went wrong trying to connect to the DB with error: ${err}`
    );
  });
