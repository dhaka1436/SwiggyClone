import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left"
        >
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-[1px] text-left flex "
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>

                <span>
                  Rs.{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>

              <p className="text-xs"> {item.card.info.description} </p>
            </div>

            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="p-2 -mx-12 -mt-6 bg-black text-white shadow-lg rounded-md">
                  Add +
                </button>
              </div>
              <img
                className="w-[80px] h-[80px] rounded-lg"
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
