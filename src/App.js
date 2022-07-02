
import { Route ,Routes} from 'react-router-dom';
import './App.css';
import Layout from './layot/layot';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';

function App() {
  return (
   <div className="App">
      

    <Routes>
      <Route  path='/' element={<HomePage/>} />
      <Route  path='/cart' element={<CartPage/>} />
    </Routes>
    </div>
    
 
  );
}

export default App;
