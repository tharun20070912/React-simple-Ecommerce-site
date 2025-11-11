// src/router.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navi from "./componenets/navigationbar/Navi";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";


export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* Top navigation stays visible on all routes */}
      <Navi />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        {/* Fallback: unknown paths redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
