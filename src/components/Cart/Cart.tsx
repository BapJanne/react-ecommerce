import React from "react";
import { useSelector } from "react-redux";
import { CartItemType } from "../../models/cartItemType";
import { RootState } from "../../store/index";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  const displayData = () => {
    if (cartItems.length > 0) {
      return cartItems.map((item: CartItemType) => {
        return (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
              totalPrice: item.totalPrice,
              price: item.price,
              img: item.img,
            }}
          />
        );
      });
    } else {
      return <p>There is no item in your cart</p>;
    }
  };

  return (
    <section className={classes.cart}>
      <ul className={classes.cartList}>{displayData()}</ul>
      <p className={classes.totalContainer}>
        {totalAmount > 0 && (
          <span className={classes.totalAmount}>
            Total : {totalAmount.toFixed(2)} $
          </span>
        )}
      </p>
    </section>
  );
};

export default Cart;
