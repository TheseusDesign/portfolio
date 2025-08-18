import { COMINGSOON } from "./data"
import PrimeShell from "../../layouts/PrimeShell"
import Title from "../../components/Title"
import InfoCard from "../../components/InfoCard"
import ContactCard from "../../components/ContactCard"

export default function ComingSoon(){
    return(
        <main>
            <PrimeShell>
                <Title {...COMINGSOON.title}/>
                <InfoCard {...COMINGSOON.aboutMe} />
                <ContactCard {...COMINGSOON.contact}/>
            </PrimeShell>
        </main>
    )
}