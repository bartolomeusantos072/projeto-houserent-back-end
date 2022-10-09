import { Request, Response, Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware";
import {createImmovelForRentSchema} from "../schemas/createImmovelForRentSchema";
import * as viewImmovel from "../controllers/viewImmovelController";


const immovelRentRouter = Router();

immovelRentRouter.get("/viewhouserent?", viewImmovel.getQueryImmovelForRent)
immovelRentRouter.get("/viewhouserent/:houseId",viewImmovel.getImmovelForRentById)

export default immovelRentRouter;