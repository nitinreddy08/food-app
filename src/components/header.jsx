import "./header.css"
import { logoUrl } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  let [btnName,setbtnName] = useState("Login")

  return (
    <div className="header">
      <img className="logo"
        src={logoUrl}
        alt="logo"
      />

      {/* head items */}
      <ul className="headitems">
        <li><Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>Home</Link></li>
        <li><Link style={{ textDecoration: "none", color: "inherit" }} to={"/about"}>About Us</Link></li>
        <li><Link style={{ textDecoration: "none", color: "inherit" }} to={"/contact"}>Contact Us</Link></li>
        <li>Cart</li>
        <button onClick={()=>{
          if (btnName === "Login"){
            setbtnName("Logout")
          }else{
            setbtnName("Login")
          }
        }}>{btnName}</button>
      </ul>
    </div>
  );
}
