import './styles.css'

export default function Title({ header, subheader }) {
    return (
        <div className="title">
            <h1 className='header'>{header}</h1>
            <p className="subheader">{subheader}</p>
        </div>
    )
}