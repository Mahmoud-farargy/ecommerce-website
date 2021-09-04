import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FeatureItem  = (props) => {
    const { item } = props;
    return (
        <Fragment>
            <div id="featureItem" className="col-lg-3 col-md-6 col-sm-6">
                <img className="featItem--img" loading="lazy" src={require(`../../../../../Assets/Products/${item.img}.svg`)?.default} alt={item.title} />
                <h5 className="featItem--title">{item.title}</h5>
                <p className="featItem--description">{item.description}</p>
            </div>
        </Fragment>
    )
}
FeatureItem.propTypes = { 
    item: PropTypes.object.isRequired
}
export default FeatureItem;