import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import resOBJ from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RECOMMENDED_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { setUserName, loggedInUser } = useContext(UserContext);

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

  return filteredRest == undefined || filteredRest.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={() => {
              setListOfRestaurants(
                filteredRest.filter((res) => res.info.avgRating >= 4.0)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 ">
          <input
            className="border border-solid border-black p-1"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 m-4 bg-green-200 rounded-xl"
            onClick={() => {
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
        <div className="search m-4 p-4 flex items-center ">
          <input
            className="border border-black m-2 p-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {filteredRest.map((res) => (
          <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
            {res.info.avgRating >= 4.0 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
