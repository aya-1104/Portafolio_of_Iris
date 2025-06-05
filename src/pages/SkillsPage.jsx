import Titles from "../components/Titles"
import Skills from "../components/Skills"
import { motion, useSpring, useTime, useTransform} from "framer-motion";
import Texts from "../components/Texts";
import { useEffect } from "react";
'use client'

export default function SkillsPage() {
    const time = useTime();
    const rotate = useTransform(time, [0,3000], [0,360], {clamp: false});
    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, #7c2b91, #9e69ac, #c78ff9, #7c2b91)`;
      });
 
    const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10 });
    const pulsingBg = useTransform(pulse, (v) => `blur(${v}px)`);

    useEffect(()=>{
        pulse.set(10)
    }, [])

    const skillsData = [
        {skill: "HTML", imgSrc: "/HtmlLogo.png"},
        {skill: "CSS", imgSrc: "/CssLogo.png"},
        {skill: "JavaScript", imgSrc: "/JSLogo.png"},
        {skill: "React", imgSrc: "/ReactLogo.png"},
        {skill: "Android", imgSrc: "/AndroidLogo.png"},
        {skill: "SQL", imgSrc: "/BDLogo.png"},
        {skill: "Python", imgSrc: "/PythonLogo.png"},
        {skill: "Java", imgSrc: "/JavaLogo.png"}
    ]
    const specialization = "Development of native applications using Android Studio with Kotlin, leveraging the modern declarative approach of Jetpack Compose to build dynamic and responsive user interfaces. Also, Web application development with React on the frontend. Experience in consuming and creating REST APIs, as well as integrating and managing relational databases."
    
    return (
    <section id="skills" className="bg-[#0f0f19] w-full p-[50px] h-auto py-20 min-h-screen">
        <Titles h1={"My"} h2={"Abilities"} />
        <motion.div 
        className="flex justify-between flex-wrap gap-8 px-4 my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
            hidden: {},
            visible: {
            transition: {
                staggerChildren: 0.2, // Animación escalonada entre elementos
            },
            },
        }}>
            {skillsData.map((skill, index) =>(
                <Skills 
                key={index} 
                skill = {skill.skill}
                imgSrc = {skill.imgSrc}
            />
            ))}
        </motion.div>
        <h2 className="text-white text-xl md:text-3xl mb-4"
        style={{ fontFamily: "Cinzel", fontWeight: "bolder"}}
        >Current Specialization</h2>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative rounded-md w-full md:w-1/2"
        >
            <Texts text={specialization} className={"bg-[#1f1c2f] p-8 z-10 relative w-full"}/>
            <motion.div 
            className="absolute -inset-1 rounded-md"
            style={{background: rotatingBg, filter: pulsingBg}}
            />
        </motion.div>
    </section>
  )
}   
