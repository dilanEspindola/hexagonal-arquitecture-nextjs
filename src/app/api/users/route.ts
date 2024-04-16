import { v4 as uuid } from "uuid";

interface User {
  fullname: string;
  username: string;
  email: string;
  country: string;
  id: string;
}

const USER_LIST: Array<User> = [
  {
    id: "kjl5j756-ldsfjsldb-4656",
    fullname: "dilan espindola",
    username: "dilan",
    email: "test@test.com",
    country: "colombia",
  },
];

export async function GET() {
  return Response.json(USER_LIST);
}

export async function POST(req: Request) {
  const userData = (await req.json()) as User;

  const newUser: User = {
    id: uuid(),
    fullname: userData.fullname,
    country: userData.country,
    email: userData.email,
    username: userData.username,
  };

  USER_LIST.push(newUser);

  return Response.json({ msg: "cretead", user: newUser });
}
