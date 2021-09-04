import React, { Fragment, } from "react";
import ProductItems from "../../../../components/ProductItems/ProductItems";
import "./SimilarProducts.scss";
import { connect } from "react-redux";
const SimilarProducts = (props) => {
    return (
        <Fragment>
             <div className="c--container">
                <div id="similarProducts">
                    <h2 className="section--title">You may like</h2>
                    <ProductItems list={props.staticData.similarProducts} />
                </div>   
             </div>

        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        staticData: state.main.staticData
    }
}

export default connect(mapStateToProps)(SimilarProducts);