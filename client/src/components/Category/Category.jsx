import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

  return (
    <div className="category-main-content">
      <div className="layout">
        <h1 className="category-title">
          {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
        </h1>
        <div className="products-container">
          <Products innerPage={true} products={data} />
        </div>
      </div>
    </div>
  );
};

export default Category;
