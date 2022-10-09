
import * as viewImmovelRepository from "../repositories/viewImmovelRepository";



export async function getImmovelForRentById(houseId:number) {
   
    return await viewImmovelRepository.getImmovelForRentById(houseId);
     
 }
 
 export async function getAllImmovelForRent() {
 
    return await viewImmovelRepository.getAllImmovelForRent();
     
 }