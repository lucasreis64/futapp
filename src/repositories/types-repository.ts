import prisma from "../database/database";

async function findById(id: number) {
  return prisma.types.findFirst({
    where: { id }
  })
}

const typesRepository = {
  findById
};

export default typesRepository;
