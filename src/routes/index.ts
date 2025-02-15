import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Rota principal funcionando!");
});

router.get("/about", (req: Request, res: Response) => {
  res.send("Sobre nós");
});

export default router;
