import { motion } from "framer-motion";

const Card = ({ image, studentsimg, students, date, header, description, price, priceTwo }) => {
  return (
    <motion.div className="course-card"
    initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5 }}
      >
      <div className="card-main-img">
        <img className="main-img" src={image} alt="course1" />
        <div className="img-students">
          {studentsimg.map((stu, index) => (
            <img key={index} src={stu} alt="student" />
          ))}
          <p>{students}</p>
        </div>
      </div>
      <div className="card-sub">
        <div className="card-header-container">
          <div className="card-time">
            <small>{date}</small>
          </div>
          <div className="card-header">
            <h4>{header}</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="card-footer">
          <div className="footer-text">
            <p>{price}</p>
            <p>{priceTwo}</p>
          </div>
          <div className="footer-btn">
            <a href="#">Enroll Now</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
