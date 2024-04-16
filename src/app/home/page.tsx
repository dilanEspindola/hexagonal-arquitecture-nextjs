import { FormUser, UserList } from "@/modules/infrastructure/views/users";

export default function HomeUser() {
  return (
    <section className="mx-auto w-9/12 py-2">
      <FormUser />
      <UserList />
    </section>
  );
}
