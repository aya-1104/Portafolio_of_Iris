import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { useState } from "react";

export default function Texts({text, className}) {
    const [animationKey, setAnimationKey] = useState(0);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        onViewportEnter={() => setAnimationKey(prev => prev + 1)}
        className={`w-full ${className}`}
        >
          <TypeAnimation
          key={animationKey}
          splitter={(str) => str.split(/(?= )/)} 
          sequence={[1000, text]}
          speed={{ type: 'keyStrokeDelayInMs', value: 80}}
          omitDeletionAnimation={true}
          className="text-white text-l md:text-xl"
          repeat={0} // No repetir
        />
        </motion.div>
    )
}