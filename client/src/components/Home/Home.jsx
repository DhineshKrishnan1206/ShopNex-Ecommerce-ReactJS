import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { products, setProducts, categories, setCategories } = useContext(
    Context
  );

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <div className="new-div">
            <img
              className="background-image"
            />
            <div className="overlay-text">
              <h3>Iphone 13 PRO</h3>
              <p>Ceramic Shield front, Textured matte glass back</p><p>stainless steel design
              </p>
              <br></br>
              <button>BUY NOW</button>
            </div>

          </div>
          
          <Products
            headingText={
              <h2 style={{ color: "black", fontSize: "24px" }}>
                Popular Products
              </h2>
            }
            products={products}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
