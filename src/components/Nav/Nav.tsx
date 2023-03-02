import React from "react";
import CartButton from "../Cart/CartButton";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.navContainer}>
      <div className={classes.navChild}>
        <Link to={"/"} className={classes.logo}>
          <h1>React Ecommerce</h1>
        </Link>
        <div className={classes.linkContainer}>
          <Link className={classes.navLink} to="/shop">
            Shop
          </Link>
          <CartButton />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
