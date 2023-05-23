import { ReactNode } from "react";
import { Tlogin } from "../pages/Login/schema";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextValues {
  signIn: (data: Tlogin) => void;
  loading: boolean;
}
