import React from "react";
import "./ScrollToTopBtn.scss";
import { MdKeyboardArrowUp } from "react-icons/md";

const ScrollToTopBtn = () => {
    const scrollMeUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    return (
        <div onClick={() => scrollMeUp()} id="scrollToTopBtn" className="flex-column">
            <MdKeyboardArrowUp />
        </div>
    )
}
export default ScrollToTopBtn;