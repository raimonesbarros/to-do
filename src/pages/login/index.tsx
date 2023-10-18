export function LoginPage() {
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
