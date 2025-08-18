import './styles.css'

export default function InfoCard({header, body}){
    return(
        <div className="info-card">
            <h2 className="header">{header}</h2>
            <p className="body">{body}</p>
        </div>
    )
}