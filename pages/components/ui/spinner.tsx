import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        className="relative w-16 h-16"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      >
        {/* Outer Ring */}
        <div className="absolute inset-0 border-2 border-t-transparent border-green-400 rounded-full"></div>

        {/* Inner Ring */}
        <motion.div
          className="absolute inset-2 border-4 border-t-transparent border-green-300 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Spinner;