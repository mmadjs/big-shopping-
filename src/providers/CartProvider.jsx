import { useContext, useReducer,createContext  } from "react";
import CartReducer from "./Reducer";
const Cartcontext = createContext();
const CartcontextDispather = createContext();
const initialstat={
  cart:[],
  total:0,
}
const CartProvider = ({ children }) => {
 const [cart ,dispatch]= useReducer(CartReducer,initialstat)
  return (
    <Cartcontext.Provider value={cart}>
      <CartcontextDispather.Provider value={dispatch}>
        {children}
      </CartcontextDispather.Provider>
       </Cartcontext.Provider>
  );
};

export default CartProvider;

export const  useCart =()=>{
  return useContext(Cartcontext)
}
export const useCartAction =()=>{
  return useContext(CartcontextDispather)
}