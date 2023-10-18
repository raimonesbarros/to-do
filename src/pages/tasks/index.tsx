import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import plus from "../../assets/plus.svg";
import rocket from "../../assets/rocket.svg";
import { TaskList } from "../../components/TaskList/TaskList";
import styles from "./tasks.module.css";

export interface TaskType {
  id: string;
  content: string;
  checked: boolean;
  createdAt: string;
  userId: string;
}

export function TasksPage() {
  const navigate = useNavigate();
  const [writeNewTask, setWriteNewTask] = useState("");

  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const storedTasks = localStorage.getItem("@todo2.0.0");
    if (storedTasks) return JSON.parse(storedTasks);
    return [];
  });

  function handleWriteTask(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setWriteNewTask(value);
  }

  function handleAddNewTask() {
    const createdAt = new Date().toISOString();
    const newTask = {
      id: uuidv4(),
      content: writeNewTask,
      checked: false,
      createdAt,
      userId: uuidv4(),
    };

    setTasks((preState) => [...preState, newTask]);
    setWriteNewTask("");
  }

  function setOutTasks(value: TaskType[]) {
    setTasks(value);
  }

  function goToLogin() {
    navigate("/login");
  }

  const isValidTask = writeNewTask.length < 1;

  useEffect(() => {
    const stateJSON = JSON.stringify(tasks);

    localStorage.setItem("@todo2.0.0", stateJSON);
  }, [tasks]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <button type="button" onClick={goToLogin}>
          Entrar
        </button>
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
