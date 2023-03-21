import MenuBar from "../MenuBar/MenuBar";
import Background from "../../assets/images/cubism.png";
import "../CubismBackground/cubism.css";

function Cubism() {
  return (
    <div className="cubism">
      <img src={Background} />
      <MenuBar />
    </div>
  );
}
export default Cubism;
