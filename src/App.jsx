import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import ItemCard from "./components/itemcards";
import Shimmer from "./components/shimmer";

function App() {
  const [restros, setrestros] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.91239292213611&lng=77.60238703340292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const new_data =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    console.log(new_data);
    setrestros(new_data);
  };

  function handlefilter() {
    let filterrestros = restros.filter((restro) => restro?.info?.avgRating > 4);
    setrestros(filterrestros);
  }

  if (restros.length ===0){
    return <Shimmer></Shimmer>
  }


  

  return (
    <div>
      <Header />
      <button className="filter" onClick={handlefilter}>
        Top Rated
      </button>

      <div className="container">
        {restros.map((restro) => (
          <ItemCard key={restro?.info?.id} resData={restro} />
        ))}
      </div>
    </div>
  );
}

export default App;
