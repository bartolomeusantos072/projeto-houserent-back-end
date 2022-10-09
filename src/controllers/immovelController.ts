import { Request, Response } from "express";
import * as immovelService from "../services/immovelService";

export async function createImmovelForRent(req: Request, res: Response) {
    const required = req.body;
    const {id}=res.locals.user;
    
    await immovelService.createImmovelForRent(id,required);
    res.sendStatus(201);
}

export async function deleteImmovelForRent(req: Request, res: Response) {
    const houseId = Number(req.params.id);
    if(isNaN(houseId)){
        res.sendStatus(422);
    }
    const {id}=res.locals.user;

    await immovelService.deleteImmovelForRent(id,houseId);
    res.sendStatus(200);
}

export async function deleteAllImmovelForRent(req: Request, res: Response) {
    const userId=Number(res.locals.user.id);
    if(isNaN(userId)){
        res.sendStatus(422);
    }
    await immovelService.deleteAllImmovelForRent(userId);
    res.sendStatus(200);
}

export async function getImmovelForRentById(req: Request, res: Response) {
    const required = Number(req.params.houseId);
    if(isNaN(required)){
        res.sendStatus(422);
    }
    const result = await immovelService.getImmovelForRentById(required);
    res.status(200).send(result);
}

export async function getQueryImmovelForRent(req: Request, res: Response) {
    let result;
    const option = req.query
    const isEmpty = Object.keys(option).length === 0;
    if (isEmpty) {

      result= await immovelService.getAllImmovelForRent();
        
    }else{
      result ="não esta vazio"  
    }
    

    res.status(200).send(result);
   
}
