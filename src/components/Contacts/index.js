import {useState, useEffect} from 'react'
import List from "./List"
import Form from "./Form"
import "./styles.css";

function Contacts() {
    const [contacts, setContacts] = useState([           //birden fazla elemanı tutmak istediğim için array
        {
        fullname: "Mehmet",
        phone_number: "1213"
        },{
        fullname: "Tayfun",
        phone_number: "12354"
        },{
        fullname: "Ayşe",
        phone_number: "1264"
        }
    ])  
    useEffect(() => {
    console.log(contacts)
    }, [contacts])
    return <div id="container">
        <h1>CONTACTS</h1>
        <List contacts= {contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
}

export default Contacts
