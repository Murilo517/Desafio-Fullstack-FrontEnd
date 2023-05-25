import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TregisterUser, registerUserSchema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const { createUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm<TregisterUser>({
    resolver: zodResolver(registerUserSchema),
  });
  const navigate = useNavigate();

  return (
    <main>
      <header>
        <h1>Desafio Full stack</h1>
        <button onClick={() => navigate("/")}>Voltar ao Login</button>
      </header>
        <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit(createUser)}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" {...register("name")} />

        <label htmlFor="username">Username:</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" {...register("password")} />

        <label htmlFor="telephone">Telefone:</label>
        <input type="tel" id="telephone" {...register("telephone")} />

        <button type="submit">Criar</button>
      </form>
    </main>
  );
};
