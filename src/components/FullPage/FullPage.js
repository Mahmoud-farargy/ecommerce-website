import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
// import { useHistory } from "react-router-dom";

const FullPage = (props) => {
    return (
        <>
        <Header/>
            <main className="comp--container">
                {props.children}
            </main>
        <Footer />
        </>
    )
}
FullPage.propTypes = {
    children: PropTypes.element.isRequired
}
export default FullPage;