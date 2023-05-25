import { createContext, useState } from "react";
import { api } from "../services/api";
import { Contact } from "../interfaces/Contact.interfaces";

interface ContactProviderProps {
  children: React.ReactNode;
}

export const ContactContext = createContext({} as any);

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const getContacts = async () => {
    try {
      const response = await api.get<Contact[]>("contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Erro ao obter os contatos", error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        getContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
