import { createContext } from "react";
import { api } from "../services/api";
import { iRegisterUser } from "../interfaces/User.interfaces";
import { useNavigate } from "react-router-dom";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();

  const createUser = async (body: iRegisterUser) => {
    try {
      await api.post("/users", body);

      navigate("/");
    } catch (error) {
      console.error("Erro ao criar usuário", error);
    }
  };
  
  

  return (
    <UserContext.Provider
      value={{
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
