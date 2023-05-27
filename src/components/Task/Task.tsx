import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  id?: string;
  content: string;
  onDeleteTask: (value: string | null | undefined) => void;
  onUpdateStatus: (value: string, status: boolean) => void;
}

export function Task({ id, content, onDeleteTask, onUpdateStatus }: TaskProps) {
  function handleDeleteTask(event: any) {
    const taskToDelete = event.target.parentNode;
    const id = taskToDelete?.firstChild.textContent;
    onDeleteTask(id);
  }

  function changeTaskStatus(event: any) {
    const taskToChange = event.target.parentNode;
    const id = taskToChange?.firstChild.textContent;
    const status = taskToChange?.children[1].checked;
    onUpdateStatus(id, status);
  }

  return (
    <div className={styles.task}>
      <span>{id}</span>
      <input type="checkbox" onClick={changeTaskStatus} />
      <p>{content}</p>
      <Trash className={styles.trash} onClick={handleDeleteTask} />
    </div>
  );
}
