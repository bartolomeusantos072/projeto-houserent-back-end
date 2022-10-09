import { Request, Response } from "express";
import * as viewImmovelService from "../services/viewImmovelService";



export async function getImmovelForRentById(req: Request, res: Response) {
    const required = Number(req.params.houseId);
    if(isNaN(required)){
        res.sendStatus(422);
    }
    const result = await viewImmovelService.getImmovelForRentById(required);
    res.status(200).send(result);
}

export async function getQueryImmovelForRent(req: Request, res: Response) {
    let result;
    const option = req.query
    const isEmpty = Object.keys(option).length === 0;
    if (isEmpty) {

      result= await viewImmovelService.getAllImmovelForRent();
        
    }else{
      result ="não esta vazio"  
    }
    

    res.status(200).send(result);
   
}
