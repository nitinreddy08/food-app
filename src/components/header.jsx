import "./header.css"
import { logoUrl } from "../utils/links";

export default function Header() {
  return (
    <div className="header">
      <img className="logo"
        src={logoUrl}
        alt="logo"
      />

      {/* head items */}
      <ul className="headitems">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}
