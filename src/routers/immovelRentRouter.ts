import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware";
import { createImmovelForRentSchema } from "../schemas/createImmovelForRentSchema";
import { availabilityImmovelSchema } from "../schemas/availabilityImmovelSchema";
import * as immovelController from "../controllers/immovelController";


const immovelRentRouter = Router();

immovelRentRouter.get("/houserent", ensureAuthenticatedMiddleware, immovelController.findAllImmovelForRent)
immovelRentRouter.get("/houserent/myimmovels/:houseId", ensureAuthenticatedMiddleware, immovelController.findImmovelForRentById)
immovelRentRouter.post("/houserent", ensureAuthenticatedMiddleware, validateSchemaMiddleware(createImmovelForRentSchema), immovelController.createImmovelForRent);
immovelRentRouter.put("/houserent/:houseId", ensureAuthenticatedMiddleware, validateSchemaMiddleware(availabilityImmovelSchema), immovelController.availabilityImmovelForRent);
immovelRentRouter.delete("/houserent/all",ensureAuthenticatedMiddleware,immovelController.deleteAllImmovelForRent)
immovelRentRouter.delete("/houserent/:houseId",ensureAuthenticatedMiddleware,immovelController.deleteImmovelForRent)

export default immovelRentRouter;