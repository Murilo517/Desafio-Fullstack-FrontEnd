import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  AuthContextValues,
  AuthProviderProps,
} from "../interfaces/AuthProvider.interfaces";
import { Tlogin } from "../pages/Login/schema";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { getUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("desafio:token");

    if (!token) {
      setLoading(false);
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: Tlogin) => {
    try {
      const response = await api.post("login", data);
      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("desafio:token", token);

      getUser()

      navigate("dashboard");
    } catch (error:any) {
      
      toast.error("Verifique suas credenciais.",{
        autoClose: 1000
      })
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};