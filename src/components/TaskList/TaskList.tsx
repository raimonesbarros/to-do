import { EmptyTask } from "../EmptyTask/EmptyTask.tsx";
import { Task } from "../Task/Task.tsx";

import { TaskType } from "../../pages/tasks/index.tsx";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: TaskType[];
  onSetTasks: (value: TaskType[]) => void;
}

export function TaskList({ tasks, onSetTasks }: TaskListProps) {
  function renderTask() {
    if (tasks.length === 0) return <EmptyTask />;
    else
      return tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          checked={task.checked}
          content={task.content}
          onDeleteTask={deleteTask}
          onUpdateStatus={updateTaskStatus}
        />
      ));
  }

  function updateTaskStatus(id: string | undefined, status: boolean) {
    onSetTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, checked: status };
        } else {
          return task;
        }
      })
    );
  }

  function taskQttyFinished() {
    let taskQttyChecked = 0;
    tasks.map((task) => {
      if (task.checked) taskQttyChecked += 1;
    });

    return taskQttyChecked;
  }

  function renderStatus() {
    if (tasks.length === 0) return <span>0</span>;
    else
      return (
        <span>
          {taskQttyFinished()} de {tasks.length}
        </span>
      );
  }

  function deleteTask(value: string | null | undefined) {
    const tasksWithoutTaskToDelete = tasks.filter((task) => task.id != value);
    onSetTasks(tasksWithoutTaskToDelete);
  }

  return (
    <div className={styles.tasks}>
      <div className={styles.info}>
        <div className={styles.created}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
        </div>
        <div className={styles.done}>
          <p>
            Concluidas
            {renderStatus()}
          </p>
        </div>
      </div>
      <div className={styles.tasksList}>{renderTask()}</div>
    </div>
  );
}
