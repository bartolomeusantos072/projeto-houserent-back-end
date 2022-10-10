import { Request, Response, Router } from "express";
import * as viewImmovel from "../controllers/viewImmovelController";


const immovelRentRouter = Router();

immovelRentRouter.get("/houserent-view?", viewImmovel.getQueryImmovelForRent)
immovelRentRouter.get("/houserent-view/:houseId",viewImmovel.getImmovelForRentById)

export default immovelRentRouter;