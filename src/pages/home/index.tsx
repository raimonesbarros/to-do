import rocket from "../../assets/rocket.svg";
import styles from "./home.module.css";

export function HomePage() {
  function handleSignIn() {
    throw new Error("Function not implemented.");
  }

  function handleLogin() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <div>
          <img src={rocket} />
          <h1>
            to<span>do</span>
          </h1>
        </div>
        <p>Organize suas tarefas e tenha total controle do seu dia-a-dia.</p>
      </header>
      <main>
        <div className={styles.options}>
          <button
            className={styles.register}
            type="button"
            onClick={handleSignIn}
          >
            Cadastrar
          </button>
          <button type="button" onClick={handleLogin}>
            Entrar
          </button>
        </div>
      </main>
    </div>
  );
}
