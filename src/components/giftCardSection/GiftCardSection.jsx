import "./giftCardSection.css";
import { FaStar } from "react-icons/fa";
import giftImg from "../../assets/gift.png";
import { motion } from "framer-motion";

const GiftCardSection = () => {
  return (
    <motion.section className="giftcard-section container"
    initial={{ y: 100, opacity: 0}}
    whileInView={{ y: 0, opacity: 1}}
    transition={{
        duration: 2,
        delay: .3,
        type: "spring"
    }}>
      <div className="giftcard-content">
        <h2>
          Why You should buy <br /> gift cards ?
        </h2>

        <ul className="giftcard-list">
          <li>
            <FaStar className="giftcard-icon" />
            <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </li>
          <li>
            <FaStar className="giftcard-icon" />
            <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </li>
          <li>
            <FaStar className="giftcard-icon" />
            <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
          </li>
        </ul>

        <button className="giftcard-btn">BUY NOW</button>
      </div>

      <div className="giftcard-image">
        <img src={giftImg} alt="Gift card" />
      </div>
    </motion.section>
  );
};

export default GiftCardSection;
