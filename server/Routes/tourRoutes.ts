import express from "express";
import {
  getALlTours,
  addNewTour,
  getSingleTour,
  updateTour,
  deleteTour,
  checkId,
  checkBody,
} from "../Controllers/tourControllers";

const router = express.Router();

router.param("id", (req, res, next, val) => checkId(req, res, next, val));

router.route("/").get(getALlTours).post(checkBody, addNewTour);
router.route("/:id").get(getSingleTour).patch(updateTour).delete(deleteTour);

export default router;
