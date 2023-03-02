import React, { useEffect, useState } from "react";
import { Item } from "../../models/item";
import ShopItem from "./ShopItem";
import classes from "./Shop.module.css";
import ShopForm from "./ShopForm";

const Shop = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("All");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Could not fetch products data");
      }
      const data: Item[] = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);

  const searchHandler = (string: string) => {
    setSearch(string);
  };

  const categoryHandler = (string: string) => {
    setCategory(string);
  };

  const filterData = (array: Item[]) => {
    return array
      .filter((item) => {
        if (search === "") {
          return item;
        } else {
          return item.title.toLowerCase().includes(search);
        }
      })
      .filter((item) => {
        if (category === "All") {
          return item;
        } else {
          return item.category === category.toLowerCase();
        }
      });
  };

  const displayData = () => {
    const filteredItems = filterData(items);

    if (items.length > 0) {
      if (filteredItems.length > 0) {
        return filteredItems.map((data) => {
          return <ShopItem key={data.id} item={data} />;
        });
      } else {
        return (
          <p className={classes.paragraph}>
            There is no item for this research
          </p>
        );
      }
    } else {
      return <p className={classes.paragraph}>Loading...</p>;
    }
  };

  return (
    <section className={classes.shop}>
      <ShopForm onSearch={searchHandler} onCategory={categoryHandler} />
      <ul className={classes.itemList}>{displayData()}</ul>
    </section>
  );
};

export default Shop;
