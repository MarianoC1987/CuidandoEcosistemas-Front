import { useEffect, useState } from "react";
import Rule_trefle_api from "../../api/Rule_Trefle_api";
import "./showTreflePlants.css";

function ShowTreflePlants(props) {
  const [list, setList] = useState([]);

  const showTrefle = async (search) => {
    await Rule_trefle_api.getAll(search)
      .then((result) => {
        setList(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    showTrefle(props.searchValue);
  }, []);

  return <section className="trefleContainer"></section>;
}
export default ShowTreflePlants;
