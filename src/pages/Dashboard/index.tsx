import { useContext, useEffect } from "react";
import { Card } from "../../components/Card";
import { CardContext } from "../../contexts/ContactContext";
import { Contact } from "../../interfaces/Contact.interfaces";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Dashboard = () => {
  const { contacts, getContacts } = useContext(CardContext);
  const navigate = useNavigate();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="dashboard-container">
      <header>
        <div>
          <h1>Lista de contatos</h1>
          <button onClick={() => navigate("/")}>Sair</button>
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
