import request from "./axios";

export type UserSession = {
  email: string;
  password: string;
};

export async function authenticate(data: UserSession) {
  const response = await request.post("/sessions", data);

  return response.data;
}
