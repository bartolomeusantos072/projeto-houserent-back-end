
import * as viewImmovelRepository from "../repositories/viewImmovelRepository";
import { notFoundError } from "../utils/errorUtils";



export async function getImmovelForRentById(houseId:number) {
   
    const result = await viewImmovelRepository.getImmovelForRentById(houseId);
    if(result === null) throw notFoundError("Immovel doesn't exist");
    return result;
 
 }
 
 export async function getAllImmovelForRent() {
 
    return await viewImmovelRepository.getAllImmovelForRent();
     
 }