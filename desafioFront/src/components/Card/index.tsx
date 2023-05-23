import { Contact } from "../../interfaces/Contact.intercaces"
import './styles.css';


interface ContactProps{
    contact: Contact
}

export const Card = ({contact}: ContactProps) =>{
   
    return (
        <li>
            <h3> {contact.name} </h3>
            <p>Email: {contact.email}</p>
            <p>Telefone: {contact.telephone}</p>
            <button>Editar</button>
            <button>Deletar</button>
        </li>
    )
}