import { FieldValues, useForm } from "react-hook-form";
import { createAccounts } from "../../api/create-accounts";
import rocket from "../../assets/rocket.svg";
import styles from "./register.module.css";

export function RegisterPage() {
  const { register, handleSubmit, reset, watch } = useForm();

  function handleRegister(data: FieldValues) {
    const { name, email, password } = data;
    createAccounts({
      name,
      email,
      password,
    });
    reset();
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
        <form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
          <input
            type="text"
            placeholder="Nome"
            {...register("name")}
            required
          />
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
          <button type="submit" disabled={!hasMatchPass}>
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
}
