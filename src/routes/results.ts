import { Router } from "express";
import { loggedIn } from "../middleware/auth";
import * as controller from '../controllers/result'

const router = Router();

router.post("/",loggedIn, controller.uploadResult);
router.put("/:id",loggedIn, controller.EditResult)


export default router;
