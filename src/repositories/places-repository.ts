import prisma from "../database/database.js";

async function findById(id: number) {
  return prisma.places.findFirst({
    where: { id }
  })
}

const placesRepository = {
  findById
};

export default placesRepository;
