import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Item } from "../../models/item";
import { cartActions } from "../../store/cart-slice";
import classes from "./ShopItem.module.css";

const ShopItem: React.FC<{ item: Item }> = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.item.id,
        price: props.item.price,
        quantity: props.item.price,
        totalPrice: props.item.price,
        name: props.item.title,
        img: props.item.image,
      })
    );
  };

  return (
    <li className={classes.container}>
      <div className={classes.itemImg}>
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <div className={classes.containerDescription}>
        <Link className={classes.itemLink} to="/item" state={props.item}>
          {props.item.title}
        </Link>
        <div className={classes.ratings}>
          <p>{props.item.rating.rate} / 5</p>
          <progress value={props.item.rating.rate} max={5} />
        </div>
        <p className={classes.price}>{props.item.price} $</p>
        <button className={classes.buttonAdd} onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default ShopItem;
