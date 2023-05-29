import { AxiosInterceptor } from "./components/AxiosInterceptor";
import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain } from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AxiosInterceptor>
          <RoutesMain />
        </AxiosInterceptor>
      </AuthProvider>
      <ToastContainer position="bottom-right"/>
    </>
  );
};
