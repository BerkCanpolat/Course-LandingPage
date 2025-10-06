import "./category.css";
import categoryData from "../../utils/category";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

const Category = () => {
  return (
    <section className="category container">
      <motion.h1 className="category-header"
      initial={{ y: 100, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{
        duration: 1,
        type: "spring"
      }}>Courses Category</motion.h1>
      <motion.p className="category-description"
      initial={{ y: 100, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{
        duration: 1,
        type: "spring"
      }}>
        Onlearing is one powerful online software suite that combines all the
        tools <br /> needed to run a successful school or office.
      </motion.p>

      <motion.div className="category-card__wrapper"
      initial={{ y: 150, opacity: 0}}
      whileInView={{ y: 0, opacity: 1}}
      transition={{
        duration: 2.5,
        type: "spring"
      }}>
        {
            categoryData.map((cat) => (
                <CategoryCard key={cat.id} title={cat.title} image={cat.image} description={cat.description} btntext={cat.btntext} visible={cat.visible}/>
            ))
        }
      </motion.div>

      <div className="category-view">
      <a className="view-btn" href="#">view all</a>

      </div>
    </section>
  );
};

export default Category;

