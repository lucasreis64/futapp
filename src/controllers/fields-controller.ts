import { Request, Response } from "express";
import fieldsService from "../services/fields-services";
import fieldsRepository from "../repositories/fields-repository";

export async function findAll(req: Request, res: Response) {
    try {
        const fields = await fieldsRepository.findMany();

        return res.send(fields);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function updateOne(req: Request, res: Response) {
    const { id } = req.params;

    const { name } = req.body;
    try {
        const fields = await fieldsService.updateOne(Number(id), name);

        return res.status(200).send(fields);
    } catch (err) {
        if (err === 404) return res.sendStatus(404);
        res.sendStatus(500);
    }
}

export async function insertOne(req: Request, res: Response) {
    try {
        const fields = await fieldsService.insertOne(req.body);

        return res.status(201).send(fields);
    } catch (err) {
        if (err === 400) return res.status(400).send('nonexistent place or type');
        res.status(500).send(err);
    }
}

export async function deleteOne(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const deleted = await fieldsService.deleteOne(Number(id));
        
        return res.status(200).send(`Field ${deleted} has been deleted.`);
    } catch (err) {
        if (err === 404) return res.sendStatus(404);
        res.sendStatus(500);
    }
}
