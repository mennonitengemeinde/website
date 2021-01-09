import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import http from "http";
import logger from "morgan";

import { PORT } from "./config";

import { homeRouter } from "./routes/home-routes";

const app = express();
const server = http.createServer(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Views
app.use("/", homeRouter);

// error handlers

// development error handler

// Production error handler

server.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
