import { Router } from "express";

import { create, getAll } from "../controllers/church.controller";

const router: Router = Router();

router.get("/", getAll);

router.post("/", create);

export { router as churchRouter };
