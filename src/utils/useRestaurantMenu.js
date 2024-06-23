import { useState } from "react";
import { useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_API}${resId}`);
    const json = await data.json();
    setResInfo(json);
    // console.log(resInfo);
    return resInfo;
  };
  if (resInfo === null) {
    console.log("null returned");
  } else {
    console.log("proper returned");
  }
  return resInfo;
};

export default useRestaurantMenu;
