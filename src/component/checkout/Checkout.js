import { useAuth, useAuthAction } from "../../providers/Authprovider";
import { useCart } from "../../providers/CartProvider";
const Checkoutdetail = () => {
  const deatailuser = useAuth();
  const { cart, total } = useCart();
  return (
    <section className="checkout">
      <div className="userCheckout">
        {deatailuser ? (
          <>
            {" "}
            <p>
              <span>name</span> {deatailuser.name}
            </p>
            <p>
              <span>email</span> {deatailuser.email}
            </p>
            <p>
              <span>phone</span> {deatailuser.phoneNumber}
            </p>
          </>
        ) : (
          <p>please login</p>
        )}
      </div>
      <div className="cartCheckout">
        {cart.map((c) => {
          return (
            <div>
            <div key={c.id} className="boxCart">
                <p><span> name:</span> {c.name}</p><p> <span>number :</span> {c.quntity}</p><p> <span>price wiht off :</span> {c.offPrice}</p>
                <img src={c.image}></img>
            </div>
            <hr/>
            <h4> <span>total price :</span> {total}</h4>
            </div>
          );
        })}
        {/* {cart.name} */}
      </div>
    </section>
  );
};

export default Checkoutdetail;
