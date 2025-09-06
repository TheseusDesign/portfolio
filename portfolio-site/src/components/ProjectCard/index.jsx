import Pic from '../Pic/Pic'
import './styles.css'

export default function ProjectCard({name , list, img}){
    function genCategories(list){
        const categoryList = list.map((category) => <li key={category}>{category}</li>)
        return categoryList;
    }
    
    return(
        <div className="Project-Card">
            <Pic src={img} size={200} />
            <div className='label'>
                <div className="name">{name}</div>
                <ul className="category-list">
                    {genCategories(list)}
                </ul>
            </div>
        </div>
    )
}