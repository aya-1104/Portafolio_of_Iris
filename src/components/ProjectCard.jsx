import { motion } from "framer-motion";

export default function ProjectCard({ nombre, descripcion, enlace, tecnologias}) {

    const background = `linear-gradient(306deg, hsl(286, 58%, 31%), hsl(287, 29%, 54%)`;

    const cardVariants = {
        offscreen: {
          y: 300,
        },
        onscreen: {
          y: 50,
          rotate: -10,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          },
        },
      };

    return (
        <motion.div 
        className="relative overflow-hidden flex justify-center items-center pt-5 mb-[-120px]"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        >
            <div 
            className="absolute inset-0"
            style={{ 
            background,
            clipPath: 'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")'
            }} 
            />
            <motion.div 
            className="flex gap-6 flex-col justify-center items-center rounded-2xl p-4 bg-gray-100 shadow-[0_0_1px_hsl(0deg_0%_0%/0.075),0_0_2px_hsl(0deg_0%_0%/0.075),0_0_4px_hsl(0deg_0%_0%/0.075),0_0_8px_hsl(0deg_0%_0%/0.075),0_0_16px_hsl(0deg_0%_0%/0.075)]"
            style={{
            fontSize: '164px',
            width: '300px',
            height: '430px',
            transformOrigin: '10% 60%'
            }}
            variants={cardVariants}
            >
            <h2 className="text-2xl text-center" style={{ fontFamily: "Cinzel", fontWeight: "bolder"}}>{nombre}</h2>
            <motion.button onClick={() => window.open(enlace, '_blank', 'noopener,noreferrer')}
            className="text-sm text-white underline bg-[#1f1c2f] py-2 px-6 rounded cursor-pointer transition-transform duration-300"
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            >Explorar</motion.button>
            <p className="text-sm text-center">{descripcion}</p>
            <ul className="flex flex-wrap gap-2 justify-center">
                {tecnologias.map((tech, index) => (
                    <li key={index}
                    className="bg-[#7c2b91] text-sm text-white rounded p-2"
                    >{tech}</li>
                ))}
            </ul>
            </motion.div>
        </motion.div>
    )
}




