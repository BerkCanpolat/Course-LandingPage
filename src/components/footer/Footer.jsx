import "./footer.css";
import footerLogo from "../../../public/logo.png";
import { FaMapMarkerAlt, FaPhoneVolume, FaClock,FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-section container">
            <div className="footer-section__one">
                <div className="one-img">
                    <img src={footerLogo} alt="logo" />
                </div>
                <div className="one-adres">
                    <FaMapMarkerAlt color="var(--green)" size={25}/>
                    <p>Address: <br /> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,</p>
                </div>
                <div className="one-tel">
                    <FaPhoneVolume color="var(--green)" size={25}/>
                    <p>Tel :+9229341037</p>
                </div>
                <div className="one-time">
                    <FaClock color="var(--green)" size={25}/>
                    <p>Response hours: 8 to 20</p>
                </div>
                <div className="one-email">
                    <FaEnvelope color="var(--green)" size={25}/>
                    <p>Email:info@onlearn.com</p>
                </div>
            </div>
            <div className="footer-section__two">
                <div className="two-header">
                    <h4>Categories</h4>
                </div>

                <ul className="two-list">
                    <li>Counseling</li>
                    <li>Health and fitness</li>
                    <li>Individual development</li>
                    <li>more</li>
                </ul>
            </div>
            <div className="footer-section__three">
                <div className="three-header">
                    <h4>Links</h4>
                </div>

                <ul className="three-list">
                    <li>About us</li>
                    <li>blog</li>
                </ul>
            </div>
            <div className="footer-section__four">
                <div className="four-info">
                    <p>Stay up to date with the latest courses</p>
                </div>
                <div className="four-input">
                    <input type="text" placeholder="Email" />
                    <a href="#">Send</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer