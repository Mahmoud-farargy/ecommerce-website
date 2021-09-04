import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Logo = ({appConfig, isFooter}) => {
  return (
    <Fragment>
      <div className="logo">
        {appConfig.title.split("").slice(0, 4).join("")}
        <span style={{color: isFooter ? "var(--ultra-white)" : "var(--dark-header)"}}>{appConfig.title.split("").slice(4).join("")}</span>
      </div>
    </Fragment>
  );
};
Logo.propTypes = {
    appConfig: PropTypes.object.isRequired,
    isFooter: PropTypes.bool
}
const mapStateToProps = state => {
    return {
        appConfig: state.main.appConfig
    }
}
export default connect(mapStateToProps)(Logo);
