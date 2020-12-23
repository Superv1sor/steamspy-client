import React from "react";
import Spinner from "../ui/Spinner";

const ItemsGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {items.map((item) => (
        <div className="box" key={item.appid}>
          <img
            src={`https://steamcdn-a.akamaihd.net/steam/apps/${item.appid}/capsule_184x69.jpg`}
            alt=""
          />
          <p>{item.name}</p>
          <div className="clearfix"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemsGrid;
