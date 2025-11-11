import { Routes, Route } from "react-router-dom";
import Navi from './componenets/navigationbar/Navi';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';   

function App() {
  return (
    <>
      <Navi />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
