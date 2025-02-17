import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export default router;
