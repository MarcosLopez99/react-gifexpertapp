import React from "react";
import { useFetchGift } from "../hooks/useFetchGift";
import GiftGridItem from "./GiftGridItem";

const GiftGrid = ({ category }) => {
  const { data, loading } = useFetchGift(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <h4>Loading....</h4>}
      <div className="card-grid">
        {data.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
