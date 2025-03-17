import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import ItemCard from "./components/itemcards";
import Shimmer from "./components/shimmer";
import { Link } from "react-router-dom";

function SearchItems({ searchText, setSearchText, handleSearch }) {
  return (
    <div>
      <input
        className="search"
        placeholder="Enter Restaurant Name or Dish"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}


function App() {
  const [restros, setrestros] = useState([]);
  const [filteredRestros, setFilteredRestros] = useState([]);
  const [searchText, setSearchText] = useState("");

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

    setrestros(new_data);
    setFilteredRestros(new_data); // Set both original and filtered state
  };

  function handleFilter() {
    const filtered = restros.filter((restro) => restro?.info?.avgRating > 4.5);
    let sortedData = filtered.sort((a, b) => b.info.avgRating - a.info.avgRating);
    setFilteredRestros(sortedData);
}



  function handleSearch() {
    const searchedRestros = restros.filter((restro) =>
      restro?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestros(searchedRestros);
  }


  if (restros.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <Header />
      <div className="nav-bar">
        <SearchItems
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />
        <button className="filter" onClick={handleFilter}>
          Top Rated
        </button>
      </div>
      <div className="container">
        {filteredRestros.map((restro) => (
          <Link style={{ textDecoration: "none", color: "inherit"}} to={"/restraunt/"+restro?.info?.id}><ItemCard key={restro?.info?.id} resData={restro} /></Link>
        ))}
      </div>
    </div>
  );
}


export default App;
