import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = (props) => {
  const { data, showItems } = props;

  const { title, itemCards } = data;
  const { setShowIndex } = props;
  const { index, showIndex, collapseIndex } = props;

  const handleClick = () => {
    if (index === showIndex) collapseIndex(null);
    else setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {title}({itemCards.length})
        </span>

        <span>🔻</span>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
