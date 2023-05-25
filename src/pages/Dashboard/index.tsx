import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ContactContext } from "../../contexts/ContactContext";
import { Contact } from "../../interfaces/Contact.interfaces";
import { useNavigate } from "react-router-dom";
import { AddContactModal } from "../../components/AddContactModal";
import "./styles.css";
import { UserContext } from "../../contexts/UserContext";

export const Dashboard = () => {
  const { contacts, getContacts } = useContext(ContactContext);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    getContacts();
  }, []);

  const logOut = () => {
    localStorage.removeItem("desafio:token");
    navigate("/");
  };

  const [openAddContactModal, setOpenAddContactModal] = useState(false);

  return (
    <div className="dashboard-container">
      <header>
        <div>
          <h1>Lista de contatos</h1>
          {user && (
            <div>
              <h2>Perfil</h2>
              <p>Username: {user.username}</p>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Telephone: {user.telephone}</p>
            </div>
          )}
          <button onClick={() => setOpenAddContactModal(true)}>
            Adicionar Contato
          </button>
          {openAddContactModal && (
            <AddContactModal setOpenAddContactModal={setOpenAddContactModal} />
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
