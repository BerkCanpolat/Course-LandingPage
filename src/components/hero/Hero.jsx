import "./Hero.css";
import hero from "../../assets/user1.png";
import hero2 from "../../assets/user3.png";
import mainbg from "../../assets/mainbg.png";
import spacemore from "../../assets/hero-more.png"
import { FaStar, FaStarHalfAlt, FaRegCalendarAlt, FaRegChartBar, } from 'react-icons/fa';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-wrapper container">
            <div className="hero-left">
                <motion.div className="hero-text"
                initial={{y:"2rem", opacity: 0}}
                animate={{y:0, opacity: 1}}
                transition={{
                    duration: 2,
                    type: "spring"
                }}>
                    <p>Never stop learning</p>
                    <h1>Grow up your skills by online courses with Onlearning </h1>
                </motion.div>
                    <motion.div className="hero-user"
                    initial={{y: "-2rem", opacity:0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}>
                        <a className="hero-btn" href="#">explore path</a>
                        <div className="hero-img">
                            <div className="user-one">
                            <img src={hero} alt="user1" />
                            </div>
                            <div className="user-two">
                            <img src={hero} alt="user1" />
                            </div>
                            <div className="user-three">
                            <img src={hero2} alt="user1" />
                            </div>
                        </div>
                        <div className="user-review">
                            <FaStar color="var(--bl)"/>
                            <FaStar color="var(--bl)"/>
                            <FaStar color="var(--bl)"/>
                            <FaStar color="var(--bl)"/>
                            <FaStarHalfAlt color="var(--bl)"/>
                            <p>(10k + Reviews)</p>
                        </div>
                    </motion.div>
            </div>
            <div className="space-more">
                <motion.img  src={spacemore} alt="" 
                animate={{rotate: 360}}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
            }}/>
            </div>
            <div className="hero-right">
                <motion.div className="right-img"
                initial={{x: "2rem", opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{
                    duration: 2,
                    type: "spring"
                }}>
                    <img src={mainbg} alt="mainbg" />
                    <div className="hero-calendar">
                        <div className="calendar">
                            <FaRegCalendarAlt color="white" size={30}/>
                        </div>
                        <div className="calendar-text">
                        <p className="calendar-pone">250k</p>
                        <p className="calendar-ptwo">Assisted Student</p>
                        </div>
                    </div>
                    <div className="hero-stats">
                        <div className="stats">
                        <FaRegChartBar color="var(--orange)" size={23}/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero