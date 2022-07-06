import Layout from "../layot/layot";
import { useCart, useCartAction } from "../providers/CartProvider";
import "../pages/CartPage.css";
import {  Link, NavLink, Route } from "react-router-dom";


const CartPage = () => {

  const { cart, total } = useCart();
  const dispatch = useCartAction();
  const increamentHanlder = (cartItem) => {
    dispatch({ type: "ADD_to_cart", payload: cartItem });
  };
  const removeHandler = (cartItem) => {
    dispatch({ type: "Remove_from_cart", payload: cartItem });
  };
  return (
    <Layout>
      <main className="cntainer-cart">
        <CartSummery  />
        <section className="products">
          {cart.length ? (
            // <div></div>
            cart.map((item) => (
              <div key={item.id} className="product-cart">
                <div className="detail-cart">
                  <p> {item.name} </p>

                  <span style={{ color: "red" }}>${item.offPrice}</span>
                  <span>${item.price * item.quntity}</span>
                  <div>
                    <button onClick={() => increamentHanlder(item)}>+</button>
                    <button onClick={() => removeHandler(item)}>-</button>
                    <button>{item.quntity}</button>
                  </div>
                </div>
                <div className="img-cart">
                  {" "}
                  <img src={item.image}></img>{" "}
                </div>
              </div>
            ))
          ) : (
            <p className="empty-cart">no itme in your cart</p>
          )}
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;

export const CartSummery = () => {
  const {cart,total} = useCart()
  const originalPrice = cart.length ?  cart.reduce((acc,curr)=>acc+curr.quntity *curr.price,0):0;
  return (
    <section className="cart-summery">
      <h2>your summery </h2>

      <div className="summeryItem">
        <p>original total price</p>
        <p>{originalPrice}</p>
      </div>
      <div className="summeryItem ">
        <p>cart discount</p>
        <p>{originalPrice - total}</p>
      </div>
      <div className="summeryItem line">
        <p>your price</p>
        <p>{total}</p>
      </div>
      <Link to="/signup?redirect=checkout">
      <button  className="btn" >cehckout</button>
      </Link>
    </section>
  );
};
