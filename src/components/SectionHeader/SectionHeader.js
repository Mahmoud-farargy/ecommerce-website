import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SectionHeader.scss";
import { connect } from "react-redux";

const SectionHeader = (props) => {
    const sectionTitle = props.title || props.currentPageTitle || "page";
  return (
    <Fragment>
      <section id="sectionHeader" className="flex-column">
        <h2>{sectionTitle}</h2>
        <nav>
            <ul className="section--header--links flex-row">
            <Link to="/">Home</Link>
            <Link to="#" className="current--section--link">{sectionTitle}</Link>
            </ul>
        </nav>

      </section>
    </Fragment>
  );
};
SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    currentPageTitle: PropTypes.string
}
const mapStateToProps = state => {
    return {
        currentPageTitle: state.main.currentPage
    }
}
export default connect(mapStateToProps)(SectionHeader);
