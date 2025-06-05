import Titles from '../components/Titles'
import useProjects from '../components/useProjects'
import ProjectCard from '../components/ProjectCard';


export default function ProjectsPage() {
    const {projects} = useProjects();

    return (
    <section id='projects' className="bg-[#1f1c2f] w-full md:px-[50px] h-auto py-20">
        <Titles h1={"Some of"} h2={"My Projects"} />
        <div className='mx-auto my-[100px] max-w-[500px] w-full'>
        {projects.map((item, i) => (
        <ProjectCard 
          key={i}
          nombre={item.nombre}
          descripcion={item.descripcion}
          enlace={item.enlace}
          tecnologias={item.tecnologias}
        />
      ))}
        </div>
    </section>
  )
}

