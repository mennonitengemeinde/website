import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(__dirname);

  res.render("home/index", {});
});

export { router as homeRouter };
