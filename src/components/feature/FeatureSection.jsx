import idCardImg from "../../assets/feature1.png";
import trainingImg from "../../assets/feature2.png";
import icon1 from "../../assets/f1.png";
import icon2 from "../../assets/f2.png";
import icon3 from "../../assets/f3.png";
import "./featureSection.css";
import FeatureSectionCard from "./FeatureSectionCard";
import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 3,
          type: "spring",
          delay: 0.5,
        }}
      >
        <FeatureSectionCard
          label="Benefits"
          title="Get Student ID card"
          image={idCardImg}
          items={[
            {
              icon: icon1,
              text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
            },
            {
              icon: icon2,
              text: "TA’s and presenters can be moved to the front of the class.",
            },
            {
              icon: icon3,
              text: "Teachers can easily see all students and class data at one time.",
            },
          ]}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, transform: "translateX(200px)" }}
        whileInView={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ duration: 3, type: "spring", delay: 0.5 }}
      >
        <FeatureSectionCard
          label="Training"
          title="Staff training"
          image={trainingImg}
          reverse={true}
          titColor={true}
          items={[
            {
              icon: icon1,
              text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
            },
            {
              icon: icon2,
              text: "TA’s and presenters can be moved to the front of the class.",
            },
            {
              icon: icon3,
              text: "Teachers can easily see all students and class data at one time.",
            },
          ]}
        />
      </motion.div>
    </>
  );
};

export default FeatureSection;
