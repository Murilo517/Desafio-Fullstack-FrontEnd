import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ErrorsModal = ({ setOpenModal }: ModalProps) => {
  const navigate = useNavigate();

  const closeExit = () => {
    setOpenModal(false);
    navigate("/");
  };

  return createPortal(
    <div className="container">
      <div className="modal-body">
        <p>Você não está autenticado</p>
        <button onClick={closeExit}>Voltar</button>
      </div>
    </div>,
    document.body
  );
};
