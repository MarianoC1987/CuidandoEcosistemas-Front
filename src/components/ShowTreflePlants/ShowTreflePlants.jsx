import { useEffect, useLayoutEffect, useState } from "react";
import Rule_trefle_api from "../../api/Rule_Trefle_api";
import "./showTreflePlants.css";

function ShowTreflePlants(props) {
  const [list, setList] = useState([]);

  const showTrefle = async (search) => {
    const {
      data: {
        json: { data },
      },
    } = await Rule_trefle_api.getAll(search);
    setList(data);

    /* .then(() => {});
    setList(data); */
    /* .catch((error) => {
      console.log(error);
    }); */
  };

  useEffect(() => {
    showTrefle(props.searchValue);
  }, []);

  return (
    <section className="trefleContainer">
      {list?.map((item) => (
        <article className="trefleCard" key={item.id}>
          <div className="trefleImgContainer">
            <img src={item.image_url} className="trefleImg" />
          </div>
          <div className="trefleNames">
            <p className="trefleCommonName">
              <b>{item.common_name}</b>
            </p>
            <p className="trefleScientificName">
              <i>{item.scientific_name}</i>
            </p>
          </div>
        </article>
      ))}

      {/* <ul>
        {list?.map((item) => (
          <li></li>
        ))}
      </ul> */}
    </section>
  );
}
export default ShowTreflePlants;
