import React, { Fragment } from "react";
import "./Header.scss";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
    return (
        <Fragment>
            <header id="headerArea">
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
        </Fragment>
    )
}
export default Header;