import { api } from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { GiCancel, GiConfirmed } from "react-icons/gi";
import Modal from "react-modal";
import "./styles.scss";

interface DeleteModalProps {
  setopenDeleteUsermodal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteUserModal = ({
  setopenDeleteUsermodal,
}: DeleteModalProps) => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("desafio:token");
    navigate("/");
  };

  const deleteUser = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("desafio:token")}`,
        },
      };

      await api.delete(`users/${user.id}`, config);

      logOut();
    } catch (error) {
      console.error("Erro ao deletar o usuário", error);
    }
  };

  return (
    <Modal
      isOpen={Boolean(setopenDeleteUsermodal)}
      onRequestClose={() => setopenDeleteUsermodal(false)}
      contentLabel="Delete User Modal"
      overlayClassName="container"
      className="modal-body-delete-user"
    >
      <p>Deseja realmente deletar seu usuário?</p>
      <div className="button-container">
        <button className="cancel-button" onClick={() => setopenDeleteUsermodal(false)}><GiCancel/></button>
        <button className="confirm-button" onClick={deleteUser}><GiConfirmed/></button>
      </div>
    </Modal>
  );
};
