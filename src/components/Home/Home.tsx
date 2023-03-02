import React from "react";
import { Link } from "react-router-dom";
import Button from "../UX/Button";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <p className={classes.homeDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit,
        quo modi officia labore numquam impedit error, accusamus eaque
        accusantium cum. Nulla amet facilis eaque inventore voluptas et optio
        reprehenderit!
      </p>
      <Link to="/shop" className={classes.link}>
        <Button>Go to the shop</Button>
      </Link>
    </section>
  );
};

export default Home;
