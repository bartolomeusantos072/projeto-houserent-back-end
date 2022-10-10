import { Request, Response } from "express";
import * as immovelService from "../services/immovelService";

export async function createImmovelForRent(req: Request, res: Response) {
    const required = req.body;
    const {id}=res.locals.user;
    
    await immovelService.createImmovelForRent(id,required);
    res.sendStatus(201);
}
export async function availabilityImmovelForRent(req:Request,res:Response) {
    const houseId =Number(req.params.houseId);
    const {availability} = req.body;
    const userId=Number(res.locals.user.id);

 
    if(isNaN(houseId)){
        res.sendStatus(422);
    }
    if(isNaN(userId)){
        res.sendStatus(422);
    }

    const result=await immovelService.availabilityImmovelForRent(userId,houseId,availability);
    res.status(200).send(result);
    
}
export async function deleteImmovelForRent(req: Request, res: Response) {
    
    const houseId =Number(req.params.houseId);
    if(isNaN(houseId)){
        res.sendStatus(422);
    }
    const userId=Number(res.locals.user.id);
    if(isNaN(userId)){
        res.sendStatus(422);
    }
    
    const result=await immovelService.deleteImmovelForRent(userId,houseId);
    res.status(200).send(result);
}

export async function deleteAllImmovelForRent(req: Request, res: Response) {
    const userId=Number(res.locals.user.id);
    if(isNaN(userId)){
        res.sendStatus(422);
    }
    const result= await immovelService.deleteAllImmovelForRent(userId);
    res.status(200).send(result);
}
export async function findImmovelForRentById(req: Request, res: Response) {
    const {id}=res.locals.user;
    const houseId =Number(req.params.houseId);
    const result = await immovelService.findImmovelForRentById(id,houseId);
    res.status(200).send(result);
}
export async function findAllImmovelForRent(req: Request, res: Response) {
    const {id}=res.locals.user;
    const result = await immovelService.findAllImmovelForRent(id);
    res.status(200).send(result);
}
