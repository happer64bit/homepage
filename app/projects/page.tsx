import ProjectCard from '@/components/ProjectCard'
import schemas from '@/lib/projects.data.json'



export default function ProjectsPage() {
    return (
        <div>
            <div className="container p-4 flex flex-wrap gap-4">
                {schemas.map((event) => (
                    <ProjectCard {...event} key={event.name}/>
                ))}
            </div>
        </div>
    )
}