import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    console.log("name", name + "email", email + "password", password);

    try {
      await this.createUserUseCase.execute({ name, email, password });

      return response.status(201).send();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({
          message: error.message || "Unexpected error.",
        });
      }
      return response.status(400).json({
        message: "Unexpected error.",
      });
    }
  }
}
