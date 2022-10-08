import { Request, Response } from "express";
import * immovelRepository from "../services/immovelRepository.ts";

export async function createImmovelForRent(req: Request, res: Response) {
    const required = req.body
    await immovelRepository.createImmovelForRent(required);
    res.sendStatus(201);
}
export async function deleteImmovelForRent(req: Request, res: Response) {
    const required = req.params.id
    await immovelRepository.deleteImmovelForRent(required);
    res.sendStatus(200);
}
export async function deleteAllImmovelForRent(req: Request, res: Response) {
    const required = req.params.id
    await immovelRepository.deleteAllImmovelForRent(required);
    res.sendStatus(200);
}
export async function findAllImmovelForRent(req: Request, res: Response) {
    const required = req.query,
    const result = await immovelRepository.findAllImmovelForRent(required);
    res.status(200).send(result);
}
export async function getImmovelForRentById(req: Request, res: Response) {
    const required = req.params.id
    const result = await immovelRepository.getImmovelForRentById(required);
    res.status(200).send(result);
}