import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ContactContext } from "../../contexts/ContactContext";
import { Contact } from "../../interfaces/Contact.interfaces";
import { useNavigate } from "react-router-dom";
import { AddContactModal } from "../../components/AddContactModal";
import "./styles.css";

export const Dashboard = () => {
  const { contacts, getContacts } = useContext(ContactContext);
  const navigate = useNavigate();

  useEffect(() => {
    getContacts();
  }, []);

  const logOut = ()=>{
    
    localStorage.removeItem("desafio:token");
    navigate("/")
  }

  const [openAddContactModal, setOpenAddContactModal] = useState(false);

  return (
    <div className="dashboard-container">
      <header>
        <div>
          <h1>Lista de contatos</h1>
          <button onClick={() => setOpenAddContactModal(true)}>
            Adicionar Contato
          </button>
          { openAddContactModal && (
            <AddContactModal
            setOpenAddContactModal={setOpenAddContactModal}
            />
          )}
          <button onClick={logOut}>Sair</button>
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
