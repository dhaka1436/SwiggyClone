import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resOBJ from "../utils/mockData";

const Body = () => {
  // state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resOBJ);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating >= 4.0)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
