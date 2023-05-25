import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Tlogin, schema } from "./schema";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit } = useForm<Tlogin>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  const navigate = useNavigate();

  return (
    <main>
      <header>
        <h2>Login</h2>
        <button onClick={() => navigate("/register")}>Cadastrar</button>
      </header>
      <form onSubmit={handleSubmit(signIn)}>
        <label htmlFor="username">Usuário</label>
        <input type="username" id="username" {...register("username")} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />

        <button type="submit">Entrar</button>
      </form>
    </main>
  );
};
