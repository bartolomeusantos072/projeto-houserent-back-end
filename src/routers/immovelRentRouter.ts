import { Request, Response, Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware";
import {createImmovelForRentSchema} from "../schemas/createImmovelForRentSchema";
import * as immovelController from "../controllers/immovelController";


const immovelRentRouter = Router();

immovelRentRouter.post("/houserent",validateSchemaMiddleware(createImmovelForRentSchema),ensureAuthenticatedMiddleware, immovelController.createImmovelForRent);
immovelRentRouter.delete("/houserent/:id",ensureAuthenticatedMiddleware,immovelController.deleteImmovelForRent)
immovelRentRouter.delete("/houserent/:id",ensureAuthenticatedMiddleware,immovelController.deleteAllImmovelForRent)
immovelRentRouter.get("/houserent?", immovelController.findAllImmovelForRent)
immovelRentRouter.get("/houserent/:id",immovelController.getImmovelForRentById)

export default immovelRentRouter;