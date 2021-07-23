import Itemstable from "./Items/table";
import TotalCalc from "./Total/total";
import "./baselayout.css";
import { DataProvider } from "../Context/data-context";

function Baselayout(props) {
  return (
    <div className="baselayout">
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
