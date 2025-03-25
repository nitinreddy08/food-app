import { useState, useEffect, useParams } from "react";
import { menuLink } from "./links";

function useMenucard() {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    MenuData();
  }, []);

  const { resid } = useParams();

  async function MenuData() {
    let Data = await fetch(menuLink + resid);

    let jsonData = await Data.json();
    setResData(jsonData);
  }

  return resData;
}

export default useMenucard;
