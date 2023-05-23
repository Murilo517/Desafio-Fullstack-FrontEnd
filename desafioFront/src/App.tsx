import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";
import './styles/GlobalStyle.scss';


export const App = () => {
  return (
    <>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
};
