import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Item } from "../../models/item";
import { cartActions } from "../../store/cart-slice";
import classes from "./ItemDescription.module.css";

const ItemDescription = () => {
  const item: Item = useLocation().state;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        price: item.price,
        quantity: item.price,
        totalPrice: item.price,
        name: item.title,
        img: item.image,
      })
    );
  };

  return (
    <section className={classes.container}>
      <h2 className={classes.title}>{item.title}</h2>
      <div className={classes.ratings}>
        <progress id="file" max="5" value={item.rating.rate} />
        <p>{item.rating.rate} / 5</p>
      </div>
      <img src={item.image} alt={item.title} />
      <p className={classes.description}>{item.description}</p>
      <p className={classes.price}>{item.price.toFixed(2)} $</p>
      <button onClick={addToCartHandler} className={classes.button}>
        Add to cart
      </button>
    </section>
  );
};

export default ItemDescription;
