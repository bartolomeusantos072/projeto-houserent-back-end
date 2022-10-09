import { Router } from "express";

import userRouter from "./userRouter";
import immovelRentRouter from "./immovelRentRouter";
import viewImmovel from "./viewImmovel";

const router = Router();

router.use(userRouter);
router.use(immovelRentRouter);
router.use(viewImmovel);

export default router;