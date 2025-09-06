import './styles.css'
import ProjectCard from '../../components/ProjectCard'

export default function ProjectCardArray({projectCardData}){
    return(
        <div className="project-card-array">
            {console.log(projectCardData)}
            {projectCardData.map((projectCard, index) => <ProjectCard key={index} {...projectCard} />)}
        </div>
    )
}