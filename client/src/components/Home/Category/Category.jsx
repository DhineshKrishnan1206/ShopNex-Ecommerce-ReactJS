import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                item.attributes.img?.data?.attributes?.url
                  ? process.env.REACT_APP_STRIPE_APP_DEV_URL +
                    item.attributes.img.data.attributes.url
                  : ''
              }
              alt={item.attributes.title} // Add alt text for accessibility
            />
            <div className="category-title">{item.attributes.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
