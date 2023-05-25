import { useState } from "react";
import { Contact } from "../../interfaces/Contact.interfaces";
import { UpdateModal } from "../UpdateModal";
import "./styles.css";
import { DeleteModal } from "../DeleteModal";

interface ContactProps {
  contact: Contact;
}

export const Card = ({ contact }: ContactProps) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <li>
      <h2>{contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Telefone: {contact.telephone}</p>
      <button onClick={() => setUpdateModalOpen(true)}>Editar</button>
      <button onClick={()=> setDeleteModalOpen(true)}>Deletar</button>
      {deleteModalOpen && (
        <DeleteModal 
        setDeleteModalOpen={setDeleteModalOpen} 
        contact={contact}/>
      )}
      {updateModalOpen && (
        <UpdateModal
          contact={contact}
          setUpdateModalOpen={setUpdateModalOpen}
        />
      )}
    </li>
  );
};
