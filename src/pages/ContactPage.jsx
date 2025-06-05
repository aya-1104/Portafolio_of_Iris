import { ContactForm } from "../components/ContactForm"
import Titles from "../components/Titles"
import { motion } from "framer-motion";

export default function ContactPage() {
    const openLink = (url) => window.open(url, '_blank');
    
    return (
    <section id="contact" className="bg-[#0f0f19] w-full p-[25px] h-auto lg:h-[95dvh] pt-20">
        <Titles h1={"Get in"} h2={"Touch"}/>
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex justify-around items-center flex-wrap h-2/3">
            <figure></figure>
            <ContactForm/>
        </motion.div>
        <div className="flex w-full h-[10dvh] justify-center items-center gap-4">
            <img src="/GithubLogo.png" alt="git" 
            className="w-[12%] h-[57%] md:w-[52px] md:h-[57px]  invert  brightness-150"
            onClick={() => openLink('https://github.com/AleWWH1104')}/>
            <img src="/LinkedinLogo.png" alt="lk" 
            className="w-[10%] h-[50%] md:w-[50px] md:h-[50px] invert brightness-150"
            onClick={() => openLink('https://www.linkedin.com/in/iris-ayala-71710025a/')}/>
        </div>
        <p className="text-md text-white text-center">
            © {new Date().getFullYear()} Iris Ayala. Todos los derechos reservados.
        </p>
    </section>
  )
}
