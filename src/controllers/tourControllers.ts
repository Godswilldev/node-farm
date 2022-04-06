import Tour from "../models/tourModel";
import { Request, Response } from "express";

export const getALlTours = async (req: Request, res: Response) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "Success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error,
    });
  }
};

export const getSingleTour = async (req: Request, res: Response) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: "Invalid Id",
    });
  }
};

// add new tour
export const createTour = async (req: Request, res: Response) => {
  try {
    const tour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

export const updateTour = async (req: Request, res: Response) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      message: "Tour updated successfully",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

// Delete tour
export const deleteTour = async (req: Request, res: Response) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};
