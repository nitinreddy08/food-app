import { useEffect, useState } from "react";

export default function Menucard() {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    MenuData();
  }, []);

  async function MenuData() {
    let Data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.91239292213611&lng=77.60238703340292&restaurantId=290271&catalog_qa=undefined&submitAction=ENTER"
    );

    let jsonData = await Data.json();
    // console.log(jsonData);
    setResData(jsonData);
  }

  const restaurantInfo = resData?.data?.cards[2]?.card?.card?.info;

  const  items  =
     resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2] ||
      {};
    console.log( items );

  return (
    <div>
      <h2>{restaurantInfo?.name}</h2>
      <p>city : {restaurantInfo?.city}</p>
      <p>cuisines : {restaurantInfo?.cuisines.join(" , ")}</p>
      <ul>
        <li>items</li>
        <li>items</li>
        <li>items</li>
        <li>items</li>
        <li>items</li>
        <li>items</li>
        <li>items</li>
      </ul>
    </div>
  );
}
