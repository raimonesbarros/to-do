import styles from "./EmptyTask.module.css";
import clipboard from '../../assets/Clipboard.svg'

export function EmptyTask() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="" />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
