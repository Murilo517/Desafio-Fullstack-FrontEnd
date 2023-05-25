import { useContext, useEffect } from "react";
import { Card } from "../../components/Card";
import "./styles.css";
import { CardContext } from "../../contexts/ContactContext";
import { Contact } from "../../interfaces/Contact.interfaces";

export const Dashboard = () => {
  const { contacts, getContacts } = useContext(CardContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="dashboard-container">
      <header>
        <div>
          <h1>Lista de contatos</h1>
          <button>Sair</button>
        </div>
      </header>
      <main>
        <ul className="contact-list">
          {contacts.map((contact: Contact) => (
            <Card key={contact.id} contact={contact} />
          ))}
        </ul>
      </main>
    </div>
  );
};
