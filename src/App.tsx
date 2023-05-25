import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes";
import "./styles/GlobalStyle.scss";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};
