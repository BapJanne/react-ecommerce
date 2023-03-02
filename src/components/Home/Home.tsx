import React from "react";
import { Link } from "react-router-dom";
import Button from "../UX/Button";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <p className={classes.homeDescription}>
        Bienvenue ! Vous êtes actuellement sur un site créé dans le but de
        développer mes compétences avec React, Typescript et Redux
      </p>
      <Link to="/shop" className={classes.link}>
        <Button>Go to the shop</Button>
      </Link>
    </section>
  );
};

export default Home;
