import "./header.css";
import "../../index.css"
import logo from "../../../public/logo.png";
import MyButton from "./Button";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from 'react-icons/fa';

const menuItems = ["Home","Careers","Blog","About Us"]

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }


        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <motion.header className={`header ${scrolled ? "scrollbar" : ""}`}
    initial={{y: "-2rem", opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{
        duration: .5,
        type: "linear",
        ease: "easeIn"
    }}>
        <div className="container header-wrapper">
        <a className="header__logo" href="#">
            <img src={logo} alt="logo" />
        </a>
        <nav className="header__nav">
        <ul className={`header__menu ${menuOpen ? "active" : ""}`}>
            {
                menuItems.map((item) => (
                    <Nav key={item} item={item}/>
                ))
            }
        </ul>
            <FaBars className="menu" size={20} onClick={() => setMenuOpen((prev) => !prev)}/>
        </nav>
        <div className={`header__auth ${menuOpen ? "active" : ""}`}>
            <MyButton type="login">Login</MyButton>
            <MyButton type="signup">singup</MyButton>
        </div>
        </div>
    </motion.header>
  )
}

export default Header