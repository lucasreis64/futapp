import server from "../src/app";
import supertest from "supertest";
import prisma from "database/database";
import { PrismaClient } from "@prisma/client";

const api = supertest(server);

beforeAll(async () => {
    await prisma.fields.deleteMany();
});

describe("POST: /fields/", () => {
    it("should respond with status 400 when body is not valid", async () => {
        const body = {
            test: "testando tudo",
        };

        const result = await api.post("/fields").send(body);

        expect(result.status).toBe(400);
    });

    it("should respond with status 201 and insert the new field in the database", async () => {
        const result = await api.post("/fields").send({
            place_id: 1,
            name: "campinho",
            type_id: 2,
        });

        expect(result.status).toBe(201);

        const fieldsData = await prisma.fields.findMany();

        expect(fieldsData[0]).toMatchObject({
            place_id: 1,
            name: "campinho",
            type_id: 2,
        });
    });
});

describe("GET: /fields", () => {
    it("should respond with status 200 and fields data", async () => {
        const result = await api.get("/fields");

        expect(result.status).toBe(200);
        console.log(result.body);
        expect(result.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    places: expect.objectContaining({
                        local: expect.any(String),
                    }),
                    types: expect.objectContaining({
                        name: expect.any(String),
                    }),
                }),
            ])
        );
    });
});
