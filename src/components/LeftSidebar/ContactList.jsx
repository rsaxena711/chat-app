import { ContactTab } from "./ContactTab"

export const ContactList = ({contacts})=>{
    return (
        <div style={styles.ContactList} className="contactScreen">
            {contacts.map((contact) => (
                <ContactTab contact={contact} key={contact.id}/>
            ))}
        </div>
    )
}
const styles = {
    ContactList: {
        overflowY: "scroll",
        height: "calc(100vh - 265px)",
        zIndex: "2",
        backgroundColor: "white",
    }
}