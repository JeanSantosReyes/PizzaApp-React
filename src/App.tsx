import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CartPage, HomePage, PizzaPage, ShopPage } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pizzas" element={<ShopPage />} />
          <Route path="/pizzas/:id" element={<PizzaPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
