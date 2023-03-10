import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circular.scss";

const Featured = () => {
  return (
    <div className="circular">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="circular-chart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transaction processing. Last payment may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <span className="item-title">Target</span>
            <div className="item-result negative">
              <KeyboardArrowDownIcon className="icon" />
              <span className="result-amount">$12.4k</span>
            </div>
          </div>
          <div className="item">
            <span className="item-title">Last Week</span>
            <div className="item-result positive">
              <KeyboardArrowUpIcon className="icon" />
              <span className="result-amount">$12.4k</span>
            </div>
          </div>
          <div className="item">
            <span className="item-title">Last Month</span>
            <div className="item-result positive">
              <KeyboardArrowUpIcon className="icon" />
              <span className="result-amount">$12.4k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
