import ContactPage from "./ContactPage"
import NavBar from "../components/NavBar"
import HomePage from "./HomePage"
import SkillsPage from "./SkillsPage"
import ProjectsPage from "./ProjectsPage"

export default function MainPage() {
  return (
    <div className="scroll-smooth pt-[8dvh]">
        <NavBar/>
        <HomePage/>
        <SkillsPage/>
        <ProjectsPage/>
        <ContactPage/>
    </div>
  )
}
