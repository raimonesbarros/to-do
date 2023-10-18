import { useForm } from "react-hook-form";
import rocket from "../../assets/rocket.svg";
import styles from "./login.module.css";

export function LoginPage() {
  const { register, handleSubmit, reset } = useForm();

  function handleLogin() {
    reset();
    throw new Error("Function not implemented.");
  }

  return (
    <div className={styles.login}>
      <header className={styles.header}>
        <img src={rocket} />
        <h1>
          to<span>do</span>
        </h1>
      </header>
      <main>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="E-mail"
            {...register("email")}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
            required
          />
          <button type="submit" onSubmit={handleSubmit(handleLogin)}>
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}
