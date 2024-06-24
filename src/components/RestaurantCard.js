import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props?.resData?.info;
  return (
    <div className="w-[250px] m-4 p-4 bg-green-100 hover:bg-gray-200">
      <img className="rounded-lg" src={`${CDN_URL}${cloudinaryImageId}`} />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
