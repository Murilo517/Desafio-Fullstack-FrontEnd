import { ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";
import axios from "axios";
import { ErrorsModal } from "../ErrorsModal";

interface AxiosInterceptorProps {
  children: ReactNode;
}

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const errorInterceptor = (error: Error) => {
      if (!axios.isAxiosError(error)) {
        return Promise.reject(error);
      }
      if (error.response?.status === 401) {
        setOpenModal(true);
      }

      return Promise.reject(error);
    };

    const interceptor = api.interceptors.response.use(null, errorInterceptor);

    return () => api.interceptors.response.eject(interceptor);
  }, []);

  return (
    <>
      {openModal && <ErrorsModal setOpenModal={setOpenModal} />}
      {children}
    </>
  );
};
