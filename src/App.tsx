import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { LoginProvider } from "./context/LoginContext";
import { CartProvider } from "./context/cartContext";
import CartPage from "./pages/cartPage";
import Teste from "./pages/teste";

export default function App() {
  return (
    <CartProvider>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/teste" element={<Teste />} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </CartProvider>
  );
}
