import { usersRepository } from "../../repositories/implementations/UsersRepositorySingleton";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider();
const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  mailtrapMailProvider
);
export const createUserController = new CreateUserController(createUserUseCase);
