import request from "./axios";

export type User = {
  name: string;
  email: string;
  password: string;
};

export async function createAccounts(data: User) {
  const response = await request.post("/accounts", data);

  return response.status;
}
