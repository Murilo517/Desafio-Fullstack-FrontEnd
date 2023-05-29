import { createPortal } from "react-dom";
import { api } from "../../services/api";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

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

  return createPortal(
    <div className="container">
      <div className="modal-body">
        <p>Deseja realmente deletar seu usuário?</p>
        <button onClick={() => setopenDeleteUsermodal(false)}>Cancelar</button>
        <button onClick={deleteUser}>Deletar</button>
      </div>
    </div>,
    document.body
  );
};
