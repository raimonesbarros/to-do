import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.empty}>
      <img src="./src/assets/Clipboard.svg" alt="clipboard" />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
