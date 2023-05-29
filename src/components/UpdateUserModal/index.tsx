import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { UserContext } from "../../contexts/UserContext";
import { TupdateUser, updateUserSchema } from "./schema";
import { GiCancel, GiConfirmed } from "react-icons/gi";
import Modal from "react-modal";

interface UpdateModalProps {
  setOpenUpdateUsermodal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateUserModal = ({
  setOpenUpdateUsermodal,
}: UpdateModalProps) => {
  const { user, getUser } = useContext(UserContext);

  const updateUser = async (updateData: any) => {
    try {
      await api.patch(`users/${user.id}`, updateData);

      getUser();
      setOpenUpdateUsermodal(false);
    } catch (error) {
      console.error(`Erro ao atualizar o usuário`, error);
    }
  };

  const { register, handleSubmit } = useForm<TupdateUser>({
    resolver: zodResolver(updateUserSchema),
  });

  return (
    <Modal
      isOpen={Boolean(setOpenUpdateUsermodal)}
      onRequestClose={() => setOpenUpdateUsermodal(false)}
      contentLabel="Update Contact Modal"
      overlayClassName="container"
      className="modal-body"
    >
      <form onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          defaultValue={user.username}
          {...register("username")}
        />
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          defaultValue={user.name}
          {...register("name")}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          id="email"
          type="text"
          defaultValue={user.email}
          {...register("email")}
        />
        <label htmlFor="telephone">Telefone:</label>
        <input
          id="telephone"
          type="text"
          defaultValue={user.telephone}
          {...register("telephone")}
        />
        <div className="button-container">
          <button
            className="cancel-button"
            onClick={() => setOpenUpdateUsermodal(false)}
          >
            <GiCancel />
          </button>
          <button className="confirm-button" type="submit">
            <GiConfirmed />
          </button>
        </div>
      </form>
    </Modal>
  );
};
