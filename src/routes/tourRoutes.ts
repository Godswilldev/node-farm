import express from "express";
import {
  checkId,
  checkBody,
  updateTour,
  deleteTour,
  addNewTour,
  getALlTours,
  getSingleTour,
} from "../controllers/tourControllers";

const router = express.Router();

// param middleware to check if the id is valid
router.param("id", (req, res, next, val) => checkId(req, res, next, val));

// routes
router.route("/").get(getALlTours).post(checkBody, addNewTour);
router.route("/:id").get(getSingleTour).patch(updateTour).delete(deleteTour);

export default router;
