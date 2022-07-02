import Layout from "../layot/layot"
import {  Link, NavLink, Route } from "react-router-dom";
import style from '../component/navigation.moudle.css'


const Navigation = () => {
    return ( 
        <header className="mainNavigation">
            <nav>
                <ul>
                    <li>
                        <NavLink  to='/' >home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart' >card</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;