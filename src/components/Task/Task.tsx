import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  id?: string;
  checked: boolean;
  content: string;
  onDeleteTask: (value: string | null | undefined) => void;
  onUpdateStatus: (value: string | undefined, status: boolean) => void;
}

export function Task({ id, checked, content, onDeleteTask, onUpdateStatus }: TaskProps) {
  function handleDeleteTask(id: string | undefined) {
    onDeleteTask(id);
  }

  function changeTaskStatus(id: string | undefined) {
    const status = !checked;
    onUpdateStatus(id, status);
  }

  return (
    <div className={styles.task}>
      <span>{id}</span>
      <input type="checkbox" checked={checked} onChange={() => changeTaskStatus(id)} />
      <p>{content}</p>
      <Trash className={styles.trash} onClick={() => handleDeleteTask(id)} />
    </div>
  );
}
