import prisma from "../src/database/database";

async function main() {
    await prisma.places.createMany({
        data: [
            {
                local: 'Méier'
            },
            {
                local: 'Cachambi'
            },
            {
                local: 'Pilares'
            }
        ],
    });
    await prisma.types.createMany({
        data: [
            {
                name: 'Campo de Futebol'
            },
            {
                name: 'Campo de Futebol Society'
            },
            {
                name: 'Quadra de Futsal'
            }
        ],
    });
    await prisma.fields.createMany({
        data: [
            {
                place_id: 1,
                name: 'campinho',
                type_id: 2
            },
            {
                place_id: 1,
                name: 'campâo',
                type_id: 1
            },
            {
                place_id: 2,
                name: 'campo',
                type_id: 2
            },
            {
                place_id: 3,
                name: 'quadra',
                type_id: 3
            },
        ],
    });
}

main()
    .then(()=>{
        console.log("Regristro feito com sucesso!");
    })
    .catch(e=>{
        console.error(e);
        process.exit(1);
    })
    .finally(async ()=>{
        await prisma.$disconnect();
    })