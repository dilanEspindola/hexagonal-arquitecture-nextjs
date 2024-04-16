import { UserEntity } from "../entities";

export interface CreateUser {
  fullname: string;
  username: string;
  email: string;
  password: string;
  id?: string;
}

export interface UserRepository {
  getAllUsers(): Promise<UserEntity[]>;
  getUserByEmail(): Promise<UserEntity>;
  createUser(userData: CreateUser): Promise<UserEntity>;
  deleteUser(id: string): Promise<any>;
}
