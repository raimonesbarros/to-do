import { Trash } from "@phosphor-icons/react";
import { Tasks } from "../../api/getTasks";
import { modifyTask } from "../../api/modify-task";
import styles from "./Task.module.css";

interface TaskProps {
  id?: string;
  checked: boolean;
  content: string;
  onDeleteTask: (value: string | null | undefined) => void;
  onUpdateStatus: (tasks: Tasks | undefined) => void;
}

export function Task({
  id,
  checked,
  content,
  onDeleteTask,
  onUpdateStatus,
}: TaskProps) {
  async function handleDeleteTask(id: string | undefined) {
    onDeleteTask(id);
    id && (await modifyTask(id, "delete"));
  }

  async function changeTaskStatus(id: string | undefined) {
    if (id) {
      const tasks = await modifyTask(id, "patch");
      onUpdateStatus(tasks);
    }
  }

  return (
    <div className={styles.task}>
      <span>{id}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => changeTaskStatus(id)}
      />
      <p>{content}</p>
      <Trash className={styles.trash} onClick={() => handleDeleteTask(id)} />
    </div>
  );
}
