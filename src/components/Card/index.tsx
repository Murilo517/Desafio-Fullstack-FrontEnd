import { useContext, useState } from "react";
import { Contact } from "../../interfaces/Contact.interfaces";
import { CardContext } from "../../contexts/ContactContext";
import { UpdateModal } from "../UpdateModal";
import "./styles.css";

interface ContactProps {
  contact: Contact;
}

export const Card = ({ contact }: ContactProps) => {
  const { updateContact } = useContext(CardContext);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  return (
    <li>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Telefone: {contact.telephone}</p>
      <button onClick={() => setUpdateModalOpen(true)}>Editar</button>
      <button>Deletar</button>
      {updateModalOpen && (
        <UpdateModal
          contact={contact}
          updateContact={updateContact}
          setUpdateModalOpen={setUpdateModalOpen}
        />
      )}
    </li>
  );
};
