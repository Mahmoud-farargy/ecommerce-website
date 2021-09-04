import { toastify } from "../../utilities/utilities";

const initialState = {
    cart: [],
    wishList: [],
    totalCart: 0,
    totalItemsCount: 0
}
const productState = (state = initialState, actions) => {
    switch(actions.type){
        case "addToCart": {
            const { item, destination } = actions.payload;
           
            let cartCopy = JSON.parse(JSON.stringify(state[destination]));
            const itemObj = {
                ...item,
                total: parseInt(item?.price),
                quantity: 1
            }

            const formatDestinationName = `${destination.charAt(0).toUpperCase()}${destination.slice(1).toLowerCase()}`
            if(item && typeof itemObj === "object" && Object.keys(itemObj).length > 0 && state.hasOwnProperty(destination)){
                    // Toggles elements existence
                    if(!state[destination]?.some(el => el.id === itemObj.id)){
                        // Add
                        cartCopy.unshift(itemObj);
                        cartCopy = Array.from(new Set(cartCopy.map(itemId => itemId.id))).map(ID => cartCopy.find(el => el.id === ID));
                        toastify({msg:`Added to ${formatDestinationName}`, type: "success"});
                    }else{
                        // Remove
                        const itemIndex = cartCopy.map(el => el.id).indexOf(item.id);
                        if(item.id && (itemIndex !== -1)){
                            cartCopy.splice(itemIndex, 1);
                        }
                        toastify({msg:`Removed from ${formatDestinationName}`, type: "info"});
                    }
                    if(destination.toLowerCase() === "cart"){
                            return {
                                ...state,
                                    [destination]: cartCopy,
                                    totalCart: Number(cartCopy?.reduce((accumulator, currVal) => accumulator + +currVal.total,0)),
                                    totalItemsCount: Number(cartCopy?.reduce((accumulator, currVal) => accumulator + +currVal.quantity,0)),
                            }
                    }else{
                        return {
                            ...state,
                            [destination]: cartCopy,
                        }     
                    }
            }else{
                return state;
            }
        }
        case "deleteCart": {
            const cartCopy = JSON.parse(JSON.stringify(state.cart));
            const { id } = actions.payload;
            const delIndex = cartCopy.map(item => item.id).indexOf(id);
            if(id && (delIndex !== -1)){
                cartCopy.splice(delIndex, 1);
                return {
                    ...state,
                    cart: cartCopy,
                    totalCart: Number(cartCopy?.reduce((accumulator, currVal) => accumulator + +currVal.total,0)),
                    totalItemsCount: Number(cartCopy?.reduce((accumulator, currVal) => accumulator + +currVal.quantity,0)),
                }
            }else{
                return state;
            }
        }
        case "editTotal": {
            const cartCopy = JSON.parse(JSON.stringify(state.cart));
            const { id, total, quantity } = actions.payload; 
            const editIndex = cartCopy.map(item => item.id).indexOf(id);
            if(id && (editIndex !== -1) && cartCopy[editIndex]){
                cartCopy[editIndex].total = total;
                cartCopy[editIndex].quantity = quantity;
                return{
                    ...state,
                    cart: cartCopy,
                    totalCart: Number(cartCopy?.reduce((accumulator, currVal) => accumulator + +currVal.total,0)),
                    totalItemsCount: Number(cartCopy?.reduce((accumulator, currVal) => accumulator + +currVal.quantity,0)),
                }
            }else{
                return state;
            }
        }
        default: 
        return state
    }
}

export default productState;