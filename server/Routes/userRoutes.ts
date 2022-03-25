import express from "express";
import {
  getUser,
  getUsers,
  addNewUser,
  updateUser,
  deleteUser,
} from "server/Controllers/userController";

const router = express.Router();

router.param("id", (_req, _res, next, _val) => {
  next();
});

router.route("/").get(getUsers).post(addNewUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
