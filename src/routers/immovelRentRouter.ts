import { Request, Response, Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware";
import {createImmovelForRentSchema} from "../schemas/createImmovelForRentSchema";
import * as immovelController from "../controllers/immovelController";


const immovelRentRouter = Router();

immovelRentRouter.get("/houserent?", immovelController.getQueryImmovelForRent)
immovelRentRouter.get("/houserent/:houseId",immovelController.getImmovelForRentById)
immovelRentRouter.post("/houserent",ensureAuthenticatedMiddleware,validateSchemaMiddleware(createImmovelForRentSchema), immovelController.createImmovelForRent);
immovelRentRouter.delete("/houserent/:id",ensureAuthenticatedMiddleware,immovelController.deleteImmovelForRent)
immovelRentRouter.delete("/houserent/:id",ensureAuthenticatedMiddleware,immovelController.deleteAllImmovelForRent)

export default immovelRentRouter;