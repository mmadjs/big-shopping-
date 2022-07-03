
import { Route ,Router,Routes} from 'react-router-dom';
import './App.css';
import CartProvider from './providers/CartProvider';
import Layout from './layot/layot';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   
    <CartProvider>
<ToastContainer/>
      <Routes>
        
      <Route  path='/' element={<HomePage/>} />
      <Route  path='/cart' element={<CartPage/>} />
   </Routes>
   </CartProvider>


     


    
    
 
  );
}

export default App;
