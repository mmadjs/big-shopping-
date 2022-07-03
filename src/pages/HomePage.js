import Layout from "../layot/layot";
import * as data from "../data1";
import { useCartAction, useCart } from "../providers/CartProvider";
import  CehkinCart  from "../utils/cehkinCart";
import { toast } from "react-toastify";
// import { product } from "../../data/data";
const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartAction();
  const addProductHandler = (p) => {
    // console.log(p);
    toast.success(`${p.name} ADD to your cart`)
    dispatch({ type: "ADD_to_cart", payload: p });
  };
  return (
    <Layout>
      <main className="container">
        <div className="product-list">
          {data.products.map((p) => {
            return (
              <section className="product" key={p.id}>
                <div>
                  <img className="img" src={p.image} alt={p.name}></img>
                </div>
                <div className="product-decription">
                  <p>{p.name}</p>
                  <button
                    onClick={() => addProductHandler(p)}
                    className="btn primary"
                  >
                    { CehkinCart(cart, p) ? "have in cart " : "add to cart"}{" "}
                  </button>

                  <p>${p.price}e</p>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
