import { UserEntity } from "@/modules/domain/entities";
import { HttpClient } from "../http";
import {
  CreateUser,
  UserRepository as UserRepositoryDomain,
} from "@/modules/domain/repositories";

export class UserRepository implements UserRepositoryDomain {
  constructor(private readonly httpClient: HttpClient) {}
  async getAllUsers(): Promise<UserEntity[]> {
    const users = (await this.httpClient.get<UserEntity[]>(
      "api/users"
    )) as UserEntity[];
    return users;
  }
  getUserByEmail(): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  createUser(userData: CreateUser): Promise<UserEntity> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
