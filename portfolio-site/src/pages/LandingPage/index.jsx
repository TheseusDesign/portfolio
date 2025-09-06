import MyProfile from '../../components/MyProfile'
import { LANDINGPAGE } from './data'
import ProjectCardArray from '../../layouts/ProjectCardArray'
import Footer from '../../components/Footer'
import './styles.css'

export default function LayoutPage() {
    return (
        <div className='LandingPage'>
            <MyProfile />
            <div className="main-column">
                <main>
                    <ProjectCardArray projectCardData={LANDINGPAGE.projectCards} />
                </main>
                <Footer />
            </div>
        </div>
    )
}