import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const nbOfElementInCart: number = useSelector(
    (state: any) => state.cart.totalQuantity
  );

  const buttonClass: string = useSelector(
    (state: any) => state.cart.cartUpdateStatus
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(cartActions.removeClassCart());
    }, 500);
    return () => clearTimeout(timer);
  }, [buttonClass, dispatch]);

  const buttonClassHandler = () => {
    if (buttonClass === "remove") {
      return classes.cartButtonRemove;
    } else if (buttonClass === "add") {
      return classes.cartButtonAdd;
    } else if (buttonClass === "normal") {
      return classes.cartButtonNormal;
    }
  };

  return (
    <Link
      to={"/cart"}
      className={`${classes.cartLink} ${buttonClassHandler()}`}
    >
      <img src={require("../../img/cartImg.png")} alt="cart png" />
      <span>{nbOfElementInCart}</span>
    </Link>
  );
};

export default CartButton;
