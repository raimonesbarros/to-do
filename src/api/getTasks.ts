import request from "./axios";

export async function getTasks() {
  const response = await request.get("/tasks");

  return response.data;
}
