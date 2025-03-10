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
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About Us</Link></li>
        <li><Link to={"/contact"}>Contact Us</Link></li>
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
