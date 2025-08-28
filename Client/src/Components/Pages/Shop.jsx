// Shop.jsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import ProductItem from "./ProductItem";

const Shop = () => {
  const items = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (items && items.length > 0) {
      setLoading(false);
    }
  }, [items]);

  if (loading)
    return (
      <div className="mx-auto">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );

  return (
    <div>
      <div>
        {items.map((item) => (
          <ProductItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
