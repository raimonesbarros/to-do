import { TaskType } from "../pages/tasks";
import request from "./axios";

export async function createTask(data: TaskType) {
  const token = localStorage.getItem("TOKEN");
  const url = "/tasks";
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await request.post(url, data, { headers });
}
