import { UserUseCase } from "@/modules/application/user-useCases";
import { UserRepository } from "@/modules/infrastructure/dirven-adapters/repositories";
import { HttpClient } from "@/modules/infrastructure/dirven-adapters/http";

export const UserList = async () => {
  const httpClient = new HttpClient();
  const userRepository = new UserRepository(httpClient);
  const userService = new UserUseCase(userRepository);
  const users = await userService.getAllUsers();

  return (
    <div className="mt-10">
      <h2 className="uppercase text-xl">user list</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.fullname} - @{user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};
