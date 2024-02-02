import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/context";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from "./components/About/About";

import AppRoutes from "./Routes";
import AllProducts from "./components/Home/Category/AllProducts";

function App() {
  
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path='/About' element={<About />}/> 
          </Routes>
        <AppRoutes />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
