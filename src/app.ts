import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fieldsRouter } from "./routers/fields-router";
dotenv.config();

const app = express();
app.use(cors())
    .use(express.json())
    .get("/health", (_req, res) => res.send("OK!"))
    .use("/fields", fieldsRouter);

app.listen(4000, () => {
    console.log("Server Running on port 4000");
});

export default app;
