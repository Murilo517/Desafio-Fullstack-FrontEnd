import { api } from "../../services/api";
import { IRegisterContact } from "../../interfaces/Contact.interfaces";
import { useForm } from "react-hook-form";
import { TaddNewContactSchema, addNewContactSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import { GiCancel, GiConfirmed } from "react-icons/gi";
import Modal from "react-modal";
import "./styles.scss";

interface addContactModalProps {
  setOpenAddContactModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddContactModal = ({
  setOpenAddContactModal,
}: addContactModalProps) => {
  const { getContacts } = useContext(ContactContext);

  const addNewContact = async (body: IRegisterContact) => {
    try {
      await api.post("/contacts", body);

      setOpenAddContactModal(false);
      getContacts();
    } catch (error) {}
  };

  const { register, handleSubmit } = useForm<TaddNewContactSchema>({
    resolver: zodResolver(addNewContactSchema),
  });

  return (
    <Modal
      isOpen={Boolean(setOpenAddContactModal)}
      onRequestClose={() => setOpenAddContactModal(false)}
      contentLabel="Update Contact Modal"
      overlayClassName="container"
      className="modal-body"
    >
      <form onSubmit={handleSubmit(addNewContact)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" {...register("name")} />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input id="email" type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="telephone">Telefone:</label>
          <input id="telephone" type="text" {...register("telephone")} />
        </div>
        <div className="button-container">
          <button
            className="cancel-button"
            onClick={() => setOpenAddContactModal(false)}
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
