import { AxiosInterceptor } from "./components/AxiosInterceptor";
import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AxiosInterceptor>
          <RoutesMain />
        </AxiosInterceptor>
      </AuthProvider>
    </>
  );
};
