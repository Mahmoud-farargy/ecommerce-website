import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./CartIcon.scss";

const CartIcon = ({cartList}) => {
    return (

        <NavLink activeClassName="active--route" to="/cart">
            <div className="cart--nav--ico">
                <AiOutlineShoppingCart />
                {cartList.length > 0 && <div className="cart--items--count">{cartList.length.toLocaleString()}</div>}
            </div>
        </NavLink>
    )
}
const mapStateToProps = state => {
    return {
        cartList: state.products.cart
    }
}
export default connect(mapStateToProps)(CartIcon);