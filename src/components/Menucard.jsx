import { useEffect, useState } from "react";
import Header from "./header";
import "./Menucard.css"
import { useParams } from "react-router-dom";

export default function Menucard() {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    MenuData();
  },[]);

  const{resid} = useParams()

  async function MenuData() {
    let Data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.91239292213611&lng=77.60238703340292&restaurantId="+resid+"&catalog_qa=undefined&submitAction=ENTER"
    );

    let jsonData = await Data.json();
    setResData(jsonData);
  }

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
