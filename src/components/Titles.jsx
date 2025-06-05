import { motion } from "framer-motion";

export default function Titles({h1, h2, className = "text-3xl md:text-5xl"}) {
  return (
    <motion.div 
    className={`flex gap-3 w-full items-center justify-center ${className}`}
    style={{ fontFamily: "Cinzel", fontWeight: "bolder"}}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.5 }}
    >
      <h1 className="text-white">{h1}</h1>
      <h1 className="text-[#7c2b91]">{h2}</h1>
    </motion.div>
  )
}
