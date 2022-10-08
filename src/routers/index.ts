import { Router } from "express";

import userRouter from "./userRouter";
import immovelRentRouter from "./immovelRentRouter"

const router = Router();

router.use(userRouter);
router.use(immovelRentRouter);

export default router;