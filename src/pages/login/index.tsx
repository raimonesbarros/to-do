import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { authenticate } from "../../api/authenticate";
import rocket from "../../assets/rocket.svg";
import styles from "./login.module.css";

export function LoginPage() {
  const { register, handleSubmit, reset } = useForm();

  function handleLogin(data: FieldValues) {
    const { email, password } = data;
    try {
      authenticate({ email, password });
    } catch (err) {
      console.log(err);
    }
    reset();
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
        <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
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
          <Link to={"/register"}>Não possui conta? Fazer cadastro!</Link>
          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
}
