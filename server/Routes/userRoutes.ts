import express from "express";
import {
  getUsers,
  addNewUser,
  getUser,
  updateUser,
  deleteUser,
} from "../Controllers/userController";

const router = express.Router();

router.param("id", (req, res, next, val) => {
  next();
});

router.route("/").get(getUsers).post(addNewUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
