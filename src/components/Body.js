import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resOBJ from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RECOMMENDED_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(RECOMMENDED_LIST);
    const data = await res.json();

    const list =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(list);
    setFilteredRest(list);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1> You are Offline ...</h1>;

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              filteredRest.filter((res) => res.info.avgRating >= 4.0)
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // I will need the search text from here
              // will need the value from the input boxDecorationBreak:
              searchText.trim();
              const list = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRest(list);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRest.map((res) => (
          <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
