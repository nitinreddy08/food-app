// import { useState } from "react";

// export default function SearchItems() {

//   const[searchText, setSearchText] = useState("")

//   return (
//     <div>
//       <input className="search" placeholder="Enter Restraunt Name or Dish " value={searchText} onChange={(e)=>{
//         setSearchText(e.target.value);
//         console.log("updated text")
//       }

//       } />
//       <button onClick={()=>{
//         const searchedRestros =
//         setSearchText()

//       }}>search</button>
//     </div>
//   );
// }

// function SearchItems() {
//   const [searchText, setSearchText] = useState("");

//   return (
//     <div>
//       <input
//         className="search"
//         placeholder="Enter Restraunt Name or Dish "
//         value={searchText}
//         onChange={(e) => {
//           setSearchText(e.target.value);
//           console.log("updated text");
//         }}
//       />
//       <button
//         onClick={() => {
//           const searchedRestros = setSearchText();
//         }}
//       >
//         search
//       </button>
//     </div>
//   );
// }
