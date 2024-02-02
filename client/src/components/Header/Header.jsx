import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";

import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import { Button, Space } from "antd";
import { useAuthContext } from "../../context/AuthContext";

import { removeToken } from "../../helpers";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
  };
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { cartCount, showCart, setShowCart } = useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className={`left ${searchModal ? "hide-on-mobile" : ""}`}>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/About")}>About</li>
            <li onClick={() => navigate("/AllProducts")}>Categories</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>
            ECOMMERCE STORE.
          </div>
          <div className="right">
            <Space className="auth_buttons">
              {user ? (
                <>
                  <Button className="auth_button_login" href="/profile" type="link">
                    {user.username}
                  </Button>
                  <Button
                    className="auth_button_signUp"
                    type="primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button className="auth_button_login" href="/signin" type="link">
                    Login
                  </Button>
                  <Button
                    className="auth_button_signUp"
                    href="/signup"
                    type="primary"
                  >
                    SignUp
                  </Button>
                </>
              )}
            </Space>
            <BsSearch onClick={() => setSearchModal(true)} />

            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {searchModal && <Search setSearchModal={setSearchModal} />}
      {showCart && <Cart />}
    </>
  );
};

export default Header;
