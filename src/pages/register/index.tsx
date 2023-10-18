import { useForm } from "react-hook-form";
import rocket from "../../assets/rocket.svg";
import styles from "./register.module.css";

export function RegisterPage() {
  const { register, handleSubmit, reset, watch } = useForm();

  function handleRegister() {
    reset();
    throw new Error("Function not implemented.");
  }

  const pass = watch("password");
  const pass2 = watch("password2");

  const hasMatchPass = pass === pass2;

  return (
    <div className={styles.register}>
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
            minLength={8}
            required
          />
          <input
            type="password"
            placeholder="Repetir senha"
            {...register("password2")}
            minLength={8}
            required
          />
          <button
            type="submit"
            onSubmit={handleSubmit(handleRegister)}
            disabled={!hasMatchPass}
          >
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}
