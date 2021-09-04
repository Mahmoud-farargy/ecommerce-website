import React, { Fragment, memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineShoppingCart, AiTwotoneStar } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { FiZoomIn } from "react-icons/fi";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { trimText } from "../../../utilities/utilities";
import "./ProductItem.scss";

const ProductItem = (props) => {
  const { item, addToCart, wishList, cartList } = props;
  const [deduction, setDeduction] = useState(0);
  useEffect(() => {
    item.price &&
      item.sale &&
      setDeduction(Math.round(item.price - (item.price * item.sale / 100)));
  }, [item]);
  return (
    <Fragment>
      <div id="productItem">
        <div className="product--image flex-column">
          <img
            // loading="lazy"
            src={require(`../../../Assets/Products/${item.img}.webp`)?.default}
            alt={item.title}
          />
          <div className="product--btns flex-column">
            <div className="product--btns-inner flex-row">
              <div onClick={() => addToCart({item, destination: "cart" })} className="product--btn--item flex-row">
                {
                  cartList?.some(el => el.id === item.id) ?
                  <FaShoppingCart />
                  :
                  <AiOutlineShoppingCart />
                }
               
              </div>
              <div onClick={() => addToCart({item, destination: "wishList" })}  className="product--btn--item flex-row">
                {
                  wishList?.some(el => el.id === item.id) ?
                  <AiTwotoneHeart />
                  :
                  <BiHeart />
                }
                
              </div>
              <div className="product--btn--item flex-row">
                <FiZoomIn />
              </div>
            </div>
          </div>
        </div>

        <div className="item--footer flex-column">
          <h3 className="item--title">{trimText(item.title, 25)}</h3>
          <span className="item--price">
           ${deduction}
            {item?.sale && item.sale > 0 && (
              <span className="item--deduction">${item.price}.00</span>
            )}
          </span>
          <div className="item--rating">
            <span className="item--rating--box">
              {
                item.rating &&
                Array.from({length: item.rating}, (_, index) => (<span key={index}><AiTwotoneStar /> </span>))
              }
            </span>

            { item.ratingCount && `(${item.ratingCount.toLocaleString()})`}
          </div>

        </div>
      </div>
    </Fragment>
  );
};
ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  wishList: PropTypes.array.isRequired,
  cartList: PropTypes.array.isRequired
};
const mapStateToProps = state => {
    return {
      wishList: state.products.wishList,
      cartList: state.products.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (payload) => dispatch({type: "addToCart", payload})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(ProductItem));
