import Footer from "../component/Footer";
import Navigation from "../component/navigation";

const Layout = ({children}) => {
    return ( <div>
         <Navigation/> 
         {children}
         <Footer/>
    </div> );
}
 
export default Layout;