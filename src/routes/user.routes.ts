import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

const controller = new UserController();

router.get("/", controller.getAllUser);

router.get("/:id", controller.getUserById);

router.post("/register", controller.createUser);

router.put("/:id", controller.updateUser);

router.delete("/:id", controller.deleteUser);

router.post("/login", controller.loginUser);

export default router;

