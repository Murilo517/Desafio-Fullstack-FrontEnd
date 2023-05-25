import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Tlogin, schema } from "./schema";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const { register, handleSubmit } = useForm<Tlogin>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  return (
    <main>
      <h2>Login</h2>
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
