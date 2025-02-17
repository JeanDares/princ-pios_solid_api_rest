import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgressUsersRepository implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    console.log("💾 Salvando usuário:", user);
    this.users.push(user);
    console.log("📂 Lista de usuários após salvar:", this.users);
  }

  async findByEmail(email: string): Promise<User> {
    console.log("🔍 Buscando usuário com email:", email);
    console.log("📂 Usuários salvos:", this.users);

    const user = this.users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
      console.log("❌ Usuário não encontrado!");
      throw new Error("User not found");
    }

    console.log("✅ Usuário encontrado:", user);
    return user;
  }
}
