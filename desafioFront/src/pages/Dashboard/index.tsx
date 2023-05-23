import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Contact } from "../../interfaces/Contact.intercaces";
import { Card } from "../../components/Card";
import './styles.css';


export const Dashboard = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contacts");
      setContacts(response.data);
    })();
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
        {contacts.map((contact) => (
          <Card key={contact.id} contact={contact}/>
        ))}
      </ul>
      </main>
    </div>
  );
};
