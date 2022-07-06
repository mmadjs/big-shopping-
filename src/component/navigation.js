import Layout from "../layot/layot";
import { Link, NavLink, Route } from "react-router-dom";
import style from "../component/navigation.moudle.css";
import { useCart } from "../providers/CartProvider";
import { useAuth } from "../providers/Authprovider";
import {BsBagCheckFill} from 'react-icons/bs'
import {FaUserAlt } from 'react-icons/fa'
import {HiOutlineLogin} from  'react-icons/hi'

const Navigation = () => {
  const { cart } = useCart();
  const userdata = useAuth()
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li className="linkCart">
            <NavLink to="/cart">
              <BsBagCheckFill/>
              <span>{cart.length}</span>
            </NavLink>
          </li>
        
          
        </ul>
        <ul>
          <li>
            <NavLink to={userdata ?"/profile" : "/login"} >
              {userdata ? <FaUserAlt /> : <HiOutlineLogin/>}
              </NavLink>
          </li>
          </ul>
      </nav>
    </header>
  );
};

export default Navigation;
