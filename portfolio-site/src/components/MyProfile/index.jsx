import './styles.css'
import Pic from '../Pic/Pic'
import { MyPortrait } from "../../assets"

export default function MyProfile() {
    return (
        <aside className='MyProfile'>
            <Pic src={MyPortrait} size={200} />
            <div className="info">
                <div className="copy">
                    <h1>Theseus</h1>
                    <p>UX Engineer and Marketing Specialist specialized in bridging the gap between business, design, and technology. </p>
                </div>
                <nav></nav>
            </div>
        </aside>
    )
}