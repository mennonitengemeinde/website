import { Request, Response, NextFunction } from "express";

import { Church } from "../models/church.model";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const church = await Church.create({
      name: req.body.name,
      street: req.body.street,
      city: req.body.city,
      province: req.body.province,
      country: req.body.country,
      mixlrUrl: req.body.mixlrUrl,
    });
    res.status(201).json(church);
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Runing getall in churches");
    const churches = await Church.find({});
    res.status(200).json(churches);
  } catch (error) {
    console.log(error);
  }
};
