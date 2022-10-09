import { CreateHouse } from "../utils/typeUtils";
import { conflictError, notFoundError } from "../utils/errorUtils";
import * as immovelRepository from "../repositories/immovelRepository";
import { userService } from "./userService";

export async function createImmovelForRent(id:number,data:any) {
    
   const immovelForRent = await immovelRepository.createImmovelForRent(id,data); 
 
   return immovelForRent;
    
}
export async function getImmovelForRent(userId:number,houseId:number) {

    const immovel = await immovelRepository.findImmovelForRent(userId,houseId);
    if(!immovel){
        throw notFoundError("Immovel doesn't exist");
    }

    return immovel

    
}

export async function deleteImmovelForRent(userId:number,houseId:number) {
    await getImmovelForRent(userId,houseId);

    await immovelRepository.deleteImmovelForRent(userId,houseId);
    
}

export async function deleteAllImmovelForRent(userId:number) {
     await userService.findUserById(userId);
     await immovelRepository.deleteAllImmovelForRent(userId);
    
}
export async function getImmovelForRentById(houseId:number) {
   
    await immovelRepository.getImmovelForRentById(houseId);
    
}

export async function getAllImmovelForRent() {

    await immovelRepository.getAllImmovelForRent();
    
}


