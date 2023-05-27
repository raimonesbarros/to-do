import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList/TaskList.tsx";

export interface TaskType {
  id: string;
  checked: boolean;
  content: string;
}

export function App() {
  const [writeNewTask, setWriteNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function handleWriteTask(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setWriteNewTask(value);
  }

  function handleAddNewTask() {
    const id = uuidv4();
    const newTask = {
      id: id,
      checked: false,
      content: writeNewTask,
    };

    setTasks((preState) => [...preState, newTask]);
    setWriteNewTask("");
  }

  function setOutTasks(value: TaskType[]) {
    setTasks(value);
  }

  const isValidTask = writeNewTask.length < 1;

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src="./src/assets/rocket.svg" />
        <h1>
          to<span>do</span>
        </h1>
      </header>
      <main>
        <div className={styles.task}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleWriteTask}
            value={writeNewTask}
            required
          />
          <button
            type="submit"
            onClick={handleAddNewTask}
            disabled={isValidTask}
          >
            Criar
            <img src="./src/assets/plus.svg" />
          </button>
        </div>
        <TaskList tasks={tasks} onSetTasks={setOutTasks} />
      </main>
    </div>
  );
}
