import { Router } from "express";
import { deleteOne, findAll, insertOne, updateOne } from "../controllers/fields-controller.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { fieldsSchema, updateNameSchema } from "../schemas/fields-schema.js";



const fieldsRouter = Router();

fieldsRouter
  .get("/", findAll)
  .post("/", validateBody(fieldsSchema), insertOne)
  .put("/:id", validateBody(updateNameSchema), updateOne)
  .delete("/:id", deleteOne);
export { fieldsRouter };
