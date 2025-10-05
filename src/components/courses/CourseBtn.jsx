import { motion } from "framer-motion";

const CourseBtn = ({ label, active, onClick }) => {
  return (
    <motion.button
      className={`league-button ${active ? "active" : ""}`}
      onClick={onClick}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.5,
      }}
    >
      {label}
    </motion.button>
  );
};

export default CourseBtn;
