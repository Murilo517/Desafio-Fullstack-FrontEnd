import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ErrorsModal = ({ setOpenModal }: ModalProps) => {
  const navigate = useNavigate();

  const closeExit = () => {
    setOpenModal(false);
    navigate("/");
  };

  return (
    <Modal
      isOpen={Boolean(setOpenModal)}
      onRequestClose={() => setOpenModal(false)}
      contentLabel="Delete Contact Modal"
      overlayClassName="container"
      className="modal-body"
    >
      <p>Você não está autenticado</p>
      <button onClick={closeExit}>Voltar</button>
    </Modal>
  );
};
