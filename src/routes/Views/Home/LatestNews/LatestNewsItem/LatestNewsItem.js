import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LatestNewsItem = ({ item }) => {
  return (
    <Fragment>
      <div id="latestNewsItem" className="col-lg-4 col-md-6 col-sm-6">
        <img
          loading="lazy"
          src={
            require(`../../../../../Assets/Products/${item.img}.webp`).default
          }
          alt={item.title}
        />
        <div className="news--info">
          <span className="news--category">{item.category}</span>
          <h5 className="news--title">{item.title}</h5>
          <p className="news--snippet">{item.snippet}</p>
          <Link to="" className="news--link">Read more</Link>
        </div>
      </div>
    </Fragment>
  );
};
LatestNewsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default LatestNewsItem;
