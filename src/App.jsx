import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

