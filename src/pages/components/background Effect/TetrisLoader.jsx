import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TetrisLoader = () => {
  return (
    <div className="tetrisLoader">
      <motion.div
        className="circle blue"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="circle red"
        animate={{ y: [0, -50, 0] }}
        transition={{
          delay: 0.4,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="circle yellow"
        animate={{ y: [0, -50, 0] }}
        transition={{
          delay: 0.8,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="circle green"
        animate={{ y: [0, -50, 0] }}
        transition={{
          delay: 1.2,
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default TetrisLoader;
