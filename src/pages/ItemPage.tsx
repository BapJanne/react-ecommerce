import React, { Fragment } from "react";
import ItemDescription from "../components/Item/ItemDescription";
import Nav from "../components/Nav/Nav";

const ItemPage = () => {
  return (
    <Fragment>
      <Nav />
      <ItemDescription />
    </Fragment>
  );
};

export default ItemPage;
