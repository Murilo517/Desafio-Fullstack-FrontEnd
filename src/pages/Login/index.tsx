import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Tlogin, schema } from "./schema";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import imgContact from '../../assets/agenda.png'
import './styles.scss'

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Tlogin>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

  const navigate = useNavigate();
  
  
  return (
    <main>
      <header className="login-header">
        <h2>Agenda Online</h2>
        <button onClick={() => navigate("/register")}>Cadastrar</button>
      </header>
      <div className="login-div">
      <img src={imgContact} className="imgContact" alt="Image" />
        <form className="login-form" onSubmit={handleSubmit(signIn)}>

          <label htmlFor="username">Username / Apelido</label>
          <input type="text" id="username" {...register("username")} />
          {errors.username && (
            <span>{errors.username.message}</span>
          )}
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && (
            <span>{errors.password.message}</span>
          )}
          
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  );
};
