import { createPortal } from "react-dom";
import { api } from "../../services/api";
import { IRegisterContact } from "../../interfaces/Contact.interfaces";
import { useForm } from "react-hook-form";
import { TaddNewContactSchema, addNewContactSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";

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

  return createPortal(
    <div className="container">
      <div className="modal-body">
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
          <button onClick={()=> setOpenAddContactModal(false)}>Cancelar</button>
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>,
    document.body
  );
};
