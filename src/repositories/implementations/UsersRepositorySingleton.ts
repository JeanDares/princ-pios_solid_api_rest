import { PostgressUsersRepository } from "./PostgressUsersRepository";

export class UsersRepositorySingleton {
  private static instance: PostgressUsersRepository;

  public static getInstance(): PostgressUsersRepository {
    if (!UsersRepositorySingleton.instance) {
      UsersRepositorySingleton.instance = new PostgressUsersRepository();
    }
    return UsersRepositorySingleton.instance;
  }
}

export const usersRepository = UsersRepositorySingleton.getInstance();
