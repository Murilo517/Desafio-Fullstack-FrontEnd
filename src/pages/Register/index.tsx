import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TregisterUser, registerUserSchema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export const RegisterPage = () => {
  const { createUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TregisterUser>({
    resolver: zodResolver(registerUserSchema),
  });
  const navigate = useNavigate();

  return (
    <main>
      <header className="register-header">
        <h1>Cadastro</h1>
        <button onClick={() => navigate("/")}>Voltar ao Login</button>
      </header>
      <div className="register-div">
        <form className="register-form" onSubmit={handleSubmit(createUser)}>
          <h4>Cadastrar Usuário</h4>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" {...register("name")} />
          {errors.name && <span className="error">{errors.name.message}</span>}
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" {...register("username")} />
          {errors.username && (
            <span className="error">{errors.username.message}</span>
          )}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
          <label htmlFor="telephone">Telefone:</label>
          <input type="tel" id="telephone" {...register("telephone")} />
          {errors.telephone && (
            <span className="error">{errors.telephone.message}</span>
          )}
          <button type="submit">Criar</button>
        </form>
      </div>
    </main>
  );
};
