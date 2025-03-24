import "./header.css";
import { logoUrl } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  let [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div style={{display:"flex"}} >
        <img style={{marginRight:10}} className="logo" src={logoUrl} alt="logo" />
        <h1 style={{fontFamily:"serif"}}>Focus on Food</h1>
      </div>

      {/* head items */}
      <ul className="headitems">
        <li>
          <Link style={{ textDecoration: "none", color: "inherit", fontFamily:"serif", fontSize:20 }} to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "inherit", fontFamily:"serif", fontSize:20 }}
            to={"/about"}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "inherit", fontFamily:"serif", fontSize:20 }}
            to={"/contact"}
          >
            Contact Us
          </Link>
        </li>
        <li style={{ textDecoration: "none", color: "inherit", fontFamily:"serif", fontSize:20}}>Cart</li>
        <button
        style={{borderRadius:10, height:27, width:70, textDecoration: "none", color: "inherit", fontFamily:"serif", fontSize:20 }}
          onClick={() => {
            if (btnName === "Login") {
              setbtnName("Logout");
            } else {
              setbtnName("Login");
            }
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
}
