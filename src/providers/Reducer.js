
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_to_cart": {
      // console.log(action,state);
      // return{...state,cart:[state.cart,{...action.payload, quntity}]}
      // console.log(state.cart);
      // return{...state.cart}
      const updateCart = [...state.cart];
      const index = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
       
        updateCart.push({ ...action.payload, quntity: 1 });
      } else {
        const updatedItem = { ...updateCart[index] };
        updatedItem.quntity++;
        updateCart[index] = updatedItem;
      }
      return { ...state, cart: updateCart,total:state.total + action.payload.offPrice };
    }
    case "Remove_from_cart":{
      const updateCart = [...state.cart];
      const index = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updateCart[index] };
      if (updatedItem.quntity === 1) {
     
        const filtercart = updateCart.filter((item) => item.id !== action.payload.id);
        return { ...state, cart: filtercart ,total:state.total - action.payload.offPrice};
      } else {
        updatedItem.quntity--;
        updateCart[index] = updatedItem;
        return { ...state, cart: updateCart,total:state.total - action.payload.offPrice };
      }}

    default:
      return state;
  }
};

export default CartReducer;
