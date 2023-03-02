import React from "react";
import { useDispatch } from "react-redux";
import { CartItemType } from "../../models/cartItemType";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem: React.FC<{ item: CartItemType }> = (props) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item.id));
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart(props.item));
  };

  return (
    <li className={classes.cartItem}>
      <div>
        <img src={props.item.img} alt={props.item.name} />
      </div>
      <div>
        <h3>{props.item.name}</h3>
        <div>
          <p>Unit price: {props.item.price.toFixed(2)} $</p>
          <p>Total price: {props.item.totalPrice.toFixed(2)} $</p>
        </div>
        <div className={classes.formItemContainer}>
          <button onClick={removeItemHandler} className={classes.button}>
            -
          </button>
          <p className={classes.itemQuantity}>{props.item.quantity}</p>
          <button onClick={addItemHandler} className={classes.button}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
