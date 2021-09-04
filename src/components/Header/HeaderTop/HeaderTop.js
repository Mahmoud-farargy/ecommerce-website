import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div id="headerTop" className="d--container desktop-only flex-row">
      <div className="header--top--left d-lg-block d-md-none d-sm-none">
        <ul>
          <li>About Us</li>
          <li>Privacy</li>
          <li className="faq">FAQ</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="header--top--right flex-row">
        <ul>
          <li>My wishlist</li>
          <li>Track your order</li>
          <li className="header--top--socials lex-row">
            <span><RiFacebookCircleFill /></span>
            <span><AiFillInstagram /></span>
            <span><AiFillTwitterCircle /></span>
            <span><FaLinkedinIn /></span>
            <span><AiFillYoutube /></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
