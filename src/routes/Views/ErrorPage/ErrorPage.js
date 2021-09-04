import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ErrorPage.scss";

const ErrorPage = ({ errorType }) => {
  return (
    <Fragment>
      <div id="errorPage" className="flex-column">
        <div className="error--page--inner flex-column">
          <h2 className="section--title">Sorry, this page isn't available.</h2>
          <h5>{errorType}</h5>
          <button className="primary--btn">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
ErrorPage.propTypes = {
  errorType: PropTypes.string.isRequired,
};
export default ErrorPage;
