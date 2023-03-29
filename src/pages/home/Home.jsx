import Chart from "../../components/charts/area/Chart";
import Circular from "../../components/charts/circular/Circular";
import BasicTable from "../../components/tables/basic/BasicTable";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Circular />
        <Chart title="Last 6 Months (Revenue)" aspect={2.5 / 1} />
      </div>

      <div className="table-container">
        <h1 className="list-title">Latest Transactions</h1>
        <BasicTable />
      </div>
    </div>
  );
};

export default Home;
