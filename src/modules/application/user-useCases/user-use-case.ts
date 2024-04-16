import { UserEntity } from "@/modules/domain/entities";
import { UserRepository, CreateUser } from "@/modules/domain/repositories";

export class UserUseCase {
  private readonly _userRepository: UserRepository;

  constructor(private userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async createUser(userData: CreateUser) {
    return this._userRepository.createUser(userData);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this._userRepository.getAllUsers();
  }
}
