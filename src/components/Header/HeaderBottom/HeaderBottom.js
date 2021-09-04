import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
const HeaderBottom = ({history}) => {
    return (
        <Fragment>
            <div id="headerBottom" className="flex-row">
                <h6>
                    Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <span onClick={() => history.push("/category/men")} className="shop__invit">Shop Now</span>
                </h6>
            </div>
        </Fragment>
    )
}
export default withRouter(HeaderBottom);