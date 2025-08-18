import './styles.css'

export default function PrimeShell({ children, columns = "col-1" }) {
    return (
        <div className={"prime-shell " + columns}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}