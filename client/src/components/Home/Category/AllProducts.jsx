import "../Category/AllProducts.scss"
import "./Category.scss";
import Category from "./Category";
import { fetchDataFromApi } from "../../../utils/api";
import { Context } from "../../../utils/context";
import React, { useEffect, useContext } from "react";

const AllCategory =() => {
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

  return(
  
    <div>
      <h2>All Category</h2>
      <Category categories={categories} />

    </div>
  )
}
export default AllCategory;