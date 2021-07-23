import Itemstable from "./Items/table";
import TotalCalc from "./Total/total";
import "./baselayout.css";
import { DataProvider } from "../Context/data-context";

function Baselayout(props) {
  const hideAlert = () => {
    document.getElementById("alert").style.display = "none";
  };

  return (
    <div className="baselayout">
      <div id="alert" className="alert">
        <span className="closebtn" onClick={() => hideAlert()}>
          &times;
        </span>
        <strong>Item Deleted!</strong>
      </div>
      <div className="order-summary">
        <span className="back-icon">&#8249;</span> <span>Order Summary</span>
      </div>
      <div className="segments">
        <DataProvider>
          <div className="right-segment">
            <TotalCalc />
          </div>

          <div className="left-segment">
            <Itemstable />
          </div>
        </DataProvider>
      </div>
    </div>
  );
}
export default Baselayout;
