import React, { Fragment } from "react";
import "./Footer.scss";
import { CgFacebook, CgTwitter, CgInstagram } from "react-icons/cg";
import { ImPinterest, ImYoutube } from "react-icons/im";
import { HiHeart } from "react-icons/hi";
import msCard from "../../Assets/Images/xpayment-1.png.pagespeed.ic.n2kKvTDVR3.webp";
import visaCard from "../../Assets/Images/xpayment-2.png.pagespeed.ic.ZRduM6EAng.webp";
import discoverCard from "../../Assets/Images/xpayment-3.png.pagespeed.ic.WyXEccmJ7c.webp";
import paypalCard from "../../Assets/Images/xpayment-4.png.pagespeed.ic.KD_lCYLjIB.webp";
import cirousCard from "../../Assets/Images/xpayment-5.png.pagespeed.ic.KHHEnRgd3x.webp";
import Logo from "../../design/Logo/Logo";

const About = () => {
  return (
    <Fragment>
      <footer id="mainFooter" className="flex-column">
        <div className="footer--inner d--container">
          <div className="links--rows flex-row">
            <div className="link--row credit-cards">
              <Logo isFooter={true} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt cilisis.
              </p>
              <ul className="flex-row">
                <li>
                  <img loading="lazy" src={msCard} alt="master card" />
                </li>
                <li>
                  <img loading="lazy" src={visaCard} alt="Visa" />
                </li>
                <li>
                  <img loading="lazy" src={discoverCard} alt="Discover" />
                </li>
                <li>
                  <img loading="lazy" src={paypalCard} alt="Paypal" />
                </li>
                <li>
                  <img loading="lazy" src={cirousCard} alt="Cirous" />
                </li>
              </ul>
            </div>
            <div className="link--row footer--link">
              <h4>Quick links</h4>
              <ul>
                <li>About</li>
                <li>Blogs</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="link--row footer--link">
              <h4>Account</h4>
              <ul>
                <li>My Account</li>
                <li>Orders Tracking</li>
                <li>Checkout</li>
                <li>Wishlist</li>
              </ul>
            </div>
            <div className="link--row newsletter">
              <h4>Newsletter</h4>
              <form className="newsletter__email flex-row">
                <input type="email" placeholder="Email" required />
                <input type="submit" value="Subscribe" />
              </form>
              {/* social links */}
              <ul className="flex-row">
                <li>
                  <CgFacebook />
                </li>
                <li>
                  <CgTwitter />
                </li>
                <li>
                  <ImYoutube />
                </li>
                <li>
                  <CgInstagram />
                </li>
                <li>
                  <ImPinterest />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer--copyright col-lg-12">
            <p>Copyright &copy; 2021 All rights reserved | Made with <span className="copyright--love"><HiHeart /></span>  by <span className="author--name">Mahmoud Farargy</span></p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default About;
