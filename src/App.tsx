import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList/TaskList.tsx";
import rocket from './assets/rocket.svg'
import plus from './assets/plus.svg'

export interface TaskType {
  id: string;
  checked: boolean;
  content: string;
}

export function App() {
  const [writeNewTask, setWriteNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const storedTasks = localStorage.getItem('@todo1.0.0')
    if (storedTasks) return JSON.parse(storedTasks)
    else { return [] }
  });

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

  useEffect(() => {
    const stateJSON = JSON.stringify(tasks)

    localStorage.setItem('@todo1.0.0', stateJSON)
  }, [tasks])

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={rocket} />
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
            <img src={plus} />
          </button>
        </div>
        <TaskList tasks={tasks} onSetTasks={setOutTasks} />
      </main>
    </div>
  );
}
