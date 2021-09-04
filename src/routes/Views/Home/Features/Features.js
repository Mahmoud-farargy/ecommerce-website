import React, { Fragment } from "react";
import { connect } from "react-redux";
import FeatureItem from "./FeatureItem/FeatureItem";
import "./Features.scss";

const Features = (props) => {
    const homeFeaturesList = props.staticData?.homeFeatures;
    return (
        <Fragment>
            <div id="homeFeatures" className="row">
                {
                    homeFeaturesList && homeFeaturesList.length > 0 &&
                    homeFeaturesList.map((item, index) => item && <FeatureItem item={item} key={item.id || index} />)
                }
            </div>
        </Fragment>
    )
}
const mapStateToProps = state => {
    return{
        staticData: state.main.staticData
    }
}
export default connect(mapStateToProps)(Features);