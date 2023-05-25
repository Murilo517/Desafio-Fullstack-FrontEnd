import { createContext, useState } from "react";
import { api } from "../services/api";
import { Contact } from "../interfaces/Contact.interfaces";

interface ContactProviderProps {
  children: React.ReactNode;
}

export const CardContext = createContext({} as any);

export const CardProvider = ({ children }: ContactProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const getContacts = async () => {
    try {
      const response = await api.get<Contact[]>("contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Erro ao obter os contatos", error);
    }
  };

  const updateContact = async (contactId: string, updateData: any) => {
    try {
      await api.patch(`contacts/${contactId}`, updateData);
    } catch (error) {
      console.error(`Erro ao atualizar o contato`, error);
    }
  };

  return (
    <CardContext.Provider
      value={{
        updateContact,
        contacts,
        getContacts
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
