import './styles.css'

export default function ContactCard({header, contact}){
    return(
        <div className="contact-card">
            <h2 className="header">{header}</h2>
            <ul className="contact-info">
                {contact.phone && <li><a href={"tel:" + contact.phone}>Phone: {contact.phone}</a></li>}
                {contact.email && <li><a href={"mailto:" + contact.email}>Email: {contact.email}</a></li>}
            </ul>

        </div>
    )
}