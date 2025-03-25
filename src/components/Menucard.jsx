import Header from "./header";
import "./Menucard.css"
import useMenucard from "../utils/useMenucard";

export default function Menucard() {
  const resData = useMenucard() 

  const restaurantInfo = resData?.data?.cards[2]?.card?.card?.info;

  const items =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3] || {};
  console.log(items);

  return (
    <div>
      <Header />
      <div className="menus">
        <h2>{restaurantInfo?.name}</h2>
        <p>city : {restaurantInfo?.city}</p>
        <p>cuisines : {restaurantInfo?.cuisines.join(" , ")}</p>
        <ul>
          {items?.card?.card?.itemCards?.slice(0)?.map((item) => (
            <li key={resData?.data?.cards[2]?.card?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
