import Layout from "../layot/layot";
import { Link, NavLink, Route } from "react-router-dom";
import style from "../component/navigation.moudle.css";
import { useCart } from "../providers/CartProvider";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li className="linkCart">
            <NavLink to="/cart">
              cart
              <span>{cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">signup</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
