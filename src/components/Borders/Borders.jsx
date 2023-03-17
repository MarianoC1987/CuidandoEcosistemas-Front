import top from "../../assets/images/topframe.png";
import med from "../../assets/images/medframe.png";
import bottom from "../../assets/images/bottomframe.png";
import "./borders.css";

function Borders() {
  return (
    <>
      <div className="borders-container">
        <img src={top} alt="" />
        <img src={med} alt="" />
        <img src={bottom} alt="" />
      </div>
    </>
  );
}

export default Borders;
