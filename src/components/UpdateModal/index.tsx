import { useState, useEffect } from "react";
import { Contact } from "../../interfaces/Contact.interfaces";

interface UpdateModalProps {
  contact: Contact;
  updateContact: (contactId: string, updateData: any) => void;
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UpdateModal = ({
  contact,
  updateContact,
  setUpdateModalOpen,
}: UpdateModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setTelephone(contact.telephone);
  }, [contact]);

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updateData = {
      name,
      email,
      telephone,
    };

    updateContact(contact.id, updateData);
    setUpdateModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};
