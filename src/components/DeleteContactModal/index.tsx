import { createPortal } from "react-dom";
import { Contact } from "../../interfaces/Contact.interfaces";
import { api } from "../../services/api";
import { ContactContext } from "../../contexts/ContactContext";
import { useContext } from "react";
import { GiCancel, GiConfirmed} from 'react-icons/gi'
import './styles.scss'

interface DeleteModalProps {
  contact: Contact;
  setDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteModal = ({ contact, setDeleteModalOpen }: DeleteModalProps) => {

  const { getContacts } = useContext(ContactContext);

  const deleteContact = async () => {
    try {
      await api.delete(`contacts/${contact.id}`);
      getContacts()
      setDeleteModalOpen(false);
    } catch (error) {
      console.error(`Erro ao deletar o contato`, error);
    }
  };

  return createPortal(
    <div className="container">
      <div className="modal-body">
        <p>Deseja realmente deletar este contato?</p>
        <div className="button-container">
          <button className="cancel-button" onClick={() => setDeleteModalOpen(false)}><GiCancel/></button>
          <button className="confirm-button"  onClick={deleteContact}><GiConfirmed/></button>
        </div>
      </div>
    </div>,
    document.body
  );
};