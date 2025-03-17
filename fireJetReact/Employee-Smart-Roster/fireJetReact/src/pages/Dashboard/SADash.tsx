import SASide from "../../components/SideMenu/SASide";
import RatingChart from "../../components/sa/RatingChart/RatingChart";
import SubscriptionBar from "../../components/sa/SubscriptionBar/SubscriptionBar";
import RegisReq from "../../components/sa/Registration_Request/RegisReq";
import "./SADash.css"
import "../../../public/styles/common.css"

export default function SADash({ className = "" }: BodyProps) {

    return(
        <div className="App-content">
            <div className="side-menu">
                <SASide />
            </div>
            <div className="dashboard-content">
                <div className="virtual-data">
                    <RatingChart />
                    <SubscriptionBar />
                </div>
                <div className="table-data">
                    <RegisReq />
                </div>
            </div>
        </div>
    );
}

interface BodyProps {
  className?: string;
}