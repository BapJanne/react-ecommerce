import React from "react";
import classes from "./ShopForm.module.css";

const ShopForm: React.FC<{
  onSearch: (string: string) => void;
  onCategory: (string: string) => void;
}> = (props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearch(e.target.value);
  };

  const onDropdownChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onCategory(e.target.value);
  };

  return (
    <div className={classes.form}>
      <input type="text" onChange={onChangeHandler} className={classes.text} />
      <div>
        <div className={classes.selectContainer}>
          <label>Sort by :</label>
          <select onChange={onDropdownChangeHandler} className={classes.select}>
            <option value="All">All</option>
            <option value="Electronics">Electronis</option>
            <option value="Women's clothing">Women's clothing</option>
            <option value="Men's clothing">Men's clothing</option>
            <option value="Jewelery">Jewelery</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopForm;
