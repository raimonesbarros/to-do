import { TaskType } from "../pages/tasks";
import request from "./axios";

export interface Tasks {
  tasks: {
    not_checked: TaskType[];
    checked: TaskType[];
  };
  total: number;
  checked: number;
}

export async function getTasks(token: string): Promise<Tasks> {
  const response = await request.get("/tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
}
