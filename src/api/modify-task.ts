import request from "./axios";
import { Tasks } from "./getTasks";

type Method = "delete" | "patch";
export async function modifyTask(
  id: string,
  method?: Method
): Promise<Tasks | undefined> {
  const token = localStorage.getItem("TOKEN");
  const url = `/tasks/${id}`;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  if (method === "delete") {
    await request.delete(url, { headers });
  } else {
    const response = await request.patch(url, undefined, { headers });

    return response.data;
  }
}
