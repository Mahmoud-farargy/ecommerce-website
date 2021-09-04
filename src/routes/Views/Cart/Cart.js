import React, { Fragment, useEffect } from "react";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.scss";

const Cart = ({changeCurrentPage, cartList, totalCart, totalItemsCount, countries, USStates}) => {
    useEffect(() => {
        changeCurrentPage("Cart");
    },[changeCurrentPage]);
    const tableHeads = [
        "product",
        "price",
        "quantity",
        "total"
    ];
    return (
        <Fragment>
            <div id="cart">
                <div className="cart--inner">
                   <SectionHeader title="Cart" />
                   <div className="cart--items d--container">
                       {
                        cartList && cartList?.length > 0 ?
                        <div className="w-100 flex-column">
                            <table>
                                <thead>
                                    <tr>
                                        {
                                            tableHeads?.length > 0 && tableHeads.map((tHead, index) => {
                                                return(
                                                    <th key={index} scope="col">
                                                        {tHead}
                                                    </th>
                                                )
                                            })
                                        }    
                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        cartList && cartList.length > 0 && cartList.map((item, idx) => <CartItem key={item.id || idx} item={item} />)
                                    }
                                </tbody>
                            </table>
                            <div className="shopping--area flex-row">
                                    <div className="shopping--area--inner">
                                            <h4 className="prominent--font">Subtotal: <span style={{float: "right"}}>({totalItemsCount || cartList.length} {totalItemsCount > 1 || cartList.length > 1 ? "items" : "item"}) ${totalCart.toLocaleString()}</span></h4>
                                            <h4 className="prominent--font">Shopping: </h4>
                                            <div className="shopping--options">
                                                <div className="form-group">
                                                    <label htmlFor="flatRate5">Flat Rate: $5.00</label>
                                                    <input type="radio" id="flatRate5" name="shoppingOption"/>
                                                </div>
                                               
                                                <div className="form-group">
                                                    <label htmlFor="freeShopping">Free Shopping</label>
                                                    <input defaultChecked type="radio" id="freeShopping" name="shoppingOption"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="flatRate10">Flat Rate: $10.00</label>
                                                    <input type="radio" id="flatRate10" name="shoppingOption"/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="localDelivery">Local delivery</label>
                                                    <input type="radio" id="localDelivery" name="shoppingOption"/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <select name="countries" className="shopping--country">
                                                        <option disabled defaultChecked>Select</option>
                                                        {
                                                            countries && countries.length > 0 &&
                                                            countries.map((country, index) => {
                                                               return(<option key={index}>{country}</option>)
                                                            })
                                                        }
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <select className="shopping--country">
                                                        <option disabled defaultChecked>select</option>
                                                        {
                                                            USStates && USStates.length > 0 && 
                                                            USStates.map((USState, index) => {
                                                            return (<option key={index}>{USState}</option>)
                                                            })
                                                        }
                                                    </select>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" placeholder="Postcode/Zipcode" />
                                                </div>
                                            </div>
                                    </div>

                            </div>
                            <div className="shopping--buttons flex-row">
                                            <button className="primary--btn"><Link to="/">Continue Shopping</Link></button>
                                            <button className="primary--btn"><Link to="">Proceed to checkout</Link></button>
                            </div>
                        </div>

                        :
                        <div className="empty--content">
                            No elements have been added to the cart yet.
                        </div>
                       }
                   </div>
                </div>
            </div>
        </Fragment>
    )
}
Cart.propTypes = {
    changeCurrentPage: PropTypes.func.isRequired,
    cartList: PropTypes.array.isRequired,
    totalCart: PropTypes.number.isRequired,
    totalItemsCount: PropTypes.number.isRequired
}
const mapStateToProps = state => {
    return {
        cartList: state.products.cart,
        totalCart: state.products.totalCart,
        totalItemsCount: state.products.totalItemsCount,
        countries: state.main.staticData.countries,
        USStates: state.main.staticData.usStates
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeCurrentPage: (title) => dispatch({type: "changePageTitle", title})
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Cart);