import './styles.css'

export default function ContactMe() {
    return (
        <form className="contact-me" method="POST" action="https://formsubmit.co/theseus.design@gmail.com" enctype="multipart/form-data">
            <input type="name" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your email" />
            <input type="occupation" name="occupation" placeholder="Your Occupation" />
            <textarea name="message" placeholder="Topic of Conversation"></textarea>
            {/* <input type="file" name="attachment" accept="image/png, image/jpeg" /> */}
            <button type="submit">Submit</button>
        </form>
    )
}