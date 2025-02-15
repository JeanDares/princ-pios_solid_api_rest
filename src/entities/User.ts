import { v4 as uuidv4 } from "uuid";

export class User {
  public readonly id: string;
  public name: string;
  public email: string;
  public password: string;

  constructor({ name, email, password }: Omit<User, "id">, id?: string) {
    this.id = id || uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
