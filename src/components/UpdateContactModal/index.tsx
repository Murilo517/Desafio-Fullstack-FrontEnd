import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useRef } from "react";
import { TupdateContact, updateContactSchema } from "./schema";
import { Contact } from "../../interfaces/Contact.interfaces";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { ContactContext } from "../../contexts/ContactContext";
import { GiCancel,  GiConfirmed} from 'react-icons/gi'

interface UpdateModalProps {
  contact: Contact;
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateModal = ({
  contact,
  setUpdateModalOpen,
}: UpdateModalProps) => {
  const { getContacts } = useContext(ContactContext);

  const updateContact = async (updateData: any) => {
    try {
      await api.patch(`contacts/${contact.id}`, updateData);

      getContacts();
      setUpdateModalOpen(false);
    } catch (error) {
      console.error(`Erro ao atualizar o contato`, error);
    }
  };

  const { register, handleSubmit } = useForm<TupdateContact>({
    resolver: zodResolver(updateContactSchema),
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        setUpdateModalOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return createPortal(
    <div className="container">
      <div ref={ref} className="modal-body">
        <form onSubmit={handleSubmit(updateContact)}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              type="text"
              defaultValue={contact.name}
              {...register("name")}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="text"
              defaultValue={contact.email}
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="telephone">Telefone:</label>
            <input
              id="telephone"
              type="text"
              defaultValue={contact.telephone}
              {...register("telephone")}
            />
          </div>
          <div className="button-container">
            <button className="cancel-button" onClick={()=>setUpdateModalOpen(false)}><GiCancel/></button>
            <button className="confirm-button" type="submit"><GiConfirmed/></button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};
