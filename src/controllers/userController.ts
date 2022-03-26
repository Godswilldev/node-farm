import { Request, Response, NextFunction } from "express";

// middleware
export const checkIfUserExists = (
  _req: Request,
  res: Response,
  next: NextFunction,
  val: string
) => {
  if (val !== "greg") {
    return res.status(404).json({
      status: "fail",
      message: "No existing user",
    });
  }
  next();
};

export const checkNewUserBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.body.firstname ||
    !req.body.lastname ||
    !req.body.password ||
    req.body.password.length < 6
  ) {
    return res.status(400).json({
      status: "Fail",
      message: "Bad Request",
    });
  }
  next();
};

// USERS //
export const getUsers = (_req: Request, res: Response) =>
  res.status(500).json({
    status: "error",
    message: "Route is not yet defined",
  });

export const addNewUser = (_req: Request, res: Response) =>
  res.status(500).json({
    status: "error",
    message: "Route is not yet defined",
  });

export const getUser = (_req: Request, res: Response) =>
  res.status(500).json({
    status: "error",
    message: "Route is not yet defined",
  });

export const updateUser = (_req: Request, res: Response) =>
  res.status(500).json({
    status: "error",
    message: "Route is not yet defined",
  });

export const deleteUser = (_req: Request, res: Response) =>
  res.status(500).json({
    status: "error",
    message: "Route is not yet defined",
  });
