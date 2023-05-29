import { useState } from "react";
import { Contact } from "../../interfaces/Contact.interfaces";
import { UpdateModal } from "../UpdateContactModal";
import { DeleteModal } from "../DeleteContactModal";
import { FaEdit, FaTrash } from 'react-icons/fa';
import "./styles.scss";

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
      <div className="button-container">
        <button className="edit-button" onClick={() => setUpdateModalOpen(true)}><FaEdit/></button>
        <button className="delete-button" onClick={()=> setDeleteModalOpen(true)}><FaTrash/></button>
      </div>
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
