
import { Route ,Router,Routes} from 'react-router-dom';
import './App.css';
import CartProvider from './providers/CartProvider';
import Layout from './layot/layot';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import Checkout from './pages/Checkoutpage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Loginpage';
import Signup from './pages/Signppage';
function App() {
  return (
   
    <CartProvider>
<ToastContainer/>
      <Routes>
        
      <Route  path='/' element={<HomePage/>} />
      <Route  path='/cart' element={<CartPage/>} />
      <Route  path='/checkout' element={<Checkout/>} />
      <Route  path='/login' element={<Login/>} />
      <Route  path='/signup' element={<Signup/>} />
   </Routes>
   </CartProvider>


     


    
    
 
  );
}

export default App;
