import placesRepository from "../repositories/places-repository.js";
import typesRepository from "../repositories/types-repository.js";
import { fieldsEntity } from "../protocols.js";
import fieldsRepository from "../repositories/fields-repository.js";

async function updateOne(id: number, name: string) {
    const isExistentId = await fieldsRepository.findById(id);

    if (!isExistentId) throw 404;

    const fields = await fieldsRepository.updateOne(Number(id), name);
    return fields;
}

async function deleteOne(id: number) {
    const isExistentId = await fieldsRepository.findById(id);

    if (!isExistentId) throw 404;

    const fields = await fieldsRepository.deleteOne(id);

    return fields.id;
}

async function insertOne(body: fieldsEntity) {
    const isExistentTypeId = await typesRepository.findById(body.place_id);
    const isExistentPlaceId = await placesRepository.findById(body.type_id);
    
    console.log(isExistentTypeId)
    if (!isExistentTypeId || !isExistentPlaceId) throw 400;

    const fields = await fieldsRepository.createOne(body);

    return fields;
}

const fieldsService = {
    updateOne,
    deleteOne,
    insertOne,
};

export default fieldsService;
