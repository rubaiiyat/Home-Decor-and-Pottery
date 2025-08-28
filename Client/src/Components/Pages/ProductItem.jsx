import React from "react";

const ProductItem = ({ item }) => {
  const {
    name,
    description,
    image,
    category,
    price,
    rating,
    stockStatus,
    username,
  } = item;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ProductItem;
