import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { iRegisterUser } from "../interfaces/User.interfaces";
import { useNavigate } from "react-router-dom";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: UserProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const createUser = async (body: iRegisterUser) => {
    try {
      await api.post("/users", body);

      navigate("/");
    } catch (error) {
      console.error("Erro ao criar usuário", error);
    }
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("desafio:token");
      const response = await api.get<any>(`users/data/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.error("Erro ao obter os contatos", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("desafio:token");
    if (token) {
      getUser();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
