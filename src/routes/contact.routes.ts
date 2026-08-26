import { Router } from "express";
import { ContactController } from "../controllers/contact.controller";

const router = Router();

const controller = new ContactController();

router.get("/", controller.getAllContacts);

router.get("/:id", controller.getContactById);

router.post("/", controller.createContact);

router.put("/:id", controller.updateContact);

router.delete("/:id", controller.deleteContact);

export default router;

