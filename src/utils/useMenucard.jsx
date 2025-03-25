import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuLink } from "./links";

export default function useMenucard() {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    MenuData();
  }, [resData]);

  const { resid } = useParams();

  async function MenuData() {
    let Data = await fetch(menuLink + resid);

    let jsonData = await Data.json();
    setResData(jsonData);
  }
  return resData;
}
