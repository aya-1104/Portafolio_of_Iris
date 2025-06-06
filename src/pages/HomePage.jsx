import GalaxyBackground from "../components/GalaxyBackground"
import Titles from "../components/Titles";
import Texts from "../components/Texts";
import Spline from '@splinetool/react-spline';


function HomePage() {
    const p1 = "I'm a detail-oriented developer at the beginning of my professional journey, with a preference for frontend development and building mobile or web applications.  I enjoy taking ownership of tasks, delivering work on time, and keeping projects well-organized. I'm continuously building my skills and gaining experience across the development process, with a strong interest in efficient workflows and clean, functional user interfaces."
    return (
    <GalaxyBackground starCount={200} rotationSpeed={.1}>
    <section id="home" className="h-auto md:min-h-screen scroll-mt-20 p-[50px] flex flex-col md:flex-row gap-6 md:justify-between md:items-center">
        <div className="w-full md:w-1/2">
          <Titles h1={"Hi! I am"} h2={"Iris Ayala"} className="text-4xl md:text-6xl justify-start mb-6"/>
          <Texts text={p1}/>
        </div>
        <div className="w-full md:w-1/3">
        <Spline scene="https://prod.spline.design/oSzwddRMsHinHlXR/scene.splinecode"  onLoad={() => console.log('Spline loaded')}/>
        </div>
    </section>
    </GalaxyBackground>
  )
}

export default HomePage;
