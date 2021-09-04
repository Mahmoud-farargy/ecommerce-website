import React, { Fragment } from "react";
import "./WeekTrending.scss";
import ProductItems from "../../../../components/ProductItems/ProductItems";
import { connect } from "react-redux";

const WeekTrending = (props) => {

  return (
    <Fragment>
      <div className="c--container">
        <div id="weekTrending">
            {/* header */}
          <div className="trending--header flex-row">
            <h2 className="section--title">Trending this week</h2>
            <ul className="flex-row">
              <li>Men</li>
              <li>Women</li>
              <li>Baby</li>
              <li>Fasion</li>
            </ul>
          </div>
            {/* Items */}
            <ProductItems list={props.staticData.weekTrending} />
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = state =>{
    return {
        staticData: state.main.staticData,
    }
}
export default connect(mapStateToProps)(WeekTrending);
