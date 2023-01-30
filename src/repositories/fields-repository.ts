import { fieldsEntity } from "src/protocols.js";
import prisma from "../database/database.js";


async function findMany() {
  return prisma.fields.findMany({
    select: {
      id: true,
      name: true,
      places: {
        select: {
          local: true,
        }
      },
      types: {
        select: {
          name: true,
        }
      },
    }
  });
}

async function findById(id: number) {
  return prisma.fields.findFirst({
    where: { id }
  })
}

async function updateOne(id: number, name: string) {
  return await prisma.fields.update({
    where: {
      id,
    },
    data: {
      name: name,
    },
  });
}

async function createOne(body: fieldsEntity) {
  return await prisma.fields.create({
    data: body,
  });
}

async function deleteOne(id: number) {
  return await prisma.fields.delete({
    where: {
      id,
    },
  });
}


const fieldsRepository = {
  findMany,
  updateOne,
  createOne, 
  findById,
  deleteOne
};

export default fieldsRepository;

