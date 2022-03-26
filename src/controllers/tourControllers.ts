import { NextFunction, Request, Response } from "express";
import QueryString from "qs";
import fs from "fs";

const tours = JSON.parse(
  fs.readFileSync(`dev-data/data/tours-simple.json`, "utf-8")
);

export const checkId = (
  req: Request,
  res: Response,
  next: NextFunction,
  val: string
) => {
  if (+val > tours.length - 1) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });
  }
  next();
};

export const checkBody = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "Failed",
      message: "bad request",
    });
  }
  next();
};

export const getALlTours = (
  req: Request<{}, any, any, QueryString.ParsedQs, Record<string, any>>,
  res: Response
) =>
  res.status(200).json({
    status: "success",
    results: tours.length,
    data: {
      tours,
    },
  });

export const getSingleTour = (
  req: Request<
    {
      id: string;
    },
    any,
    any,
    QueryString.ParsedQs,
    Record<string, any>
  >,
  res: Response
) =>
  res.status(200).json({
    status: "success",
    data: {
      tour: tours.find((tour: { id: number }) => tour.id === +req.params.id),
    },
  });

// add new tour

export const addNewTour = (req: Request, res: Response) => {
  const id = tours[tours.length - 1].id + 1;
  const newTour = { id, ...req.body };
  const newTours = [...tours, newTour];

  fs.writeFile(
    "dev-data/data/tours-simple.json",
    JSON.stringify(newTours),
    (_err) =>
      res.status(201).json({
        status: "Tour created Successfully",
        data: {
          tour: newTour,
        },
      })
  );
};

export const updateTour = (req: Request, res: Response) =>
  res.status(200).json({
    status: "success",
    message: "Tour updated successfully",
  });

// Delete tour
export const deleteTour = (req: Request, res: Response) =>
  res.status(204).json({
    status: "success",
    data: null,
  });
