import { Router } from "express";
import { handleContact } from "../controller/contact.controller";

const router = Router();

router.post("/", handleContact);

export default router;