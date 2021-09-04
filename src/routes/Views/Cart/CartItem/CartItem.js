import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { IoMdRemoveCircle } from "react-icons/io";

const CartItem = ({ item, editTotal, delItem }) => {
  const onQuantityChange = (e) => {
    const quantity =  Number(e.target.value);
    if(quantity >= 1 && quantity <= 10){
        
        const calcTotal = +item.price * +quantity;
        editTotal({id: item.id, total: calcTotal, quantity});
    }

  }

  return (
    <Fragment>
      <tr id="cartItem">
        <td className="card--item--title flex-row">
          <span onClick={() => delItem({id: item.id})} className="remove--item"><IoMdRemoveCircle /></span>
          <p>{item.title}</p>
          </td>
        <td className="card--item--price"><h5>${item.price?.toLocaleString()}</h5></td>
        <td className="card--item--input">
          <input type="number" onChange={(e) => onQuantityChange(e)} min={1} defaultValue={item.quantity} max={10}/>
        </td>
        <td className="card--item--total"><h5>${item.total?.toLocaleString()}</h5></td>
      </tr>
    </Fragment>
  );
};
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  editTotal: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired
};



const mapDispatchToProps = dispatch => {
  return {
    editTotal: (payload) => dispatch({type: "editTotal", payload}),
    delItem: (payload) => dispatch({type: "deleteCart", payload})
  }
}

export default connect( null, mapDispatchToProps )(CartItem);
