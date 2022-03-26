import express from "express";
import {
  getUser,
  getUsers,
  addNewUser,
  updateUser,
  deleteUser,
  checkNewUserBody,
  checkIfUserExists,
} from "../controllers/userController";

const router = express.Router();

router.param("id", (req, res, next, val) =>
  checkIfUserExists(req, res, next, val)
);

router.route("/").get(getUsers).post(checkNewUserBody, addNewUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
