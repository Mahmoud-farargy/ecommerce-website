import React, { Fragment } from "react";
import "./FasionPreview.scss";
import fasionImg1 from "../../../../Assets/Products/xitems1.jpg.pagespeed.ic.oEs2Is3V_r.webp";
import fasionImg2 from "../../../../Assets/Products/xitems2.jpg.pagespeed.ic.rorSvQkHIK.webp";
import fasionImg3 from "../../../../Assets/Products/xitems3.jpg.pagespeed.ic.oIlAW2CB1j.webp";
import { useHistory } from "react-router-dom";
const FasionPreview = () => {
  const history = useHistory();
  const directToCategory = (category) => {
    history.push(`/category/${category}`);
  }
  return (
    <Fragment>
      <div className="c--container">
        <div id="fasionPreview">
          <div className="fasion--item">
            <div className="fasion--item--img">
              <img src={fasionImg1} alt="fasion 1" />
            </div>

            <div className="fasion--item--inner">
              <h4>Men's Fasion</h4>
              <div className="fasion--hover--drawer">
                <h6 onClick={() => directToCategory("men")} className="shop__invit">Shop now</h6>
              </div>
            </div>
          </div>
          <div className="fasion--item">
            <div className="fasion--item--img">
              <img src={fasionImg2} alt="fasion 2" />
            </div>

            <div className="fasion--item--inner">
              <h4>Women's Fasion</h4>
              <div className="fasion--hover--drawer">
                <h6 onClick={() => directToCategory("women")} className="shop__invit">Shop now</h6>
              </div>
            </div>
          </div>
          <div className="fasion--item">
            <div className="fasion--item--img">
              <img src={fasionImg3} alt="fasion 3" />
            </div>
            <div className="fasion--item--inner">
              <h4>Baby's Fasion</h4>
              <div className="fasion--hover--drawer">
                <h6 onClick={() => directToCategory("baby")} className="shop__invit">Shop now</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FasionPreview;
