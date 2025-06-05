import { motion} from "framer-motion";

export default function Skills ({skill, imgSrc})  {
  return (
    <motion.div 
        className='flex flex-col items-center gap-2'
        variants={{
            hidden: { 
                opacity: 0, 
                y: 50,        // Aparece desde abajo
                scale: 0.8    // Empieza más pequeño
            },
            visible: { 
                opacity: 1, 
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.6,
                    ease: "easeOut"
                }
            }
        }}
    >
        <div className='rounded-full bg-[#7c2b91] w-[120px] h-[120px] flex justify-center items-center'>
            <img src={imgSrc} alt={skill} className="invert" width={60} height={60}/>
        </div>
        <h4 className='text-white text-l' style={{ fontFamily: "Cinzel", fontWeight: "bolder"}}
        >{skill}</h4>
    </motion.div>
    
  )
}

