import "./itemcards.css";
import { cdnUrl } from "../utils/links";

export default function ItemCard({ resData }) {
  return (
    <div className="dishcard">
      <img
        className="dish"
        src={cdnUrl + resData?.info?.cloudinaryImageId}
        alt="dish-img"
      />
      <h5>{resData?.info?.name}</h5>
      <h6>{resData?.info?.cuisines?.join(", ")}</h6>
      <h6>{resData?.info?.avgRating} stars</h6>
    </div>
  );
}
